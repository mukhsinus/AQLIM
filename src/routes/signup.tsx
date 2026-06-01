import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-layout";
import { Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Регистрация — AQLIM" }] }),
  component: SignUp,
});

function SignUp() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  return (
    <AuthLayout
      title="Начните читать"
      subtitle="Создайте аккаунт за 30 секунд"
      footer={<>Уже есть аккаунт? <Link to="/signin" className="text-foreground font-medium underline">Войти</Link></>}
    >
      <form onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/pricing" }), 600); }} className="space-y-4">
        <div><Label htmlFor="n">Имя</Label><Input id="n" required className="mt-1.5 h-11" placeholder="Akmal" /></div>
        <div><Label htmlFor="phone">Номер телефона</Label><Input id="phone" type="tel" required className="mt-1.5 h-11" placeholder="+998 90 123 45 67" /></div>
        <div>
          <Label htmlFor="p">Пароль</Label>
          <div className="relative mt-1.5">
            <Input id="p" type={showPw ? "text" : "password"} required minLength={6} className="h-11 pr-11" placeholder="Минимум 6 символов" />
            <button type="button" tabIndex={-1} onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
              {showPw ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>
        <Button className="w-full h-11 rounded-full" disabled={loading}>{loading ? "Создаём..." : "Создать аккаунт"}</Button>
        <p className="text-xs text-center text-muted-foreground">Регистрируясь, вы соглашаетесь с условиями</p>
      </form>
    </AuthLayout>
  );
}
