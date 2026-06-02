import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPayment, getPaymentHistory } from "../api/payments-api";
import type { CreatePaymentDto } from "../types";

export const paymentKeys = {
  all: ["payments"] as const,
  history: () => [...paymentKeys.all, "history"] as const,
};

export const usePaymentHistory = () =>
  useQuery({ queryKey: paymentKeys.history(), queryFn: getPaymentHistory });

export const useCreatePayment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (dto: CreatePaymentDto) => createPayment(dto),
    onSuccess: () => qc.invalidateQueries({ queryKey: paymentKeys.history() }),
  });
};
