import { useQuery } from "@tanstack/react-query";
import { getAdminUsers } from "../api/admin-api";

export const adminUsersKeys = {
  all: ["admin", "users"] as const,
  list: () => [...adminUsersKeys.all, "list"] as const,
};

export const useAdminUsers = () =>
  useQuery({ queryKey: adminUsersKeys.list(), queryFn: getAdminUsers });
