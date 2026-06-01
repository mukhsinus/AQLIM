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
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h2 className="font-display text-xl sm:text-2xl font-medium">Профиль</h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Основная информация об аккаунте</p>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card space-y-4 sm:max-w-md">
        <div>
          <Label>Имя</Label>
          <Input defaultValue={mockUser.name} className="mt-1.5" />
        </div>
        <div>
          <Label>Email</Label>
          <Input defaultValue={mockUser.email} className="mt-1.5" />
        </div>
        <div>
          <Label>Дата регистрации</Label>
          <Input disabled defaultValue={mockUser.joinedDate} className="mt-1.5" />
        </div>
        <Button className="w-full sm:w-auto">Сохранить</Button>
      </div>

      <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card sm:max-w-md">
        <h3 className="font-medium mb-4">Предпочтения</h3>
        <div className="space-y-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Язык интерфейса</span>
            <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm min-w-0 max-w-[140px]">
              <option>Русский</option>
              <option>O'zbek</option>
              <option>English</option>
            </select>
          </div>
          <div className="h-px bg-border" />
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <span className="text-muted-foreground">Email-уведомления</span>
            <input type="checkbox" defaultChecked className="size-4 shrink-0 accent-gold" />
          </label>
          <div className="h-px bg-border" />
          <label className="flex items-center justify-between gap-4 cursor-pointer">
            <span className="text-muted-foreground">Push-уведомления</span>
            <input type="checkbox" className="size-4 shrink-0 accent-gold" />
          </label>
        </div>
      </div>
    </div>
  );
}
