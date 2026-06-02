import { createFileRoute } from "@tanstack/react-router";
import { SignInForm } from "@/features/auth/components/signin-form";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Войти — AQLIM" }] }),
  component: SignInForm,
});
