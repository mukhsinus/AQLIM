import { apiClient } from "@/shared/api/client";
import type { AuthResponse, LoginDto, RegisterDto, User } from "../types";

// TODO: connect to NestJS endpoint POST /auth/login
export const login = async (dto: LoginDto): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>("/auth/login", dto);
  return data;
};

// TODO: connect to NestJS endpoint POST /auth/register
export const register = async (dto: RegisterDto): Promise<AuthResponse> => {
  const { data } = await apiClient.post<AuthResponse>("/auth/register", dto);
  return data;
};

// TODO: connect to NestJS endpoint POST /auth/logout
export const logout = async (): Promise<void> => {
  await apiClient.post("/auth/logout");
};

// TODO: connect to NestJS endpoint GET /auth/me
export const getMe = async (): Promise<User> => {
  const { data } = await apiClient.get<User>("/auth/me");
  return data;
};
