import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, BookOpen, Users, FolderOpen, Layers, UserCog, Crown, CreditCard, BarChart3, Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — AQLIM" }] }),
  component: AdminLayout,
});

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/books", label: "Books", icon: BookOpen },
  { to: "/admin/authors", label: "Authors", icon: Users },
  { to: "/admin/categories", label: "Categories", icon: FolderOpen },
  { to: "/admin/collections", label: "Collections", icon: Layers },
  { to: "/admin/users", label: "Users", icon: UserCog },
  { to: "/admin/subscriptions", label: "Subscriptions", icon: Crown },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
];

function AdminLayout() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <div className="min-h-dvh bg-paper">
      <div className="flex">
        <aside className="hidden lg:flex w-60 flex-col border-r border-border bg-background h-dvh sticky top-0 p-4">
          <Link to="/" className="flex items-center gap-2 px-2 py-2">
            <div className="size-8 rounded-lg bg-foreground text-background flex items-center justify-center">
              <BookOpen className="size-4" />
            </div>
            <span className="font-display text-lg font-semibold">AQLIM <span className="text-xs text-muted-foreground">admin</span></span>
          </Link>
          <nav className="mt-6 space-y-0.5">
            {nav.map(n => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return (
                <Link key={n.to} to={n.to} className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm", active ? "bg-foreground text-background" : "text-muted-foreground hover:bg-accent hover:text-foreground")}>
                  <n.icon className="size-4" /> {n.label}
                </Link>
              );
            })}
          </nav>
          <Link to="/" className="mt-auto text-xs text-muted-foreground px-3 py-2 hover:text-foreground">← На сайт</Link>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-border h-14 flex items-center px-4 lg:px-6 gap-3">
            <div className="lg:hidden font-display font-semibold">AQLIM admin</div>
            <div className="relative flex-1 max-w-md ml-auto lg:ml-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input placeholder="Поиск..." className="w-full h-9 pl-9 pr-3 rounded-full bg-accent text-sm outline-none" />
            </div>
            <button className="size-9 rounded-full bg-accent flex items-center justify-center relative">
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-gold" />
            </button>
            <img src="https://i.pravatar.cc/100?img=33" className="size-9 rounded-full" />
          </header>
          {/* mobile nav */}
          <div className="lg:hidden border-b border-border bg-background overflow-x-auto no-scrollbar">
            <div className="flex gap-1 p-2">
              {nav.map(n => {
                const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
                return (
                  <Link key={n.to} to={n.to} className={cn("shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs", active ? "bg-foreground text-background" : "text-muted-foreground")}>
                    <n.icon className="size-3.5" /> {n.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="p-4 lg:p-8"><Outlet /></div>
        </div>
      </div>
    </div>
  );
}
