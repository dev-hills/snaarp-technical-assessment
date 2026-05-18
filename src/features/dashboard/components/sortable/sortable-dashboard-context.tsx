import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState, useCallback, useEffect } from "react";
import { SortableDashboardContext } from "./sortable-context";
import type {
  SortableDashboardContextValue,
  SortableDashboardProviderProps,
  WidgetOrderConfig,
} from "./types";

export function SortableDashboardProvider({
  children,
  defaultItems,
  storageKey,
  strategy = rectSortingStrategy,
  renderOverlay,
}: SortableDashboardProviderProps) {
  const [items, setItemsState] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved) as WidgetOrderConfig;
          const savedSet = new Set(parsed.widgets || []);
          const defaultSet = new Set(defaultItems);

          if (
            parsed.widgets &&
            Array.isArray(parsed.widgets) &&
            savedSet.size === defaultSet.size &&
            [...savedSet].every((id) => defaultSet.has(id))
          ) {
            return parsed.widgets;
          }
        }
      } catch {
        // Fall back to defaults when saved data is invalid.
      }
    }
    return defaultItems;
  });

  const [activeId, setActiveId] = useState<string | null>(null);
  const [overlaySize, setOverlaySize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const config: WidgetOrderConfig = {
          widgets: items,
          version: 1,
        };
        localStorage.setItem(storageKey, JSON.stringify(config));
      } catch {
        // localStorage not available
      }
    }
  }, [items, storageKey]);

  const setItems = useCallback(
    (newItems: string[] | ((prev: string[]) => string[])) => {
      setItemsState((prev) =>
        typeof newItems === "function" ? newItems(prev) : newItems,
      );
    },
    [],
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(String(event.active.id));
    const initialRect = event.active.rect.current.initial;

    if (initialRect) {
      setOverlaySize({
        width: initialRect.width,
        height: initialRect.height,
      });
    }
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || active.id === over.id) {
        setActiveId(null);
        setOverlaySize(null);
        return;
      }

      setItemsState((currentItems) => {
        const oldIndex = currentItems.indexOf(String(active.id));
        const newIndex = currentItems.indexOf(String(over.id));

        if (oldIndex === -1 || newIndex === -1) {
          return currentItems;
        }

        return arrayMove(currentItems, oldIndex, newIndex);
      });

      setActiveId(null);
      setOverlaySize(null);
    },
    [],
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
    setOverlaySize(null);
  }, []);

  const value: SortableDashboardContextValue = {
    items,
    setItems,
    activeId,
    setActiveId,
  };

  return (
    <SortableDashboardContext.Provider value={value}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={strategy}>
          {children(items)}
        </SortableContext>
        <DragOverlay>
          {activeId && renderOverlay ? (
            <div
              style={{
                width: overlaySize?.width,
                height: overlaySize?.height,
              }}
              className="pointer-events-none"
            >
              {renderOverlay(activeId)}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </SortableDashboardContext.Provider>
  );
}
