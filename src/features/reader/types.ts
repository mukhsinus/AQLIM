export interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface BookContent {
  bookId: string;
  chapters: Chapter[];
}

export interface ReaderSettings {
  theme: "light" | "sepia" | "dark";
  fontSize: number;
}
