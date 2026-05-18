import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItemContext } from "./sortable-item-context";
import type { SortableWidgetProps } from "./types";
import { cn } from "../../../../utils/cn";

export function SortableWidget({
  id,
  children,
  className,
  dragOverlay = false,
}: SortableWidgetProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: dragOverlay,
  });

  if (dragOverlay) {
    return <div className={className}>{children}</div>;
  }

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <SortableItemContext.Provider
      value={{
        attributes,
        listeners,
        setActivatorNodeRef,
        isDragging,
      }}
    >
      <div
        ref={setNodeRef}
        style={style}
        className={cn(
          "touch-none",
          isDragging ? "z-10 opacity-90" : "",
          className,
        )}
      >
        {children}
      </div>
    </SortableItemContext.Provider>
  );
}
