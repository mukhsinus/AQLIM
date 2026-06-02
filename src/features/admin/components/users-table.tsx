const users = [
  { id: "u1", name: "Akmal Karimov", email: "akmal@aqlim.uz", plan: "Annual", joined: "Янв 2024", avatar: 33 },
  { id: "u2", name: "Aziza Kamilova", email: "aziza@mail.ru", plan: "Semi-Annual", joined: "Мар 2024", avatar: 47 },
  { id: "u3", name: "Bobur Madaminov", email: "bobur@gmail.com", plan: "Monthly", joined: "Май 2024", avatar: 15 },
  { id: "u4", name: "Daniel Roberts", email: "d.roberts@outlook.com", plan: "Annual", joined: "Июл 2024", avatar: 11 },
  { id: "u5", name: "Malika Akhmedova", email: "malika.a@yandex.ru", plan: "Annual", joined: "Авг 2024", avatar: 49 },
  { id: "u6", name: "Sherzod Tursunov", email: "sherzod@aqlim.uz", plan: "Monthly", joined: "Сен 2024", avatar: 12 },
];

export function UsersTable() {
  return (
    <div>
      <h1 className="font-display text-3xl font-medium mb-6">Пользователи</h1>
      <div className="rounded-2xl border border-border bg-background overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-accent text-xs uppercase text-muted-foreground"><tr><th className="text-left p-3">Пользователь</th><th className="text-left p-3 hidden md:table-cell">Email</th><th className="text-left p-3">Тариф</th><th className="text-left p-3 hidden md:table-cell">С нами</th></tr></thead>
          <tbody className="divide-y divide-border">
            {users.map(u => (
              <tr key={u.id} className="hover:bg-accent/50">
                <td className="p-3"><div className="flex items-center gap-3"><img src={`https://i.pravatar.cc/100?img=${u.avatar}`} className="size-8 rounded-full" /><span className="font-medium">{u.name}</span></div></td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{u.email}</td>
                <td className="p-3"><span className="text-xs px-2 py-0.5 rounded-full bg-gold/15 text-gold font-medium">{u.plan}</span></td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{u.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
