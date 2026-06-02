import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Library, BookMarked, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", label: "Главная", icon: Home, exact: true },
  { to: "/catalog", label: "Каталог", icon: Library },
  { to: "/account/history", label: "Чтение", icon: BookMarked },
  { to: "/account", label: "Профиль", icon: User },
];

export function MobileNav() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  if (pathname.startsWith("/reader") || pathname.startsWith("/admin")) return null;

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4">
        {items.map(({ to, label, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              <Icon className={cn("size-5", active && "text-gold")} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
