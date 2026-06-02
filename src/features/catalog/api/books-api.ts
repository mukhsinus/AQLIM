import { apiClient, type PaginatedResponse } from "@/shared/api/client";
import type { Book, BookFilters } from "../types";

// TODO: connect to NestJS endpoint GET /books
export const getBooks = async (filters?: BookFilters): Promise<PaginatedResponse<Book>> => {
  const { data } = await apiClient.get<PaginatedResponse<Book>>("/books", { params: filters });
  return data;
};

// TODO: connect to NestJS endpoint GET /books/:id
export const getBook = async (id: string): Promise<Book> => {
  const { data } = await apiClient.get<Book>(`/books/${id}`);
  return data;
};
