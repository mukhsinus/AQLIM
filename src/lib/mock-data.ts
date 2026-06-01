export type Language = "uz" | "ru" | "en";

export interface Author {
  id: string;
  name: string;
  photo: string;
  biography: string;
  bookCount: number;
}

export interface Category {
  id: string;
  name: string;
  nameRu: string;
  nameUz: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  authorId: string;
  cover: string;
  coverGradient: string;
  category: string;
  language: Language;
  rating: number;
  reviewsCount: number;
  description: string;
  pages: number;
  year: number;
  isNew?: boolean;
  isFeatured?: boolean;
  progress?: number;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  bookIds: string[];
  gradient: string;
}

const grad = (a: string, b: string) => `linear-gradient(135deg, ${a}, ${b})`;

export const authors: Author[] = [
  { id: "a1", name: "Abdulla Qodiriy", photo: "https://i.pravatar.cc/200?img=12", biography: "Классик узбекской литературы, основоположник узбекского романа.", bookCount: 8 },
  { id: "a2", name: "Чингиз Айтматов", photo: "https://i.pravatar.cc/200?img=68", biography: "Народный писатель Киргизии, автор всемирно известных романов.", bookCount: 14 },
  { id: "a3", name: "Erkin Vohidov", photo: "https://i.pravatar.cc/200?img=33", biography: "Народный поэт Узбекистана, лауреат Государственной премии.", bookCount: 21 },
  { id: "a4", name: "Haruki Murakami", photo: "https://i.pravatar.cc/200?img=52", biography: "Japanese writer whose works of fiction have been translated into 50 languages.", bookCount: 19 },
  { id: "a5", name: "Лев Толстой", photo: "https://i.pravatar.cc/200?img=14", biography: "Один из наиболее известных русских писателей и мыслителей.", bookCount: 47 },
  { id: "a6", name: "Yuval Noah Harari", photo: "https://i.pravatar.cc/200?img=60", biography: "Israeli public intellectual, historian and a professor.", bookCount: 5 },
];

export const categories: Category[] = [
  { id: "c1", name: "Fiction", nameRu: "Художественная", nameUz: "Badiiy", description: "Romans, povestlar va hikoyalar", icon: "📖" },
  { id: "c2", name: "Classics", nameRu: "Классика", nameUz: "Klassika", description: "Великие произведения", icon: "🏛️" },
  { id: "c3", name: "Business", nameRu: "Бизнес", nameUz: "Biznes", description: "Strategy, leadership, growth", icon: "💼" },
  { id: "c4", name: "Psychology", nameRu: "Психология", nameUz: "Psixologiya", description: "Mind, behaviour, self", icon: "🧠" },
  { id: "c5", name: "History", nameRu: "История", nameUz: "Tarix", description: "From ancient to modern", icon: "📜" },
  { id: "c6", name: "Poetry", nameRu: "Поэзия", nameUz: "She'riyat", description: "Verses & lyrics", icon: "✍️" },
  { id: "c7", name: "Self-help", nameRu: "Саморазвитие", nameUz: "O‘z-o‘zini rivojlantirish", description: "Grow yourself", icon: "🌱" },
  { id: "c8", name: "Science", nameRu: "Наука", nameUz: "Fan", description: "Discover the universe", icon: "🔬" },
];

