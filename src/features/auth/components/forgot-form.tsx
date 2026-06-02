import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "./auth-layout";
import { Check } from "lucide-react";

export function ForgotForm() {
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout
      title="Восстановление"
      subtitle="Введите номер телефона и мы отправим код"
      footer={<><Link to="/signin" className="text-foreground font-medium underline">Назад ко входу</Link></>}
    >
      {sent ? (
        <div className="text-center py-6">
          <div className="size-14 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
            <Check className="size-6 text-gold" />
          </div>
          <p className="font-medium">Код отправлен</p>
          <p className="text-sm text-muted-foreground mt-1">Проверьте SMS и следуйте инструкциям</p>
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
          <div><Label htmlFor="phone">Номер телефона</Label><Input id="phone" type="tel" required className="mt-1.5 h-11" placeholder="+998 90 123 45 67" /></div>
          <Button className="w-full h-11 rounded-full">Отправить код</Button>
        </form>
      )}
    </AuthLayout>
  );
}
