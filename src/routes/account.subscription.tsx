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
      <h2 className="font-display text-xl sm:text-2xl font-medium">Подписка</h2>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Управление вашей подпиской</p>

      <div className="p-4 sm:p-6 rounded-2xl bg-foreground text-background relative overflow-hidden">
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-gold/30 blur-3xl" />
        <div className="relative">
          <div className="flex items-center gap-2 text-xs sm:text-sm opacity-80"><Crown className="size-4 text-gold" /> Активный тариф</div>
          <div className="font-display text-2xl sm:text-3xl font-medium mt-2">{plan.nameRu}</div>
          <div className="text-xs sm:text-sm opacity-80 mt-1">Действует до {mockUser.planExpires}</div>
          <div className="mt-4 space-y-2 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-0 text-sm">
            {plan.features.map(f => (
              <div key={f} className="flex gap-2 items-start"><Check className="size-4 text-gold shrink-0 mt-0.5" /> <span className="opacity-90">{f}</span></div>
            ))}
          </div>
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2">
            <Link to="/pricing" className="block"><Button variant="secondary" className="rounded-full w-full sm:w-auto">Изменить тариф</Button></Link>
            <Button variant="ghost" className="rounded-full w-full sm:w-auto text-background hover:bg-white/10">Отменить подписку</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
