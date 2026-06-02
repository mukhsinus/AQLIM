import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAdminBooks, createAdminBook, updateAdminBook, deleteAdminBook } from "../api/admin-api";
import type { AdminBook } from "../types";

export const adminBooksKeys = {
  all: ["admin", "books"] as const,
  list: () => [...adminBooksKeys.all, "list"] as const,
};

export const useAdminBooks = () =>
  useQuery({ queryKey: adminBooksKeys.list(), queryFn: getAdminBooks });

export const useCreateBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (book: Partial<AdminBook>) => createAdminBook(book),
    onSuccess: () => qc.invalidateQueries({ queryKey: adminBooksKeys.all }),
  });
};

export const useUpdateBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...book }: Partial<AdminBook> & { id: string }) => updateAdminBook(id, book),
    onSuccess: () => qc.invalidateQueries({ queryKey: adminBooksKeys.all }),
  });
};

export const useDeleteBook = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteAdminBook(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: adminBooksKeys.all }),
  });
};
