import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "./auth-layout";
import { Eye, EyeOff } from "lucide-react";

export function SignInForm() {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  return (
    <AuthLayout
      title="С возвращением"
      subtitle="Войдите, чтобы продолжить чтение"
      footer={<>Нет аккаунта? <Link to="/signup" className="text-foreground font-medium underline">Создать</Link></>}
    >
      <form onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => nav({ to: "/account" }), 600); }} className="space-y-4">
        <div>
          <Label htmlFor="phone">Номер телефона</Label>
          <Input id="phone" type="tel" placeholder="+998 90 123 45 67" required className="mt-1.5 h-11" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <Label htmlFor="p">Пароль</Label>
            <Link to="/forgot" className="text-xs text-muted-foreground hover:text-foreground">Забыли?</Link>
          </div>
          <div className="relative mt-1.5">
            <Input id="p" type={showPw ? "text" : "password"} placeholder="••••••" required minLength={6} className="h-11 pr-11" />
            <button type="button" tabIndex={-1} onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
              {showPw ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
            </button>
          </div>
        </div>
        <Button className="w-full h-11 rounded-full" disabled={loading}>{loading ? "Входим..." : "Войти"}</Button>
      </form>
    </AuthLayout>
  );
}
