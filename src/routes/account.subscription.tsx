import { createFileRoute, Link } from "@tanstack/react-router";
import { Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser, plans } from "@/lib/mock-data";

export const Route = createFileRoute("/account/subscription")({
  component: Subscription,
});

function Subscription() {
  const plan = plans.find(p => p.id === mockUser.plan)!;
  return (
    <div>
      <h2 className="font-display text-2xl font-medium">Подписка</h2>
      <p className="text-sm text-muted-foreground mb-6">Управление вашей подпиской</p>

      <div className="p-6 rounded-2xl bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gold/30 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 text-sm opacity-80"><Crown className="size-4 text-gold" /> Активный тариф</div>
          <div className="font-display text-3xl font-medium mt-2">{plan.nameRu}</div>
          <div className="text-sm opacity-80 mt-1">Действует до {mockUser.planExpires}</div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            {plan.features.map(f => (
              <div key={f} className="flex gap-2 items-start"><Check className="size-4 text-gold shrink-0 mt-0.5" /> <span className="opacity-90">{f}</span></div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link to="/pricing"><Button variant="secondary" className="rounded-full">Изменить тариф</Button></Link>
            <Button variant="ghost" className="rounded-full text-background hover:bg-white/10">Отменить подписку</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