export const books: Book[] = [
  { id: "b1", title: "O‘tkan kunlar", author: "Abdulla Qodiriy", authorId: "a1", cover: "", coverGradient: grad("#7c2d12", "#fbbf24"), category: "c2", language: "uz", rating: 4.9, reviewsCount: 2418, description: "O‘zbek adabiyotining birinchi romani. Tarixiy fon ostida Otabek va Kumush o‘rtasidagi sevgi qissasi.", pages: 412, year: 1925, isFeatured: true, progress: 0.42 },
  { id: "b2", title: "И дольше века длится день", author: "Чингиз Айтматов", authorId: "a2", cover: "", coverGradient: grad("#1e3a8a", "#60a5fa"), category: "c1", language: "ru", rating: 4.8, reviewsCount: 1892, description: "Философский роман о памяти, забвении и человеческом достоинстве в эпоху перемен.", pages: 384, year: 1980, isFeatured: true },
  { id: "b3", title: "Norwegian Wood", author: "Haruki Murakami", authorId: "a4", cover: "", coverGradient: grad("#064e3b", "#a7f3d0"), category: "c1", language: "en", rating: 4.7, reviewsCount: 5230, description: "A poignant story of nostalgia, loss and budding sexuality set in 1960s Tokyo.", pages: 296, year: 1987, isNew: true },
  { id: "b4", title: "Sapiens", author: "Yuval Noah Harari", authorId: "a6", cover: "", coverGradient: grad("#7f1d1d", "#fb923c"), category: "c5", language: "en", rating: 4.8, reviewsCount: 12843, description: "A brief history of humankind — from foragers to masters of the planet.", pages: 464, year: 2011, isNew: true, isFeatured: true },
  { id: "b5", title: "Война и мир", author: "Лев Толстой", authorId: "a5", cover: "", coverGradient: grad("#3b0764", "#c4b5fd"), category: "c2", language: "ru", rating: 4.9, reviewsCount: 8421, description: "Эпический роман, охватывающий судьбы людей в эпоху Наполеоновских войн.", pages: 1225, year: 1869 },
  { id: "b6", title: "She’riyat olami", author: "Erkin Vohidov", authorId: "a3", cover: "", coverGradient: grad("#0c4a6e", "#7dd3fc"), category: "c6", language: "uz", rating: 4.6, reviewsCount: 612, description: "Erkin Vohidovning eng sara she’rlari to‘plami.", pages: 220, year: 2005 },
  { id: "b7", title: "Kafka on the Shore", author: "Haruki Murakami", authorId: "a4", cover: "", coverGradient: grad("#134e4a", "#5eead4"), category: "c1", language: "en", rating: 4.6, reviewsCount: 4310, description: "A surreal odyssey of a runaway boy and an old man who can speak to cats.", pages: 505, year: 2002 },
  { id: "b8", title: "Homo Deus", author: "Yuval Noah Harari", authorId: "a6", cover: "", coverGradient: grad("#1e1b4b", "#a5b4fc"), category: "c8", language: "en", rating: 4.5, reviewsCount: 6720, description: "A brief history of tomorrow — what becomes of humans when gods are replaced by data?", pages: 449, year: 2016, isNew: true },
  { id: "b9", title: "Mehrobdan chayon", author: "Abdulla Qodiriy", authorId: "a1", cover: "", coverGradient: grad("#831843", "#fda4af"), category: "c2", language: "uz", rating: 4.7, reviewsCount: 1102, description: "XIX asr Qo‘qon xonligi davridagi voqealar haqida tarixiy roman.", pages: 356, year: 1929 },
  { id: "b10", title: "Анна Каренина", author: "Лев Толстой", authorId: "a5", cover: "", coverGradient: grad("#450a0a", "#fca5a5"), category: "c2", language: "ru", rating: 4.8, reviewsCount: 6240, description: "Трагическая история любви в высшем свете царской России.", pages: 864, year: 1877, isFeatured: true },
  { id: "b11", title: "Atomic Habits", author: "James Clear", authorId: "a6", cover: "", coverGradient: grad("#9a3412", "#fed7aa"), category: "c7", language: "en", rating: 4.8, reviewsCount: 18920, description: "Tiny changes, remarkable results — a proven framework for improving every day.", pages: 320, year: 2018, isNew: true },
  { id: "b12", title: "Плаха", author: "Чингиз Айтматов", authorId: "a2", cover: "", coverGradient: grad("#365314", "#bef264"), category: "c1", language: "ru", rating: 4.6, reviewsCount: 1430, description: "Роман о борьбе добра и зла, человека и природы.", pages: 380, year: 1986 },
];

