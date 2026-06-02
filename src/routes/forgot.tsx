import { createFileRoute } from "@tanstack/react-router";
import { ForgotForm } from "@/features/auth/components/forgot-form";

export const Route = createFileRoute("/forgot")({
  head: () => ({ meta: [{ title: "Восстановление пароля — AQLIM" }] }),
  component: ForgotForm,
});
