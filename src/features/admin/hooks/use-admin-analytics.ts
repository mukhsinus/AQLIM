import { useQuery } from "@tanstack/react-query";
import { getAdminAnalytics } from "../api/admin-api";

export const adminAnalyticsKeys = {
  all: ["admin", "analytics"] as const,
  byPeriod: (period?: string) => [...adminAnalyticsKeys.all, period] as const,
};

export const useAdminAnalytics = (period?: string) =>
  useQuery({ queryKey: adminAnalyticsKeys.byPeriod(period), queryFn: () => getAdminAnalytics(period) });
