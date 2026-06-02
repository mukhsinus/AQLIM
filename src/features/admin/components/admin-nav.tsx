import { Link } from "@tanstack/react-router";
import { LayoutDashboard, BookOpen, Users, FolderOpen, Layers, UserCog, Crown, CreditCard, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export const adminNavItems = [
  { to: "/admin" as const, label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/books" as const, label: "Books", icon: BookOpen },
  { to: "/admin/authors" as const, label: "Authors", icon: Users },
  { to: "/admin/categories" as const, label: "Categories", icon: FolderOpen },
  { to: "/admin/collections" as const, label: "Collections", icon: Layers },
  { to: "/admin/users" as const, label: "Users", icon: UserCog },
  { to: "/admin/subscriptions" as const, label: "Subscriptions", icon: Crown },
  { to: "/admin/payments" as const, label: "Payments", icon: CreditCard },
  { to: "/admin/analytics" as const, label: "Analytics", icon: BarChart3 },
];

export function AdminSidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="hidden lg:flex w-60 flex-col border-r border-border bg-background h-dvh sticky top-0 p-4">
      <Link to="/" className="flex items-center gap-2 px-2 py-2">
        <div className="size-8 rounded-lg bg-foreground text-background flex items-center justify-center">
          <BookOpen className="size-4" />
        </div>
        <span className="font-display text-lg font-semibold">AQLIM <span className="text-xs text-muted-foreground">admin</span></span>
      </Link>
      <nav className="mt-6 space-y-0.5">
        {adminNavItems.map(n => {
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
  );
}

export function AdminMobileNav({ pathname }: { pathname: string }) {
  return (
    <div className="lg:hidden border-b border-border bg-background overflow-x-auto no-scrollbar">
      <div className="flex gap-1 p-2">
        {adminNavItems.map(n => {
          const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
          return (
            <Link key={n.to} to={n.to} className={cn("shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs", active ? "bg-foreground text-background" : "text-muted-foreground")}>
              <n.icon className="size-3.5" /> {n.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
