export interface AdminBook {
  id: string;
  title: string;
  author: string;
  authorId: string;
  category: string;
  language: string;
  rating: number;
  reviewsCount: number;
  pages: number;
  year: number;
  isPublished: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  joinedAt: string;
  avatar?: string;
}

export interface AdminAuthor {
  id: string;
  name: string;
  photo: string;
  biography: string;
  bookCount: number;
}

export interface AdminAnalytics {
  period: string;
  readers: number;
  revenue: number;
  newSubscriptions: number;
}
