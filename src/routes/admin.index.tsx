import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, BookOpen, Users, CreditCard, Crown } from "lucide-react";
import { books, stats } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

const cards = [
  { label: "Книг", value: stats.books.toLocaleString(), change: "+12%", icon: BookOpen },
  { label: "Активных читателей", value: "24 318", change: "+8%", icon: Users },
  { label: "Доход (мес)", value: "₿ 184M", change: "+22%", icon: CreditCard },
  { label: "Подписок", value: "12 480", change: "+5%", icon: Crown },
];

const activity = [
  { user: "Aziza K.", action: "оформила подписку Annual", time: "5 мин назад" },
  { user: "Bobur M.", action: "начал читать “Sapiens”", time: "12 мин назад" },
  { user: "Daniel R.", action: "оставил отзыв на “Norwegian Wood”", time: "1 час назад" },
  { user: "Malika A.", action: "продлила подписку Semi-Annual", time: "2 часа назад" },
  { user: "Akmal K.", action: "загрузил новую книгу", time: "3 часа назад" },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-medium">Обзор</h1>
        <p className="text-sm text-muted-foreground">Что происходит на платформе сегодня</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map(c => (
          <div key={c.label} className="p-5 rounded-2xl border border-border bg-background">
            <div className="flex justify-between items-start">
              <c.icon className="size-5 text-muted-foreground" />
              <span className="text-xs text-gold font-medium flex items-center gap-0.5"><TrendingUp className="size-3" />{c.change}</span>
            </div>
            <div className="font-display text-2xl font-semibold mt-3">{c.value}</div>
            <div className="text-xs text-muted-foreground">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-border bg-background">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Просмотры за неделю</h3>
            <select className="text-xs bg-accent rounded-full px-2 py-1"><option>7 дней</option><option>30 дней</option></select>
          </div>
          <div className="flex items-end gap-2 h-48">
            {[42, 65, 58, 78, 92, 70, 95].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-gold/80 to-gold/30 rounded-t-md" style={{ height: `${v}%` }} />
                <div className="text-xs text-muted-foreground">{["Пн","Вт","Ср","Чт","Пт","Сб","Вс"][i]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-background">
          <h3 className="font-medium mb-4">Топ книги</h3>
          <div className="space-y-3">
            {books.slice(0,5).map((b,i) => (
              <div key={b.id} className="flex items-center gap-3 text-sm">
                <span className="size-6 rounded-full bg-accent flex items-center justify-center text-xs font-medium">{i+1}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{b.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{b.author}</div>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">{(b.reviewsCount/1000).toFixed(1)}k</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-border bg-background">
        <h3 className="font-medium mb-4">Недавняя активность</h3>
        <div className="space-y-3">
          {activity.map((a, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="size-8 rounded-full bg-accent flex items-center justify-center text-xs font-medium">{a.user[0]}</div>
              <div className="flex-1"><b>{a.user}</b> <span className="text-muted-foreground">{a.action}</span></div>
              <span className="text-xs text-muted-foreground">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
