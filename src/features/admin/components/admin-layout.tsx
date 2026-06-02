import { Outlet, useRouterState } from "@tanstack/react-router";
import { Search, Bell } from "lucide-react";
import { AdminSidebar, AdminMobileNav } from "./admin-nav";

export function AdminLayoutView() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  return (
    <div className="min-h-dvh bg-paper">
      <div className="flex">
        <AdminSidebar pathname={pathname} />
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
          <AdminMobileNav pathname={pathname} />
          <div className="p-4 lg:p-8"><Outlet /></div>
        </div>
      </div>
    </div>
  );
}
