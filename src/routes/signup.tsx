import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-layout";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Регистрация — AQLIM" }] }),
  component: SignUp,
});

function SignUp() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <AuthLayout
      title="Начните читать"
      subtitle="Создайте аккаунт за 30 секунд"
      footer={<>Уже есть аккаунт? <Link to="/signin" className="text-foreground font-medium underline">Войти</Link></>}
    >
      <form onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/pricing" }), 600); }} className="space-y-4">
        <div><Label htmlFor="n">Имя</Label><Input id="n" required className="mt-1.5 h-11" placeholder="Akmal" /></div>
        <div><Label htmlFor="e">Email</Label><Input id="e" type="email" required className="mt-1.5 h-11" placeholder="you@example.com" /></div>
        <div><Label htmlFor="p">Пароль</Label><Input id="p" type="password" required className="mt-1.5 h-11" placeholder="Минимум 8 символов" /></div>
        <Button className="w-full h-11 rounded-full" disabled={loading}>{loading ? "Создаём..." : "Создать аккаунт"}</Button>
        <p className="text-xs text-center text-muted-foreground">Регистрируясь, вы соглашаетесь с условиями</p>
      </form>
    </AuthLayout>
  );
}
