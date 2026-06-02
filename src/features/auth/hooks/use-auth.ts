import { useCallback } from "react";
import { useAuthStore } from "../store/auth-store";
import type { User } from "../types";

export function useAuth() {
  const { user, token, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = useCallback(
    (user: User, token: string) => login(user, token),
    [login],
  );

  const handleLogout = useCallback(() => logout(), [logout]);

  return {
    user,
    token,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
}
