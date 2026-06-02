import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books, getCategory } from "@/lib/mock-data";
import { BookCover } from "@/features/catalog/components/book-cover";

export const Route = createFileRoute("/admin/books")({ component: AdminBooks });

function AdminBooks() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-3xl font-medium">Книги</h1>
          <p className="text-sm text-muted-foreground">{books.length} книг в библиотеке</p>
        </div>
        <Button className="rounded-full"><Plus className="size-4" /> Добавить</Button>
      </div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <input placeholder="Поиск..." className="w-full h-10 pl-9 pr-3 rounded-full bg-background border border-border text-sm outline-none" />
      </div>
      <div className="rounded-2xl border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent text-xs uppercase tracking-wide text-muted-foreground">
            <tr><th className="text-left p-3">Книга</th><th className="text-left p-3 hidden md:table-cell">Категория</th><th className="text-left p-3 hidden md:table-cell">Язык</th><th className="text-left p-3">Рейтинг</th><th className="p-3"></th></tr>
          </thead>
          <tbody className="divide-y divide-border">
            {books.map(b => (
              <tr key={b.id} className="hover:bg-accent/50">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10"><BookCover book={b} size="sm" /></div>
                    <div><div className="font-medium">{b.title}</div><div className="text-xs text-muted-foreground">{b.author}</div></div>
                  </div>
                </td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{getCategory(b.category)?.nameRu}</td>
                <td className="p-3 hidden md:table-cell"><span className="text-xs px-2 py-0.5 rounded-full bg-accent">{b.language.toUpperCase()}</span></td>
                <td className="p-3 tabular-nums">{b.rating}</td>
                <td className="p-3">
                  <div className="flex justify-end gap-1">
                    <button className="p-1.5 hover:bg-accent rounded"><Edit2 className="size-3.5" /></button>
                    <button className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded"><Trash2 className="size-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
