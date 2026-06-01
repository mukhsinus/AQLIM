import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Book } from "@/lib/mock-data";
import { BookCover } from "./book-cover";

const langLabel: Record<string, string> = { uz: "UZ", ru: "RU", en: "EN" };

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/book/$id"
      params={{ id: book.id }}
      className="group block"
    >
      <div className="relative">
        <BookCover book={book} size="md" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-book" />
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold tracking-wide">
          {langLabel[book.language]}
        </div>
        {book.isNew && (
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-gold text-gold-foreground text-[10px] font-semibold tracking-wide">
            NEW
          </div>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-display font-medium text-sm leading-tight line-clamp-2 group-hover:text-gold transition-colors">
          {book.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{book.author}</p>
        <div className="flex items-center gap-1 text-xs">
          <Star className="size-3 fill-gold text-gold" />
          <span className="font-medium">{book.rating}</span>
          <span className="text-muted-foreground">· {book.reviewsCount.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}
