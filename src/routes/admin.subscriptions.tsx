import { createFileRoute } from "@tanstack/react-router";
import { plans } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/subscriptions")({ component: S });

function S() {
  return (
    <div>
      <h1 className="font-display text-3xl font-medium mb-6">Подписки</h1>
      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {plans.map(p => (
          <div key={p.id} className="p-5 rounded-2xl border border-border bg-background">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{p.nameRu}</div>
            <div className="font-display text-3xl font-semibold mt-2">{Math.floor(Math.random()*5000+1000)}</div>
            <div className="text-xs text-muted-foreground">активных подписок</div>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-2xl border border-border bg-background">
        <h3 className="font-medium mb-4">Распределение по тарифам</h3>
        <div className="space-y-3">
          {plans.map(p => (
            <div key={p.id}>
              <div className="flex justify-between text-sm mb-1"><span>{p.nameRu}</span><span className="text-muted-foreground">{Math.floor(Math.random()*40+20)}%</span></div>
              <div className="h-2 rounded-full bg-accent overflow-hidden">
                <div className="h-full bg-gold" style={{ width: `${Math.random()*60+20}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
