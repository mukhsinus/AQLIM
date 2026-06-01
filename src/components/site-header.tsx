import { Link, useRouterState } from "@tanstack/react-router";
import { Search, Moon, Sun, BookOpen, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/catalog", label: "Каталог" },
  { to: "/pricing", label: "Подписка" },
  { to: "/account", label: "Профиль" },
];

export function SiteHeader() {
  const [dark, setDark] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  const isReader = pathname.startsWith("/reader");
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  if (isReader || isAdmin) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="size-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            <BookOpen className="size-4" />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">AQLIM</span>
        </Link>

        <nav className="ml-6 hidden md:flex items-center gap-1">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <Link to="/catalog" className="hidden sm:flex">
            <Button variant="ghost" size="icon" aria-label="Поиск">
              <Search className="size-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" aria-label="Тема" onClick={toggleTheme}>
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Link to="/signin" className="hidden sm:block">
            <Button variant="outline" size="sm">Войти</Button>
          </Link>
          <Link to="/account" className="sm:hidden">
            <Button variant="ghost" size="icon" aria-label="Профиль">
              <User className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
