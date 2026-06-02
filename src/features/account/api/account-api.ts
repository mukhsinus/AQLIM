import { apiClient } from "@/shared/api/client";
import type { Profile, Review, Subscription, OrderHistory } from "../types";

// TODO: connect to NestJS endpoint GET /account/profile
export const getProfile = async (): Promise<Profile> => {
  const { data } = await apiClient.get<Profile>("/account/profile");
  return data;
};

// TODO: connect to NestJS endpoint GET /account/history
export const getHistory = async (): Promise<OrderHistory[]> => {
  const { data } = await apiClient.get<OrderHistory[]>("/account/history");
  return data;
};

// TODO: connect to NestJS endpoint GET /account/reviews
export const getReviews = async (): Promise<Review[]> => {
  const { data } = await apiClient.get<Review[]>("/account/reviews");
  return data;
};

// TODO: connect to NestJS endpoint GET /account/subscription
export const getSubscription = async (): Promise<Subscription> => {
  const { data } = await apiClient.get<Subscription>("/account/subscription");
  return data;
};
