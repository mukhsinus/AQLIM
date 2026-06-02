export interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  cover: string;
  coverGradient: string;
  category: string;
  language: "uz" | "ru" | "en";
  rating: number;
  reviewsCount: number;
  description: string;
  pages: number;
  year: number;
  isNew?: boolean;
  isFeatured?: boolean;
  progress?: number;
}

export interface BookPreview {
  id: string;
  title: string;
  author: string;
  coverGradient: string;
  rating: number;
  language: "uz" | "ru" | "en";
}

export interface BookFilters {
  category?: string;
  q?: string;
  lang?: "all" | "uz" | "ru" | "en";
  sort?: "rating" | "new" | "popular";
  page?: number;
  limit?: number;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
}
