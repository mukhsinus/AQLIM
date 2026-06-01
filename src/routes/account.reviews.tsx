import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { books } from "@/lib/mock-data";

export const Route = createFileRoute("/account/reviews")({
  component: Reviews,
});

const myReviews = [
  { bookId: "b1", rating: 5, text: "Шедевр узбекской литературы. Перечитываю уже третий раз.", date: "2 месяца назад" },
  { bookId: "b4", rating: 5, text: "Перевернула моё понимание истории человечества. Must-read.", date: "5 месяцев назад" },
];

function Reviews() {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium">Мои отзывы</h2>
      <p className="text-sm text-muted-foreground mb-6">Книги, которые вы оценили</p>
      <div className="space-y-3">
        {myReviews.map((r, i) => {
          const b = books.find(x => x.id === r.bookId)!;
          return (
            <div key={i} className="p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between mb-2">
                <Link to="/book/$id" params={{ id: b.id }} className="font-display font-medium hover:text-gold">{b.title}</Link>
                <div className="flex">{Array.from({length:5}).map((_,j)=>(<Star key={j} className={`size-3.5 ${j<r.rating?"fill-gold text-gold":"text-muted"}`} />))}</div>
              </div>
              <p className="text-sm">{r.text}</p>
              <div className="text-xs text-muted-foreground mt-2">{r.date}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
