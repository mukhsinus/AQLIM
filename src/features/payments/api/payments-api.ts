import { apiClient } from "@/shared/api/client";
import type { Payment, CreatePaymentDto } from "../types";

// TODO: connect to NestJS endpoint POST /payments
export const createPayment = async (dto: CreatePaymentDto): Promise<Payment> => {
  const { data } = await apiClient.post<Payment>("/payments", dto);
  return data;
};

// TODO: connect to NestJS endpoint GET /payments/history
export const getPaymentHistory = async (): Promise<Payment[]> => {
  const { data } = await apiClient.get<Payment[]>("/payments/history");
  return data;
};
