import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, Link, useRouterState, createFileRoute } from "@tanstack/react-router";
import { User, BookMarked, Crown, CreditCard, MessageSquare, LogOut } from "lucide-react";
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

const scrollFadeRight =
  "bg-[linear-gradient(to_left,var(--background)_0%,var(--background)_22%,color-mix(in_oklab,var(--background)_98%,transparent)_42%,color-mix(in_oklab,var(--background)_75%,transparent)_62%,transparent_100%)]";
const scrollFadeLeft =
  "bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_22%,color-mix(in_oklab,var(--background)_98%,transparent)_42%,color-mix(in_oklab,var(--background)_75%,transparent)_62%,transparent_100%)]";

function AccountMobileTabs({ pathname }: { pathname: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [fadeRight, setFadeRight] = useState(true);
  const [fadeLeft, setFadeLeft] = useState(false);

  const updateFades = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 2) {
      setFadeRight(false);
      setFadeLeft(false);
      return;
    }
    setFadeRight(el.scrollLeft < maxScroll - 2);
    setFadeLeft(el.scrollLeft > 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateFades();
    el.addEventListener("scroll", updateFades, { passive: true });
    const ro = new ResizeObserver(updateFades);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateFades);
      ro.disconnect();
    };
  }, [updateFades]);

  return (
    <div className="relative -mx-4 sm:-mx-6">
      <div
        ref={scrollRef}
        className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth pb-3 px-4 sm:px-6"
      >
        {tabs.map(t => {
          const active = t.exact ? pathname === t.to : pathname === t.to;
          return (
            <Link
              key={t.to}
              to={t.to}
              className={cn(
                "shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors",
                active
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground bg-accent/50 active:bg-accent",
              )}
            >
              <t.icon className="size-3.5" /> {t.label}
            </Link>
          );
        })}
      </div>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-0 bottom-3 z-10 w-14 sm:w-16 transition-opacity duration-300",
          scrollFadeLeft,
          fadeLeft ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-0 top-0 bottom-3 z-10 w-[4.75rem] sm:w-24 transition-opacity duration-300",
          scrollFadeRight,
          fadeRight ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

function AccountLayout() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-5 sm:pt-8">
          <div className="flex items-center gap-3 sm:gap-4 pb-4 sm:pb-8">
            <img src={mockUser.avatar} className="size-11 sm:size-16 rounded-full object-cover ring-2 ring-gold shrink-0" />
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-lg sm:text-2xl md:text-3xl font-medium truncate">{mockUser.name}</h1>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">{mockUser.email}</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-medium shrink-0">
              <Crown className="size-3 text-gold" /> Annual
            </div>
          </div>
        </div>

        <div className="border-b border-border md:hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <AccountMobileTabs pathname={pathname} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8">
          <div className="mt-5 sm:mt-8 grid md:grid-cols-[220px_1fr] gap-6 sm:gap-8">
            <nav className="hidden md:block md:sticky md:top-24 md:self-start">
              <div className="flex flex-col gap-1">
                {tabs.map(t => {
                  const active = t.exact ? pathname === t.to : pathname === t.to;
                  return (
                    <Link
                      key={t.to}
                      to={t.to}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap",
                        active ? "bg-foreground text-background" : "hover:bg-accent",
                      )}
                    >
                      <t.icon className="size-4" /> {t.label}
                    </Link>
                  );
                })}
                <button className="mt-auto flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-destructive">
                  <LogOut className="size-4" /> Выйти
                </button>
              </div>
            </nav>
            <div className="min-w-0 w-full"><Outlet /></div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