export const collections: Collection[] = [
  { id: "col1", title: "Узбекская классика", description: "Великие произведения узбекской литературы", bookIds: ["b1", "b9", "b6"], gradient: grad("#7c2d12", "#fbbf24") },
  { id: "col2", title: "Bestsellers 2024", description: "Самые читаемые книги года", bookIds: ["b4", "b11", "b8"], gradient: grad("#1e3a8a", "#60a5fa") },
  { id: "col3", title: "Русская классика", description: "Бессмертные шедевры русских писателей", bookIds: ["b5", "b10", "b12"], gradient: grad("#450a0a", "#fca5a5") },
  { id: "col4", title: "Mind & Growth", description: "Books that change how you think", bookIds: ["b4", "b8", "b11"], gradient: grad("#064e3b", "#5eead4") },
];

export const reviews: Review[] = [
  { id: "r1", userName: "Aziza K.", userAvatar: "https://i.pravatar.cc/100?img=47", rating: 5, text: "Изумительная книга, читается на одном дыхании. AQLIM сделал чтение удобным!", date: "2 недели назад" },
  { id: "r2", userName: "Бобур М.", userAvatar: "https://i.pravatar.cc/100?img=15", rating: 5, text: "Reader’i juda qulay, kechqurun o‘qish uchun sepia rejimi a’lo.", date: "1 месяц назад" },
  { id: "r3", userName: "Daniel R.", userAvatar: "https://i.pravatar.cc/100?img=11", rating: 4, text: "Great curation. Wish there were more English titles, but the experience is premium.", date: "3 weeks ago" },
  { id: "r4", userName: "Малика А.", userAvatar: "https://i.pravatar.cc/100?img=49", rating: 5, text: "Лучшая библиотека в Узбекистане. Подписка окупается за неделю.", date: "5 дней назад" },
];

export const stats = {
  books: 12480,
  authors: 1840,
  categories: categories.length,
  readers: 86400,
};

export const plans = [
  { id: "monthly", name: "Monthly", nameRu: "Месячный", duration: "1 месяц", price: "39 000", priceNum: 39000, perMonth: "39 000", features: ["Доступ ко всей библиотеке", "Чтение на 2 устройствах", "Офлайн чтение", "Без рекламы"], recommended: false },
  { id: "semi", name: "Semi-Annual", nameRu: "Полугодовой", duration: "6 месяцев", price: "199 000", priceNum: 199000, perMonth: "33 200", features: ["Всё из месячного", "Чтение на 3 устройствах", "Эксклюзивные коллекции", "Скидка 15%"], recommended: false, save: "Экономия 15%" },
  { id: "annual", name: "Annual", nameRu: "Годовой", duration: "12 месяцев", price: "349 000", priceNum: 349000, perMonth: "29 100", features: ["Всё из полугодового", "Чтение на 5 устройствах", "Ранний доступ к новинкам", "Аудиокниги включены", "Скидка 25%"], recommended: true, save: "Экономия 25%" },
];

export const mockUser = {
  id: "u1",
  name: "Akmal Karimov",
  email: "akmal@aqlim.uz",
  avatar: "https://i.pravatar.cc/200?img=33",
  plan: "annual",
  planExpires: "12 мая 2026",
  joinedDate: "Январь 2024",
};

export const readingHistory = [
  { bookId: "b1", lastRead: "Вчера, 22:14", progress: 0.42 },
  { bookId: "b4", lastRead: "3 дня назад", progress: 0.78 },
  { bookId: "b11", lastRead: "Неделю назад", progress: 0.15 },
];

export const paymentHistory = [
  { id: "p1", date: "12 мая 2025", amount: "349 000", method: "Click", plan: "Annual", status: "Успешно" },
  { id: "p2", date: "12 мая 2024", amount: "299 000", method: "Payme", plan: "Annual", status: "Успешно" },
  { id: "p3", date: "12 мая 2023", amount: "39 000", method: "Click", plan: "Monthly", status: "Успешно" },
];

export const getBook = (id: string) => books.find(b => b.id === id);
export const getAuthor = (id: string) => authors.find(a => a.id === id);
export const getCategory = (id: string) => categories.find(c => c.id === id);
export const getBooksByCategory = (id: string) => books.filter(b => b.category === id);
export const getBooksByAuthor = (id: string) => books.filter(b => b.authorId === id);
export const getSimilarBooks = (book: Book) => books.filter(b => b.id !== book.id && b.category === book.category).slice(0, 6);
