import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "dashboard-group-state";
const STORAGE_VERSION = 1;

type DashboardGroupState = {
  collapsed: Record<string, boolean>;
  version: number;
};

type UseDashboardGroupStateParams = {
  groupIds: string[];
};

export function useDashboardGroupState({
  groupIds,
}: UseDashboardGroupStateParams) {
  const getDefaultCollapsedState = useCallback(
    () =>
      groupIds.reduce<Record<string, boolean>>((accumulator, id) => {
        accumulator[id] = false;
        return accumulator;
      }, {}),
    [groupIds],
  );

  const [collapsedById, setCollapsedById] = useState<Record<string, boolean>>(
    () => {
      if (typeof window === "undefined") {
        return getDefaultCollapsedState();
      }

      try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
          return {};
        }

        const parsed = JSON.parse(saved) as DashboardGroupState;
        const collapsed = parsed.collapsed ?? {};

        return groupIds.reduce<Record<string, boolean>>((accumulator, id) => {
          accumulator[id] = Boolean(collapsed[id]);
          return accumulator;
        }, {});
      } catch {
        return getDefaultCollapsedState();
      }
    },
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const state: DashboardGroupState = {
        collapsed: collapsedById,
        version: STORAGE_VERSION,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable
    }
  }, [collapsedById]);

  const toggleGroupCollapsed = useCallback((groupId: string) => {
    setCollapsedById((current) => ({
      ...current,
      [groupId]: !current[groupId],
    }));
  }, []);

  const resetCollapsedState = useCallback(() => {
    setCollapsedById(getDefaultCollapsedState());
  }, [getDefaultCollapsedState]);

  return {
    collapsedById,
    toggleGroupCollapsed,
    resetCollapsedState,
  };
}
