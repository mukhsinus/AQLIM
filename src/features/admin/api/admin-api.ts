import { apiClient, type PaginatedResponse } from "@/shared/api/client";
import type { AdminBook, AdminUser, AdminAuthor, AdminAnalytics } from "../types";

// Books CRUD
export const getAdminBooks = async (): Promise<PaginatedResponse<AdminBook>> => {
  const { data } = await apiClient.get<PaginatedResponse<AdminBook>>("/admin/books");
  return data;
};

export const createAdminBook = async (book: Partial<AdminBook>): Promise<AdminBook> => {
  const { data } = await apiClient.post<AdminBook>("/admin/books", book);
  return data;
};

export const updateAdminBook = async (id: string, book: Partial<AdminBook>): Promise<AdminBook> => {
  const { data } = await apiClient.patch<AdminBook>(`/admin/books/${id}`, book);
  return data;
};

export const deleteAdminBook = async (id: string): Promise<void> => {
  await apiClient.delete(`/admin/books/${id}`);
};

// Users
export const getAdminUsers = async (): Promise<PaginatedResponse<AdminUser>> => {
  const { data } = await apiClient.get<PaginatedResponse<AdminUser>>("/admin/users");
  return data;
};

// Authors
export const getAdminAuthors = async (): Promise<AdminAuthor[]> => {
  const { data } = await apiClient.get<AdminAuthor[]>("/admin/authors");
  return data;
};

export const createAdminAuthor = async (author: Partial<AdminAuthor>): Promise<AdminAuthor> => {
  const { data } = await apiClient.post<AdminAuthor>("/admin/authors", author);
  return data;
};

export const deleteAdminAuthor = async (id: string): Promise<void> => {
  await apiClient.delete(`/admin/authors/${id}`);
};

// Analytics
export const getAdminAnalytics = async (period?: string): Promise<AdminAnalytics[]> => {
  const { data } = await apiClient.get<AdminAnalytics[]>("/admin/analytics", { params: { period } });
  return data;
};
