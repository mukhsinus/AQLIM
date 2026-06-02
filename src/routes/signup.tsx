import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "@/features/auth/components/signup-form";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Регистрация — AQLIM" }] }),
  component: SignUpForm,
});
