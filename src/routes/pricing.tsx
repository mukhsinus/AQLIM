import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Подписка — AQLIM" }] }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-medium mb-6">
          <Crown className="size-3 text-gold" /> Премиум подписка
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight">Один тариф —<br/><em className="text-gold not-italic">вся библиотека</em></h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">Читайте без ограничений. Отменить можно в любой момент.</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 grid md:grid-cols-3 gap-4">
        {plans.map(p => (
          <div
            key={p.id}
            className={cn(
              "relative rounded-3xl p-8 border-2 flex flex-col",
              p.recommended ? "border-gold bg-foreground text-background scale-100 md:scale-105 shadow-book" : "border-border bg-card",
            )}
          >
            {p.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-gold-foreground text-xs font-semibold">
                Рекомендуем
              </div>
            )}
            <div>
              <h3 className="font-display text-2xl font-medium">{p.nameRu}</h3>
              <p className={cn("text-sm mt-1", p.recommended ? "opacity-70" : "text-muted-foreground")}>{p.duration}</p>
            </div>
            <div className="my-6">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold">{p.perMonth}</span>
                <span className={cn("text-sm", p.recommended ? "opacity-70" : "text-muted-foreground")}>сум/мес</span>
              </div>
              <p className={cn("text-sm mt-2", p.recommended ? "opacity-70" : "text-muted-foreground")}>
                {p.price} сум всего {p.save && <span className="text-gold font-medium">· {p.save}</span>}
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map(f => (
                <li key={f} className="flex gap-2 text-sm">
                  <Check className={cn("size-4 shrink-0 mt-0.5", p.recommended ? "text-gold" : "text-gold")} /> {f}
                </li>
              ))}
            </ul>
            <Link to="/payment" search={{ plan: p.id }}>
              <Button className="w-full h-12 rounded-full" variant={p.recommended ? "secondary" : "default"}>
                Подписаться
              </Button>
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
        <h2 className="font-display text-3xl font-medium mb-6 text-center">Часто задаваемые вопросы</h2>
        <div className="space-y-3">
          {[
            { q: "Можно ли отменить подписку?", a: "Да, в любое время в личном кабинете. Доступ сохранится до конца оплаченного периода." },
            { q: "Какие способы оплаты доступны?", a: "Payme, Click, банковские карты Uzcard и Humo." },
            { q: "Можно ли читать офлайн?", a: "Да, загружайте книги в приложение и читайте без интернета." },
            { q: "На скольких устройствах можно читать?", a: "От 2 до 5 в зависимости от тарифа." },
          ].map(f => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-2xl text-muted-foreground group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
