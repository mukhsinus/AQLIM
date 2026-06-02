export interface Profile {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  plan?: string;
  planExpires?: string;
  joinedDate?: string;
}

export interface Review {
  id: string;
  bookId: string;
  rating: number;
  text: string;
  date: string;
}

export interface Subscription {
  id: string;
  planId: string;
  planName: string;
  status: "active" | "cancelled" | "expired";
  expiresAt: string;
  features: string[];
}

export interface OrderHistory {
  id: string;
  bookId: string;
  lastRead: string;
  progress: number;
}
