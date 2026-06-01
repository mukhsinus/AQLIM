import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-layout";
import { Check } from "lucide-react";

export const Route = createFileRoute("/forgot")({
  head: () => ({ meta: [{ title: "Восстановление пароля — AQLIM" }] }),
  component: Forgot,
});

function Forgot() {
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout
      title="Восстановление"
      subtitle="Введите email и мы пришлём ссылку"
      footer={<><Link to="/signin" className="text-foreground font-medium underline">Назад ко входу</Link></>}
    >
      {sent ? (
        <div className="text-center py-6">
          <div className="size-14 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
            <Check className="size-6 text-gold" />
          </div>
          <p className="font-medium">Письмо отправлено</p>
          <p className="text-sm text-muted-foreground mt-1">Проверьте почту и следуйте инструкциям</p>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <div><Label htmlFor="e">Email</Label><Input id="e" type="email" required className="mt-1.5 h-11" placeholder="you@example.com" /></div>
          <Button className="w-full h-11 rounded-full">Отправить ссылку</Button>
        </form>
      )}
    </AuthLayout>
  );
}
