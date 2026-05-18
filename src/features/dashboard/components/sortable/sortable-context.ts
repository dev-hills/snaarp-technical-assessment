import { createContext } from "react";
import type { SortableDashboardContextValue } from "./types";

export const SortableDashboardContext = createContext<SortableDashboardContextValue | null>(null);