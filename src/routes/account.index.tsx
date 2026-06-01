import { createFileRoute } from "@tanstack/react-router";
import { mockUser } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/account/")({
  component: Profile,
});

function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-medium">Профиль</h2>
        <p className="text-sm text-muted-foreground">Основная информация об аккаунте</p>
      </div>
      <div className="p-6 rounded-2xl border border-border bg-card space-y-4 max-w-md">
        <div><Label>Имя</Label><Input defaultValue={mockUser.name} className="mt-1.5" /></div>
        <div><Label>Email</Label><Input defaultValue={mockUser.email} className="mt-1.5" /></div>
        <div><Label>Дата регистрации</Label><Input disabled defaultValue={mockUser.joinedDate} className="mt-1.5" /></div>
        <Button>Сохранить</Button>
      </div>
      <div className="p-6 rounded-2xl border border-border bg-card max-w-md">
        <h3 className="font-medium mb-3">Предпочтения</h3>
        <div className="space-y-3 text-sm">
          <label className="flex items-center justify-between">Язык интерфейса <select className="bg-background border border-border rounded px-2 py-1"><option>Русский</option><option>O‘zbek</option><option>English</option></select></label>
          <label className="flex items-center justify-between">Email-уведомления <input type="checkbox" defaultChecked /></label>
          <label className="flex items-center justify-between">Push-уведомления <input type="checkbox" /></label>
        </div>
      </div>
    </div>
  );
}
