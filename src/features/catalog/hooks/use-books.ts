import { useQuery } from "@tanstack/react-query";
import { getBooks, getBook } from "../api/books-api";
import type { BookFilters } from "../types";

export const booksKeys = {
  all: ["books"] as const,
  list: (filters?: BookFilters) => [...booksKeys.all, "list", filters] as const,
  detail: (id: string) => [...booksKeys.all, "detail", id] as const,
};

export const useBooks = (filters?: BookFilters) =>
  useQuery({ queryKey: booksKeys.list(filters), queryFn: () => getBooks(filters) });

export const useBook = (id: string) =>
  useQuery({ queryKey: booksKeys.detail(id), queryFn: () => getBook(id), enabled: !!id });
