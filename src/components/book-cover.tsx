import type { Book } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface Props {
  book: Pick<Book, "title" | "author" | "coverGradient">;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "text-[10px] p-2",
  md: "text-xs p-3",
  lg: "text-sm p-4",
  xl: "text-base p-6",
};

export function BookCover({ book, className, size = "md" }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] rounded-md overflow-hidden flex flex-col justify-between text-white shadow-book",
        sizeMap[size],
        className,
      )}
      style={{ background: book.coverGradient }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
      <div className="absolute top-0 bottom-0 left-0 w-[6%] bg-black/20" />
      <div className="relative font-display font-semibold leading-tight drop-shadow line-clamp-4">
        {book.title}
      </div>
      <div className="relative text-[0.7em] opacity-80 font-medium tracking-wide uppercase line-clamp-1">
        {book.author}
      </div>
    </div>
  );
}
