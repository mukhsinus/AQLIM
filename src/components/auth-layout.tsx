import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import type { ReactNode } from "react";
import { books } from "@/lib/mock-data";
import { BookCover } from "./book-cover";

export function AuthLayout({ title, subtitle, children, footer }: { title: string; subtitle?: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="min-h-dvh grid md:grid-cols-2">
      <div className="flex flex-col p-6 md:p-12">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <div className="size-8 rounded-lg bg-foreground text-background flex items-center justify-center">
            <BookOpen className="size-4" />
          </div>
          <span className="font-display text-xl font-semibold">AQLIM</span>
        </Link>
        <div className="flex-1 flex flex-col justify-center max-w-sm w-full mx-auto">
          <h1 className="font-display text-4xl font-medium">{title}</h1>
          {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
          <div className="mt-8">{children}</div>
          {footer && <div className="mt-6 text-sm text-center text-muted-foreground">{footer}</div>}
        </div>
      </div>
      <div className="hidden md:flex relative overflow-hidden bg-paper items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-paper via-background to-accent" />
        <div className="absolute -top-20 -right-20 size-80 rounded-full bg-gold/30 blur-3xl" />
        <div className="relative grid grid-cols-3 gap-4 max-w-md">
          {books.slice(0,6).map((b, i) => (
            <div key={b.id} style={{ transform: `translateY(${i % 2 === 0 ? '-20px' : '20px'}) rotate(${(i-2)*3}deg)` }}>
              <BookCover book={b} size="md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
