import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper mt-20 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="size-8 rounded-lg bg-foreground text-background flex items-center justify-center">
              <BookOpen className="size-4" />
            </div>
            <span className="font-display text-xl font-semibold">AQLIM</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Премиум цифровая библиотека Узбекистана. Читайте лучшие книги на узбекском, русском и английском.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Платформа</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/pricing">Подписка</Link></li>
            <li><Link to="/signin">Войти</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Компания</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#">О нас</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3 text-sm">Языки</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Русский</li>
            <li>O‘zbek</li>
            <li>English</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 AQLIM. Все права защищены.
      </div>
    </footer>
  );
}
