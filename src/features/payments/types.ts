export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: PaymentMethod;
  planId: string;
  createdAt: string;
}

export type PaymentStatus = "pending" | "success" | "failed" | "cancelled";
export type PaymentMethod = "payme" | "click" | "uzcard" | "humo";

export interface CreatePaymentDto {
  planId: string;
  method: PaymentMethod;
}
