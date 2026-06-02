import { Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { authors } from "@/lib/mock-data";

export function AuthorsTable() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-medium">Авторы</h1>
        <Button className="rounded-full"><Plus className="size-4" /> Добавить</Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {authors.map(a => (
          <div key={a.id} className="p-5 rounded-2xl border border-border bg-background flex gap-4">
            <img src={a.photo} className="size-16 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
              <div className="font-medium">{a.name}</div>
              <div className="text-xs text-muted-foreground">{a.bookCount} книг</div>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{a.biography}</p>
              <div className="mt-3 flex gap-1">
                <button className="p-1.5 hover:bg-accent rounded"><Edit2 className="size-3.5" /></button>
                <button className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded"><Trash2 className="size-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
