import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { MobileNav } from "@/components/mobile-nav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-7xl font-semibold">404</h1>
        <p className="mt-2 text-muted-foreground">Страница не найдена</p>
        <a href="/" className="mt-6 inline-block underline">На главную</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-dvh items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-2xl font-semibold">Что-то пошло не так</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 underline">Попробовать снова</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#f9f5ec" },
      { title: "AQLIM — Премиум цифровая библиотека Узбекистана" },
      { name: "description", content: "Читайте лучшие книги на узбекском, русском и английском. Подписка от 39 000 сум в месяц." },
      { property: "og:title", content: "AQLIM — Премиум цифровая библиотека" },
      { property: "og:description", content: "Тысячи книг. Один тариф. Читайте где угодно." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <MobileNav />
    </QueryClientProvider>
  );
}
