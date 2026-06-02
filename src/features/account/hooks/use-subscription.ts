import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "../api/account-api";

export const subscriptionKeys = {
  all: ["subscription"] as const,
  current: () => [...subscriptionKeys.all, "current"] as const,
};

export const useSubscription = () =>
  useQuery({ queryKey: subscriptionKeys.current(), queryFn: getSubscription });
