import { useContext } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "../../../../utils/cn";
import { SortableItemContext } from "./sortable-item-context";
import type { DragHandleProps } from "./types";

export function DragHandle({
  className,
  ariaLabel = "Drag to reorder",
}: DragHandleProps) {
  const sortableItem = useContext(SortableItemContext);

  // If used outside of sortable context, render a disabled handle
  if (!sortableItem) {
    return (
      <button
        type="button"
        disabled
        className={cn(
          "cursor-not-allowed rounded-lg p-1.5 text-slate-300 transition-colors",
          className
        )}
        aria-label={ariaLabel}
      >
        <GripVertical className="h-4 w-4" />
      </button>
    );
  }

  const { setActivatorNodeRef, attributes, listeners, isDragging } = sortableItem;

  return (
    <button
      type="button"
      ref={setActivatorNodeRef}
      {...attributes}
      {...listeners}
      className={cn(
        "cursor-grab rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 active:cursor-grabbing",
        isDragging ? "cursor-grabbing" : "",
        className,
      )}
      aria-label={ariaLabel}
      data-drag-handle
    >
      <GripVertical className="h-4 w-4" />
    </button>
  );
}
