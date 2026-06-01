import { createFileRoute } from "@tanstack/react-router";
import { paymentHistory } from "@/lib/mock-data";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/account/payments")({
  component: Payments,
});

function Payments() {
  return (
    <div>
      <h2 className="font-display text-xl sm:text-2xl font-medium">История платежей</h2>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Все ваши платежи в одном месте</p>
      <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
        {paymentHistory.map(p => (
          <div key={p.id} className="p-3 sm:p-4 flex items-center gap-3">
            <div className="size-9 sm:size-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
              <CheckCircle2 className="size-4 sm:size-5 text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm sm:text-base truncate">{p.plan} · {p.method}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground">{p.date}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="font-display font-semibold text-sm sm:text-base tabular-nums">{p.amount}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground">сум</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
