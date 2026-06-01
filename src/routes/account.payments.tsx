import { createFileRoute } from "@tanstack/react-router";
import { paymentHistory } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/account/payments")({
  component: Payments,
});

function Payments() {
  return (
    <div>
      <h2 className="font-display text-2xl font-medium">История платежей</h2>
      <p className="text-sm text-muted-foreground mb-6">Все ваши платежи в одном месте</p>
      <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
        {paymentHistory.map(p => (
          <div key={p.id} className="p-4 flex items-center gap-4">
            <div className="size-10 rounded-full bg-gold/15 flex items-center justify-center"><CheckCircle2 className="size-5 text-gold" /></div>
            <div className="flex-1">
              <div className="font-medium">{p.plan} · {p.method}</div>
              <div className="text-xs text-muted-foreground">{p.date}</div>
            </div>
            <div className="text-right">
              <div className="font-display font-semibold">{p.amount}</div>
              <div className="text-xs text-muted-foreground">сум</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
