import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { useState } from "react";
import { ChevronLeft, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/payment")({
  validateSearch: z.object({
    plan: z.string().optional(),
    status: z.enum(["success", "failed"]).optional(),
  }),
  head: () => ({ meta: [{ title: "Оплата — AQLIM" }] }),
  component: Payment,
});

const methods = [
  { id: "payme", name: "Payme", desc: "Оплата через Payme", color: "#00c4b3" },
  { id: "click", name: "Click", desc: "Оплата через Click", color: "#0072ff" },
];

function Payment() {
  const { plan: planId, status } = Route.useSearch();
  const nav = useNavigate();
  const plan = plans.find(p => p.id === planId) ?? plans[2];
  const [method, setMethod] = useState<string | null>(null);
  const [step, setStep] = useState<"select" | "processing">("select");

  if (status === "success") return <PaymentSuccess plan={plan} />;
  if (status === "failed") return <PaymentFailed />;

  const handlePay = () => {
    setStep("processing");
    setTimeout(() => nav({ to: "/payment", search: { status: Math.random() > 0.15 ? "success" : "failed" } }), 1800);
  };

  return (
    <div className="min-h-dvh">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8">
        <Link to="/pricing" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="size-4" /> К тарифам
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-medium">Оплата подписки</h1>

        {/* Plan summary */}
        <div className="mt-6 p-5 rounded-2xl border border-border bg-card flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Тариф</div>
            <div className="font-display text-xl font-medium mt-1">{plan.nameRu}</div>
            <div className="text-sm text-muted-foreground">{plan.duration}</div>
          </div>
          <div className="text-right">
            <div className="font-display text-2xl font-semibold">{plan.price}</div>
            <div className="text-xs text-muted-foreground">сум</div>
          </div>
        </div>

        {step === "processing" ? (
          <div className="mt-8 p-12 rounded-2xl border border-border bg-card text-center">
            <Loader2 className="size-12 animate-spin mx-auto text-gold" />
            <p className="mt-4 font-medium">Обрабатываем платёж...</p>
            <p className="text-sm text-muted-foreground mt-1">Не закрывайте страницу</p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-xl font-medium mt-8 mb-3">Способ оплаты</h2>
            <div className="space-y-2">
              {methods.map(m => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={cn(
                    "w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition text-left",
                    method === m.id ? "border-foreground bg-accent" : "border-border bg-card hover:border-foreground/30",
                  )}
                >
                  <div className="size-12 rounded-xl flex items-center justify-center text-white font-bold" style={{ background: m.color }}>
                    {m.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{m.name}</div>
                    <div className="text-xs text-muted-foreground">{m.desc}</div>
                  </div>
                  <div className={cn("size-5 rounded-full border-2", method === m.id ? "border-foreground bg-foreground" : "border-border")}>
                    {method === m.id && <div className="size-2 bg-background rounded-full m-auto mt-1" />}
                  </div>
                </button>
              ))}
            </div>

            <Button onClick={handlePay} disabled={!method} className="w-full h-12 rounded-full mt-6">
              Оплатить {plan.price} сум
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-3">Безопасный платёж. Данные защищены SSL.</p>
          </>
        )}
      </div>
    </div>
  );
}

function PaymentSuccess({ plan }: { plan: typeof plans[number] }) {
  return (
    <div className="min-h-dvh flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="size-20 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-6">
          <CheckCircle2 className="size-10 text-gold" />
        </div>
        <h1 className="font-display text-4xl font-medium">Оплата прошла</h1>
        <p className="mt-3 text-muted-foreground">Подписка {plan.nameRu} активирована. Приятного чтения!</p>
        <div className="mt-6 p-4 rounded-xl bg-card border border-border text-sm space-y-1">
          <div className="flex justify-between"><span className="text-muted-foreground">Тариф</span><span className="font-medium">{plan.nameRu}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Сумма</span><span className="font-medium">{plan.price} сум</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Статус</span><span className="text-gold font-medium">Активна</span></div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <Link to="/catalog"><Button className="w-full h-12 rounded-full">Открыть каталог</Button></Link>
          <Link to="/account"><Button variant="outline" className="w-full h-12 rounded-full">В личный кабинет</Button></Link>
        </div>
      </div>
    </div>
  );
}

function PaymentFailed() {
  return (
    <div className="min-h-dvh flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="size-20 mx-auto rounded-full bg-destructive/15 flex items-center justify-center mb-6">
          <XCircle className="size-10 text-destructive" />
        </div>
        <h1 className="font-display text-4xl font-medium">Не удалось оплатить</h1>
        <p className="mt-3 text-muted-foreground">Произошла ошибка при обработке платежа. Попробуйте снова или выберите другой способ оплаты.</p>
        <div className="mt-8 flex flex-col gap-2">
          <Link to="/payment"><Button className="w-full h-12 rounded-full">Попробовать снова</Button></Link>
          <Link to="/pricing"><Button variant="outline" className="w-full h-12 rounded-full">К тарифам</Button></Link>
        </div>
      </div>
    </div>
  );
}
