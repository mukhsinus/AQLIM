import { Search, SlidersHorizontal, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/mock-data";

const langs = [
  { id: "all", label: "Все языки" },
  { id: "ru", label: "Русский" },
  { id: "uz", label: "O'zbek" },
  { id: "en", label: "English" },
] as const;

interface BookFiltersProps {
  q: string;
  onQueryChange: (q: string) => void;
  categories: Category[];
  activeCategory?: string;
  onCategoryChange: (cat?: string) => void;
  lang: string;
  onLangChange: (lang: string) => void;
  sort: string;
  onSortChange: (sort: string) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

export function BookFilters({
  q, onQueryChange, categories, activeCategory, onCategoryChange,
  lang, onLangChange, sort, onSortChange, minRating, onMinRatingChange,
}: BookFiltersProps) {
  return (
    <>
      <div className="mt-6 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          placeholder="Поиск по названию или автору..."
          value={q}
          onChange={e => onQueryChange(e.target.value)}
          className="pl-11 h-12 rounded-full bg-card"
        />
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
        <button
          onClick={() => onCategoryChange(undefined)}
          className={cn("shrink-0 px-4 py-2 rounded-full text-sm border transition", !activeCategory ? "bg-foreground text-background border-foreground" : "border-border bg-card")}
        >
          Все
        </button>
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => onCategoryChange(c.id)}
            className={cn("shrink-0 px-4 py-2 rounded-full text-sm border transition", activeCategory === c.id ? "bg-foreground text-background border-foreground" : "border-border bg-card")}
          >
            {c.icon} {c.nameRu}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <SlidersHorizontal className="size-4 text-muted-foreground" />
        <select
          value={lang}
          onChange={e => onLangChange(e.target.value)}
          className="text-sm bg-card border border-border rounded-full px-3 py-1.5"
        >
          {langs.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
        </select>
        <select
          value={sort}
          onChange={e => onSortChange(e.target.value)}
          className="text-sm bg-card border border-border rounded-full px-3 py-1.5"
        >
          <option value="popular">По популярности</option>
          <option value="rating">По рейтингу</option>
          <option value="new">Новые</option>
        </select>
        <div className="flex items-center gap-1 text-sm bg-card border border-border rounded-full px-3 py-1.5">
          <Star className="size-3.5 fill-gold text-gold" />
          <select value={minRating} onChange={e => onMinRatingChange(+e.target.value)} className="bg-transparent outline-none">
            <option value={0}>Любой</option>
            <option value={4}>4+</option>
            <option value={4.5}>4.5+</option>
          </select>
        </div>
      </div>
    </>
  );
}
