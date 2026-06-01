import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/analytics")({ component: A });

function A() {
  const langs = [{ l: "Узбекский", v: 42 }, { l: "Русский", v: 38 }, { l: "English", v: 20 }];
  const categories = [{ l: "Fiction", v: 28 }, { l: "Self-help", v: 22 }, { l: "Classics", v: 18 }, { l: "Business", v: 14 }, { l: "Science", v: 10 }, { l: "Other", v: 8 }];
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-medium">Аналитика</h1>
        <p className="text-sm text-muted-foreground">Глубокий взгляд на платформу</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl border border-border bg-background">
          <h3 className="font-medium mb-4">Чтение по языкам</h3>
          {langs.map(x => (
            <div key={x.l} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span>{x.l}</span><span className="text-muted-foreground">{x.v}%</span></div>
              <div className="h-2 rounded-full bg-accent overflow-hidden"><div className="h-full bg-gold" style={{ width: `${x.v}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-2xl border border-border bg-background">
          <h3 className="font-medium mb-4">Категории</h3>
          {categories.map(x => (
            <div key={x.l} className="mb-3">
              <div className="flex justify-between text-sm mb-1"><span>{x.l}</span><span className="text-muted-foreground">{x.v}%</span></div>
              <div className="h-2 rounded-full bg-accent overflow-hidden"><div className="h-full bg-foreground" style={{ width: `${x.v*2}%` }} /></div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-border bg-background">
        <h3 className="font-medium mb-4">Активные читатели (последние 12 месяцев)</h3>
        <div className="flex items-end gap-2 h-48">
          {[34, 42, 48, 55, 62, 68, 71, 78, 82, 86, 91, 95].map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gradient-to-t from-foreground to-foreground/40 rounded-t-md" style={{ height: `${v}%` }} />
              <div className="text-[10px] text-muted-foreground">{["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
