import { useQuery } from "@tanstack/react-query";
import { getBookContent } from "../api/reader-api";

export const readerKeys = {
  all: ["reader"] as const,
  content: (bookId: string) => [...readerKeys.all, "content", bookId] as const,
};

export const useBookContent = (bookId: string) =>
  useQuery({
    queryKey: readerKeys.content(bookId),
    queryFn: () => getBookContent(bookId),
    enabled: !!bookId,
  });
