import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { useState, useMemo } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/features/catalog/components/book-card";
import { books, categories } from "@/lib/mock-data";
import { SiteFooter } from "@/shared/components/site-footer";
import { cn } from "@/lib/utils";

const search = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
  lang: z.enum(["all", "uz", "ru", "en"]).optional(),
  sort: z.enum(["rating", "new", "popular"]).optional(),
});

export const Route = createFileRoute("/catalog")({
  validateSearch: search,
  head: () => ({ meta: [{ title: "Каталог книг — AQLIM" }] }),
  component: Catalog,
});

const langs = [
  { id: "all", label: "Все языки" },
  { id: "ru", label: "Русский" },
  { id: "uz", label: "O‘zbek" },
  { id: "en", label: "English" },
] as const;

function Catalog() {
  const s = Route.useSearch();
  const nav = Route.useNavigate();
  const [q, setQ] = useState(s.q ?? "");
  const cat = s.category;
  const lang = s.lang ?? "all";
  const sort = s.sort ?? "popular";
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(() => {
    let r = [...books];
    if (q) r = r.filter(b => b.title.toLowerCase().includes(q.toLowerCase()) || b.author.toLowerCase().includes(q.toLowerCase()));
    if (cat) r = r.filter(b => b.category === cat);
    if (lang !== "all") r = r.filter(b => b.language === lang);
    if (minRating > 0) r = r.filter(b => b.rating >= minRating);
    if (sort === "rating") r.sort((a,b)=>b.rating-a.rating);
    if (sort === "new") r.sort((a,b)=>b.year-a.year);
    if (sort === "popular") r.sort((a,b)=>b.reviewsCount-a.reviewsCount);
    return r;
  }, [q, cat, lang, sort, minRating]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 pb-6">
        <h1 className="font-display text-4xl md:text-5xl font-medium">Каталог</h1>
        <p className="text-muted-foreground mt-2">12 480 книг ждут вас</p>

        {/* Search */}
        <div className="mt-6 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по названию или автору..."
            value={q}
            onChange={e => setQ(e.target.value)}
            className="pl-11 h-12 rounded-full bg-card"
          />
        </div>

        {/* Category chips */}
        <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          <button
            onClick={() => nav({ search: { ...s, category: undefined } })}
            className={cn("shrink-0 px-4 py-2 rounded-full text-sm border transition", !cat ? "bg-foreground text-background border-foreground" : "border-border bg-card")}
          >
            Все
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => nav({ search: { ...s, category: c.id } })}
              className={cn("shrink-0 px-4 py-2 rounded-full text-sm border transition", cat === c.id ? "bg-foreground text-background border-foreground" : "border-border bg-card")}
            >
              {c.icon} {c.nameRu}
            </button>
          ))}
        </div>

        {/* Filters bar */}
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <SlidersHorizontal className="size-4 text-muted-foreground" />
          <select
            value={lang}
            onChange={e => nav({ search: { ...s, lang: e.target.value as any } })}
            className="text-sm bg-card border border-border rounded-full px-3 py-1.5"
          >
            {langs.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
          </select>
          <select
            value={sort}
            onChange={e => nav({ search: { ...s, sort: e.target.value as any } })}
            className="text-sm bg-card border border-border rounded-full px-3 py-1.5"
          >
            <option value="popular">По популярности</option>
            <option value="rating">По рейтингу</option>
            <option value="new">Новые</option>
          </select>
          <div className="flex items-center gap-1 text-sm bg-card border border-border rounded-full px-3 py-1.5">
            <Star className="size-3.5 fill-gold text-gold" />
            <select value={minRating} onChange={e => setMinRating(+e.target.value)} className="bg-transparent outline-none">
              <option value={0}>Любой</option>
              <option value={4}>4+</option>
              <option value={4.5}>4.5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-muted-foreground">Ничего не найдено</p>
            <Button variant="outline" className="mt-4" onClick={() => { setQ(""); nav({ search: {} }); }}>Сбросить фильтры</Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
            {filtered.map(b => <BookCard key={b.id} book={b} />)}
          </div>
        )}
      </div>
      <SiteFooter />
    </>
  );
}
