import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import type { ReactNode } from "react";
import type { SortingStrategy } from "@dnd-kit/sortable";

/**
 * Widget configuration for sortable dashboard
 */
export type WidgetConfig = {
  id: string;
  component: React.ComponentType<Record<string, unknown>>;
  props?: Record<string, unknown>;
  gridClassName?: string;
  group?: string;
};

/**
 * Widget order configuration stored in localStorage
 */
export type WidgetOrderConfig = {
  widgets: string[];
  version: number;
};

/**
 * Props for the SortableWidget wrapper component
 */
export type SortableWidgetProps = {
  id: string;
  children: ReactNode;
  className?: string;
  dragOverlay?: boolean;
};

/**
 * Props for the drag handle component
 */
export type DragHandleProps = {
  className?: string;
  ariaLabel?: string;
};

/**
 * Context value for the sortable dashboard
 */
export type SortableDashboardContextValue = {
  items: string[];
  setItems: (items: string[]) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

export type SortableItemContextValue = {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners | undefined;
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  isDragging: boolean;
};

export type SortableDashboardProviderProps = {
  children: (items: string[]) => ReactNode;
  defaultItems: string[];
  storageKey: string;
  strategy?: SortingStrategy;
  renderOverlay?: (activeId: string) => ReactNode;
};
