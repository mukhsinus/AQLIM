import { useQuery } from "@tanstack/react-query";
import { getProfile, getHistory, getReviews } from "../api/account-api";

export const accountKeys = {
  all: ["account"] as const,
  profile: () => [...accountKeys.all, "profile"] as const,
  history: () => [...accountKeys.all, "history"] as const,
  reviews: () => [...accountKeys.all, "reviews"] as const,
};

export const useProfile = () =>
  useQuery({ queryKey: accountKeys.profile(), queryFn: getProfile });

export const useHistory = () =>
  useQuery({ queryKey: accountKeys.history(), queryFn: getHistory });

export const useReviews = () =>
  useQuery({ queryKey: accountKeys.reviews(), queryFn: getReviews });
