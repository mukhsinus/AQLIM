import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Users, Library, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/features/catalog/components/book-card";
import { BookCover } from "@/features/catalog/components/book-cover";
import { books, collections, authors, categories, stats } from "@/lib/mock-data";
import { SiteFooter } from "@/shared/components/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AQLIM — Цифровая библиотека Узбекистана" },
      { name: "description", content: "Тысячи книг на узбекском, русском и английском. Читайте без ограничений за 39 000 сум в месяц." },
    ],
  }),
  component: Home,
});

function Home() {
  const newBooks = books.filter(b => b.isNew);
  const featured = books.filter(b => b.isFeatured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-paper via-background to-paper" />
        <div className="absolute -top-40 -right-40 -z-10 size-[500px] rounded-full bg-gold/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 md:pt-24 pb-16 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border text-xs font-medium mb-6">
              <Sparkles className="size-3 text-gold" />
              Цифровая библиотека №1 в Узбекистане
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight">
              Целая библиотека <em className="text-gold not-italic">в кармане</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              12 480 книг на узбекском, русском и английском. Читайте где угодно, когда угодно — за 39 000 сум в месяц.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalog">
                <Button size="lg" className="rounded-full h-12 px-6">
                  Открыть каталог <ArrowRight className="ml-1 size-4" />
                </Button>
              </Link>
              <Link to="/reader/$id" params={{ id: "b1" }}>
                <Button size="lg" variant="outline" className="rounded-full h-12 px-6">
                  Начать читать
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[47, 11, 49, 15].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="size-7 rounded-full border-2 border-background" />
                ))}
              </div>
              <Star className="size-3.5 fill-gold text-gold ml-1" />
              <span><b className="text-foreground">4.9</b> · 12 400 читателей</span>
            </div>
          </div>

          {/* Floating books */}
          <div className="relative h-[420px] hidden md:block">
            <div className="absolute top-0 left-12 w-40 rotate-[-8deg] book-3d">
              <BookCover book={books[0]} size="lg" />
            </div>
            <div className="absolute top-12 left-1/2 w-48 z-10 book-3d">
              <BookCover book={books[3]} size="xl" />
            </div>
            <div className="absolute top-32 right-0 w-36 rotate-[10deg] book-3d">
              <BookCover book={books[2]} size="lg" />
            </div>
            <div className="absolute bottom-0 left-32 w-32 rotate-[-4deg] book-3d">
              <BookCover book={books[9]} size="md" />
            </div>
          </div>

          {/* Mobile book preview */}
          <div className="md:hidden relative h-64 -mx-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-3">
              <div className="w-32 rotate-[-6deg]"><BookCover book={books[0]} size="md" /></div>
              <div className="w-36 z-10"><BookCover book={books[3]} size="md" /></div>
              <div className="w-32 rotate-[6deg]"><BookCover book={books[2]} size="md" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-paper/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, label: "Книг", value: stats.books.toLocaleString() },
            { icon: Users, label: "Авторов", value: stats.authors.toLocaleString() },
            { icon: Library, label: "Категорий", value: stats.categories },
            { icon: Sparkles, label: "Читателей", value: stats.readers.toLocaleString() },
          ].map(s => (
            <div key={s.label} className="text-center md:text-left">
              <s.icon className="size-5 text-gold mb-2 mx-auto md:mx-0" />
              <div className="font-display text-3xl md:text-4xl font-semibold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-medium">Подборки</h2>
            <p className="text-muted-foreground mt-1 text-sm">Кураторские коллекции от редакции AQLIM</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {collections.map(col => (
            <div key={col.id} className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-white min-h-[180px] flex flex-col justify-between" style={{ background: col.gradient }}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest opacity-80">Коллекция</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium mt-2 max-w-xs">{col.title}</h3>
                <p className="text-sm opacity-90 mt-2 max-w-sm">{col.description}</p>
              </div>
              <div className="relative flex justify-between items-end">
                <span className="text-sm opacity-90">{col.bookIds.length} книг</span>
                <div className="flex -space-x-3">
                  {col.bookIds.slice(0,3).map(id => {
                    const b = books.find(x => x.id === id)!;
                    return <div key={id} className="w-12 ring-2 ring-white/30 rounded"><BookCover book={b} size="sm" /></div>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New books */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-display text-3xl md:text-4xl font-medium">Новинки</h2>
          <Link to="/catalog" className="text-sm text-muted-foreground hover:text-foreground">Смотреть все →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {newBooks.concat(featured).slice(0,8).map(b => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map(c => (
            <Link key={c.id} to="/catalog" search={{ category: c.id }} className="group p-5 rounded-xl border border-border bg-card hover:border-gold transition-colors">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="font-medium">{c.nameRu}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{c.description}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Authors */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">Избранные авторы</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {authors.map(a => (
            <div key={a.id} className="text-center group cursor-pointer">
              <img src={a.photo} alt={a.name} className="size-20 rounded-full mx-auto object-cover ring-2 ring-border group-hover:ring-gold transition" />
              <div className="font-medium text-sm mt-3">{a.name}</div>
              <div className="text-xs text-muted-foreground">{a.bookCount} книг</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16 text-center">
          <div className="absolute -top-20 -right-20 size-80 rounded-full bg-gold/30 blur-3xl" />
          <h2 className="relative font-display text-4xl md:text-5xl font-medium max-w-2xl mx-auto leading-tight">
            Начните читать сегодня
          </h2>
          <p className="relative mt-4 text-lg opacity-80 max-w-md mx-auto">Первая неделя бесплатно. Отменить можно в любое время.</p>
          <Link to="/pricing" className="relative inline-block mt-8">
            <Button size="lg" variant="secondary" className="rounded-full h-12 px-8">Выбрать подписку</Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
