import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/auth-layout";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Войти — AQLIM" }] }),
  component: SignIn,
});

function SignIn() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <AuthLayout
      title="С возвращением"
      subtitle="Войдите, чтобы продолжить чтение"
      footer={<>Нет аккаунта? <Link to="/signup" className="text-foreground font-medium underline">Создать</Link></>}
    >
      <form onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/account" }), 600); }} className="space-y-4">
        <div>
          <Label htmlFor="e">Email</Label>
          <Input id="e" type="email" placeholder="you@example.com" required className="mt-1.5 h-11" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <Label htmlFor="p">Пароль</Label>
            <Link to="/forgot" className="text-xs text-muted-foreground hover:text-foreground">Забыли?</Link>
          </div>
          <Input id="p" type="password" placeholder="••••••••" required className="mt-1.5 h-11" />
        </div>
        <Button className="w-full h-11 rounded-full" disabled={loading}>{loading ? "Входим..." : "Войти"}</Button>
      </form>
    </AuthLayout>
  );
}
