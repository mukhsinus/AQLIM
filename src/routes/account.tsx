import { Outlet, Link, useRouterState, createFileRoute } from "@tanstack/react-router";
import { User, BookMarked, Crown, CreditCard, MessageSquare, LogOut, Settings as Cog } from "lucide-react";
import { mockUser } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Профиль — AQLIM" }] }),
  component: AccountLayout,
});

const tabs = [
  { to: "/account", label: "Профиль", icon: User, exact: true },
  { to: "/account/history", label: "История чтения", icon: BookMarked },
  { to: "/account/subscription", label: "Подписка", icon: Crown },
  { to: "/account/payments", label: "Платежи", icon: CreditCard },
  { to: "/account/reviews", label: "Отзывы", icon: MessageSquare },
];

function AccountLayout() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex items-center gap-4 pb-8 border-b border-border">
          <img src={mockUser.avatar} className="size-16 rounded-full object-cover ring-2 ring-gold" />
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-2xl md:text-3xl font-medium truncate">{mockUser.name}</h1>
            <p className="text-sm text-muted-foreground truncate">{mockUser.email}</p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-medium">
            <Crown className="size-3 text-gold" /> Annual
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-[220px_1fr] gap-8">
          <nav className="md:sticky md:top-24 md:self-start">
            <div className="flex md:flex-col gap-1 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {tabs.map(t => {
                const active = t.exact ? pathname === t.to : pathname === t.to;
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    className={cn(
                      "shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap",
                      active ? "bg-foreground text-background" : "hover:bg-accent",
                    )}
                  >
                    <t.icon className="size-4" /> {t.label}
                  </Link>
                );
              })}
              <button className="md:mt-auto shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive">
                <LogOut className="size-4" /> Выйти
              </button>
            </div>
          </nav>
          <div className="min-w-0"><Outlet /></div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
