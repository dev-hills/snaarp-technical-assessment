import { createContext } from "react";
import type { SortableItemContextValue } from "./types";

export const SortableItemContext = createContext<SortableItemContextValue | null>(
  null,
);
