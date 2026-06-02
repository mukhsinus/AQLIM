import axios from "axios";
import { useAuthStore } from "@/features/auth/store/auth-store";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  },
);

export type ApiResponse<T> = { data: T; message?: string };
export type PaginatedResponse<T> = {
  data: T[];
  meta: { page: number; limit: number; total: number };
};
export type ApiError = {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
};
