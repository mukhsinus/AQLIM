import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { books } from "@/lib/mock-data";

const myReviews = [
  { bookId: "b1", rating: 5, text: "Шедевр узбекской литературы. Перечитываю уже третий раз.", date: "2 месяца назад" },
  { bookId: "b4", rating: 5, text: "Перевернула моё понимание истории человечества. Must-read.", date: "5 месяцев назад" },
];

export function ReviewsList() {
  return (
    <div>
      <h2 className="font-display text-xl sm:text-2xl font-medium">Мои отзывы</h2>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Книги, которые вы оценили</p>
      <div className="space-y-3">
        {myReviews.map((r, i) => {
          const b = books.find(x => x.id === r.bookId)!;
          return (
            <div key={i} className="p-4 sm:p-5 rounded-2xl border border-border bg-card">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                <Link to="/book/$id" params={{ id: b.id }} className="font-display text-sm sm:text-base font-medium hover:text-gold">{b.title}</Link>
                <div className="flex shrink-0">{Array.from({length:5}).map((_,j)=>(<Star key={j} className={`size-3.5 ${j<r.rating?"fill-gold text-gold":"text-muted"}`} />))}</div>
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
