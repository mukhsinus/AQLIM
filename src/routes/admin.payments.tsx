import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, XCircle } from "lucide-react";

export const Route = createFileRoute("/admin/payments")({ component: P });

const payments = [
  { id: "TX-12048", user: "Aziza K.", amount: "349 000", method: "Click", date: "Сегодня 14:22", ok: true },
  { id: "TX-12047", user: "Bobur M.", amount: "39 000", method: "Payme", date: "Сегодня 11:48", ok: true },
  { id: "TX-12046", user: "Daniel R.", amount: "199 000", method: "Click", date: "Вчера", ok: true },
  { id: "TX-12045", user: "Sherzod T.", amount: "39 000", method: "Payme", date: "Вчера", ok: false },
  { id: "TX-12044", user: "Malika A.", amount: "349 000", method: "Click", date: "2 дня назад", ok: true },
];

function P() {
  return (
    <div>
      <h1 className="font-display text-3xl font-medium mb-6">Платежи</h1>
      <div className="rounded-2xl border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent text-xs uppercase text-muted-foreground"><tr><th className="text-left p-3">ID</th><th className="text-left p-3">Пользователь</th><th className="text-left p-3 hidden md:table-cell">Метод</th><th className="text-left p-3">Сумма</th><th className="text-left p-3 hidden md:table-cell">Дата</th><th className="text-left p-3">Статус</th></tr></thead>
          <tbody className="divide-y divide-border">
            {payments.map(p => (
              <tr key={p.id} className="hover:bg-accent/50">
                <td className="p-3 font-mono text-xs">{p.id}</td>
                <td className="p-3 font-medium">{p.user}</td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{p.method}</td>
                <td className="p-3 tabular-nums">{p.amount} <span className="text-xs text-muted-foreground">сум</span></td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{p.date}</td>
                <td className="p-3">{p.ok ? <span className="inline-flex items-center gap-1 text-xs text-gold"><CheckCircle2 className="size-3.5" /> Успешно</span> : <span className="inline-flex items-center gap-1 text-xs text-destructive"><XCircle className="size-3.5" /> Отказ</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
