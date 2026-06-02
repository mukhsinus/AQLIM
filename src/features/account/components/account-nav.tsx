import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { User, BookMarked, Crown, CreditCard, MessageSquare, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/account" as const, label: "Профиль", icon: User, exact: true },
  { to: "/account/history" as const, label: "История чтения", icon: BookMarked },
  { to: "/account/subscription" as const, label: "Подписка", icon: Crown },
  { to: "/account/payments" as const, label: "Платежи", icon: CreditCard },
  { to: "/account/reviews" as const, label: "Отзывы", icon: MessageSquare },
];

const scrollFadeRight =
  "bg-[linear-gradient(to_left,var(--background)_0%,var(--background)_22%,color-mix(in_oklab,var(--background)_98%,transparent)_42%,color-mix(in_oklab,var(--background)_75%,transparent)_62%,transparent_100%)]";
const scrollFadeLeft =
  "bg-[linear-gradient(to_right,var(--background)_0%,var(--background)_22%,color-mix(in_oklab,var(--background)_98%,transparent)_42%,color-mix(in_oklab,var(--background)_75%,transparent)_62%,transparent_100%)]";

export function AccountMobileTabs({ pathname }: { pathname: string }) {
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

export function AccountDesktopNav({ pathname }: { pathname: string }) {
  return (
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
  );
}
