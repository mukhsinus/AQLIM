import { createFileRoute } from "@tanstack/react-router";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/collections")({ component: Col });

function Col() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl font-medium">Коллекции</h1>
        <Button className="rounded-full"><Plus className="size-4" /> Создать</Button>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {collections.map(c => (
          <div key={c.id} className="relative overflow-hidden rounded-2xl p-6 text-white min-h-[160px] flex flex-col justify-between" style={{ background: c.gradient }}>
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative">
              <h3 className="font-display text-xl font-medium">{c.title}</h3>
              <p className="text-sm opacity-90 mt-1">{c.description}</p>
            </div>
            <div className="relative flex justify-between items-center">
              <span className="text-xs opacity-80">{c.bookIds.length} книг</span>
              <div className="flex gap-1">
                <button className="p-1.5 bg-white/20 hover:bg-white/30 rounded"><Edit2 className="size-3.5" /></button>
                <button className="p-1.5 bg-white/20 hover:bg-destructive/60 rounded"><Trash2 className="size-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
