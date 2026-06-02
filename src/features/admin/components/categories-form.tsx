import { Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/mock-data";

export function CategoriesForm() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-medium">Категории</h1>
        <Button className="rounded-full"><Plus className="size-4" /> Добавить</Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map(c => (
          <div key={c.id} className="p-5 rounded-2xl border border-border bg-background">
            <div className="text-3xl mb-2">{c.icon}</div>
            <div className="font-medium">{c.nameRu}</div>
            <div className="text-xs text-muted-foreground">{c.description}</div>
            <div className="mt-3 flex gap-1">
              <button className="p-1.5 hover:bg-accent rounded"><Edit2 className="size-3.5" /></button>
              <button className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded"><Trash2 className="size-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
