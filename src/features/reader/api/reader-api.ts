import { apiClient } from "@/shared/api/client";
import type { BookContent } from "../types";

// TODO: connect to NestJS endpoint GET /books/:id/content
export const getBookContent = async (id: string): Promise<BookContent> => {
  const { data } = await apiClient.get<BookContent>(`/books/${id}/content`);
  return data;
};
