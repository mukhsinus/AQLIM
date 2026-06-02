import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, BookOpen, Crown, ChevronLeft, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookCover } from "@/features/catalog/components/book-cover";
import { BookCard } from "@/features/catalog/components/book-card";
import { getBook, getAuthor, getCategory, getSimilarBooks, reviews, collections } from "@/lib/mock-data";
import { SiteFooter } from "@/shared/components/site-footer";

export const Route = createFileRoute("/book/$id")({
  loader: ({ params }) => {
    const book = getBook(params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.book.title} — ${loaderData.book.author} — AQLIM` },
      { name: "description", content: loaderData.book.description },
    ] : [],
  }),
  notFoundComponent: () => <div className="p-20 text-center">Книга не найдена</div>,
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  component: BookPage,
});

const langLabel: Record<string, string> = { uz: "Узбекский", ru: "Русский", en: "English" };

function BookPage() {
  const { book } = Route.useLoaderData();
  const author = getAuthor(book.authorId);
  const category = getCategory(book.category);
  const similar = getSimilarBooks(book);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6">
        <Link to="/catalog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="size-4" /> Назад в каталог
        </Link>

        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
          <div>
            <div className="sticky top-24">
              <div className="w-48 md:w-full mx-auto">
                <BookCover book={book} size="xl" />
              </div>
              <div className="mt-6 space-y-2">
                <Link to="/reader/$id" params={{ id: book.id }}>
                  <Button size="lg" className="w-full h-12 rounded-full">
                    <BookOpen className="size-4" /> Читать книгу
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="w-full h-12 rounded-full">
                    <Crown className="size-4 text-gold" /> Оформить подписку
                  </Button>
                </Link>
                <div className="flex gap-2 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1"><Heart className="size-4" /> В избранное</Button>
                  <Button variant="ghost" size="sm" className="flex-1"><Share2 className="size-4" /> Поделиться</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent">{category?.nameRu}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent">{langLabel[book.language]}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent">{book.year}</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-accent">{book.pages} стр.</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium leading-tight">{book.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{book.author}</p>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="size-4 fill-gold text-gold" />
                <span className="font-semibold">{book.rating}</span>
                <span className="text-muted-foreground">/ 5</span>
              </div>
              <span className="text-muted-foreground">{book.reviewsCount.toLocaleString()} отзывов</span>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-sm mb-2 uppercase tracking-wide text-muted-foreground">О книге</h3>
              <p className="leading-relaxed">{book.description}</p>
            </div>

            {author && (
              <div className="mt-8 p-5 rounded-xl border border-border bg-card flex gap-4">
                <img src={author.photo} alt={author.name} className="size-16 rounded-full object-cover" />
                <div>
                  <div className="text-xs text-muted-foreground">Автор</div>
                  <div className="font-medium">{author.name}</div>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{author.biography}</p>
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-medium mb-4">Отзывы читателей</h2>
              <div className="space-y-4">
                {reviews.map(r => (
                  <div key={r.id} className="p-5 rounded-xl border border-border bg-card">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={r.userAvatar} className="size-10 rounded-full" />
                      <div>
                        <div className="font-medium text-sm">{r.userName}</div>
                        <div className="text-xs text-muted-foreground">{r.date}</div>
                      </div>
                      <div className="ml-auto flex">
                        {Array.from({length: 5}).map((_,i) => (
                          <Star key={i} className={`size-3.5 ${i < r.rating ? "fill-gold text-gold" : "text-muted"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended collections */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-medium mb-4">В коллекциях</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {collections.slice(0,2).map(col => (
                  <div key={col.id} className="relative overflow-hidden rounded-xl p-5 text-white" style={{ background: col.gradient }}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative">
                      <p className="text-xs opacity-80 uppercase tracking-widest">Коллекция</p>
                      <h3 className="font-display text-xl font-medium mt-1">{col.title}</h3>
                      <p className="text-xs opacity-90 mt-1">{col.bookIds.length} книг</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl md:text-3xl font-medium mb-6">Похожие книги</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
              {similar.map(b => <BookCard key={b.id} book={b} />)}
            </div>
          </div>
        )}
      </div>
      <SiteFooter />
    </>
  );
}
