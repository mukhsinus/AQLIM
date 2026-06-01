import { createFileRoute, Link } from "@tanstack/react-router";
import { readingHistory, getBook } from "@/lib/mock-data";
import { BookCover } from "@/components/book-cover";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Route = createFileRoute("/account/history")({
  component: History,
});

function History() {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium">История чтения</h2>
      <p className="text-sm text-muted-foreground mb-6">Продолжайте с того места, где остановились</p>
      <div className="space-y-3">
        {readingHistory.map(h => {
          const b = getBook(h.bookId)!;
          return (
            <div key={h.bookId} className="p-4 rounded-2xl border border-border bg-card flex gap-4 items-center">
              <div className="w-16 shrink-0"><BookCover book={b} size="sm" /></div>
              <div className="flex-1 min-w-0">
                <Link to="/book/$id" params={{ id: b.id }} className="font-display font-medium hover:text-gold line-clamp-1">{b.title}</Link>
                <p className="text-xs text-muted-foreground line-clamp-1">{b.author}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gold" style={{ width: `${h.progress*100}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">{Math.round(h.progress*100)}%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{h.lastRead}</p>
              </div>
              <Link to="/reader/$id" params={{ id: b.id }}>
                <Button size="sm" className="rounded-full"><Play className="size-3.5" /> Читать</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
