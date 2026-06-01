import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft, Settings2, Bookmark, List, Sun, Moon, Type, X } from "lucide-react";
import { useState, useEffect } from "react";
import { getBook } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/reader/$id")({
  loader: ({ params }) => {
    const book = getBook(params.id);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => ({ meta: loaderData ? [{ title: `${loaderData.book.title} — Чтение` }] : [] }),
  notFoundComponent: () => <div className="p-20 text-center">Не найдено</div>,
  errorComponent: ({ error }) => <div className="p-20 text-center">{error.message}</div>,
  component: Reader,
});

const themes = {
  light: "bg-[#fbf9f3] text-[#2a2520]",
  sepia: "bg-[#f4ecd8] text-[#3a2f25]",
  dark: "bg-[#1a1614] text-[#e8e2d5]",
};

const chapters = [
  "Глава I. Знакомство",
  "Глава II. Дом отца",
  "Глава III. Путешествие",
  "Глава IV. Встреча",
  "Глава V. Письмо",
  "Глава VI. Возвращение",
];

const sampleContent = `Был тихий вечер. Солнце медленно опускалось за горизонт, окрашивая небо в тёплые тона янтаря и розы. Городские улицы постепенно пустели, оставляя место первым огням фонарей, которые загорались один за другим, словно звёзды в наступающих сумерках.

Отабек шёл медленно, не торопясь, погружённый в свои мысли. Сегодняшний день принёс ему много неожиданностей — встреча с давним другом, разговор, оживший в памяти образ той, которую он не видел уже несколько лет.

«Жизнь — странная штука», — подумал он, поднимая воротник пальто. Ветер становился прохладнее, и в воздухе уже чувствовалось дыхание поздней осени. Каждый шаг отдавался эхом в пустых переулках старого города, и казалось, что время здесь течёт иначе, медленнее, торжественнее.

Он остановился у небольшого моста через канал. Вода внизу была тёмной, почти чёрной, и лишь редкие блики фонарей плясали на её поверхности. Где-то далеко звучала музыка — чей-то приёмник играл старую мелодию, знакомую с детства.

Эта мелодия словно вернула его в прошлое, к тем дням, когда мир казался проще, понятнее, добрее. Когда каждый рассвет был обещанием чего-то нового, а каждый закат — обещанием возвращения домой, где ждут, любят, понимают.

Он улыбнулся своим воспоминаниям и пошёл дальше. Впереди был долгий путь, но он больше не чувствовал усталости. Внутри него поселилась странная лёгкость, как будто что-то важное наконец встало на своё место.`;

export function Reader() {
  const { book } = Route.useLoaderData();
  const [theme, setTheme] = useState<keyof typeof themes>("light");
  const [fontSize, setFontSize] = useState(18);
  const [showSettings, setShowSettings] = useState(false);
  const [showToc, setShowToc] = useState(false);
  const [chapter, setChapter] = useState(0);
  const [chrome, setChrome] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);

  const progress = ((chapter + 1) / chapters.length) * 100;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className={cn("fixed inset-0 z-50 flex flex-col transition-colors", themes[theme])}>
      {/* Top bar */}
      <div
        className={cn(
          "shrink-0 transition-all duration-300 border-b",
          chrome ? "h-14 opacity-100" : "h-0 opacity-0 overflow-hidden border-transparent",
          theme === "dark" ? "border-white/10" : "border-black/10",
        )}
      >
        <div className="h-14 px-4 flex items-center gap-2">
          <Link to="/book/$id" params={{ id: book.id }}>
            <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><ChevronLeft className="size-5" /></button>
          </Link>
          <div className="flex-1 min-w-0">
            <div className="font-display text-sm font-medium truncate">{book.title}</div>
            <div className="text-xs opacity-60 truncate">{book.author}</div>
          </div>
          <button onClick={() => setShowToc(true)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" aria-label="Оглавление"><List className="size-5" /></button>
          <button onClick={() => setBookmarked(!bookmarked)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" aria-label="Закладка">
            <Bookmark className={cn("size-5", bookmarked && "fill-current")} />
          </button>
          <button onClick={() => setShowSettings(true)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5" aria-label="Настройки"><Settings2 className="size-5" /></button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto" onClick={() => setChrome(c => !c)}>
        <article className="max-w-2xl mx-auto px-6 md:px-8 py-12">
          <p className="text-xs uppercase tracking-widest opacity-60 mb-2">{chapters[chapter]}</p>
          <h2 className="font-display text-3xl font-medium mb-8">{chapters[chapter].split(". ")[1]}</h2>
          <div
            className="font-serif leading-relaxed whitespace-pre-line"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
          >
            {sampleContent}
            {"\n\n"}{sampleContent}
          </div>
          <div className="mt-12 flex justify-between gap-3">
            <Button variant="outline" disabled={chapter === 0} onClick={(e) => { e.stopPropagation(); setChapter(c => c - 1); }}>Назад</Button>
            <Button onClick={(e) => { e.stopPropagation(); setChapter(c => Math.min(chapters.length - 1, c + 1)); }}>Далее</Button>
          </div>
        </article>
      </div>

      {/* Progress bar */}
      <div className={cn("shrink-0 transition-all", chrome ? "h-10 opacity-100" : "h-0 opacity-0 overflow-hidden")}>
        <div className="h-10 px-4 flex items-center gap-3 text-xs">
          <span className="opacity-60 tabular-nums">{Math.round(progress)}%</span>
          <div className="flex-1 h-1 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div className="h-full bg-current opacity-70" style={{ width: `${progress}%` }} />
          </div>
          <span className="opacity-60">Глава {chapter+1}/{chapters.length}</span>
        </div>
      </div>

      {/* Settings panel */}
      {showSettings && (
        <div className="fixed inset-0 z-10 bg-black/40 flex items-end md:items-center justify-center" onClick={() => setShowSettings(false)}>
          <div className={cn("w-full md:max-w-md rounded-t-2xl md:rounded-2xl p-6", themes[theme])} onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-medium">Настройки</h3>
              <button onClick={() => setShowSettings(false)} className="p-2"><X className="size-4" /></button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Тема</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["light","sepia","dark"] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={cn("py-3 rounded-lg border-2 capitalize text-sm", themes[t], theme === t ? "border-current" : "border-transparent")}
                    >
                      {t === "light" && <Sun className="size-4 mx-auto mb-1" />}
                      {t === "sepia" && <Type className="size-4 mx-auto mb-1" />}
                      {t === "dark" && <Moon className="size-4 mx-auto mb-1" />}
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Размер шрифта · {fontSize}px</label>
                <div className="flex items-center gap-3">
                  <button onClick={() => setFontSize(s => Math.max(14, s-2))} className="px-3 py-2 rounded-lg border text-sm">A−</button>
                  <input type="range" min={14} max={28} value={fontSize} onChange={e=>setFontSize(+e.target.value)} className="flex-1" />
                  <button onClick={() => setFontSize(s => Math.min(28, s+2))} className="px-3 py-2 rounded-lg border text-lg">A+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOC */}
      {showToc && (
        <div className="fixed inset-0 z-10 bg-black/40" onClick={() => setShowToc(false)}>
          <div className={cn("absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] p-6 overflow-y-auto", themes[theme])} onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-medium">Оглавление</h3>
              <button onClick={() => setShowToc(false)}><X className="size-4" /></button>
            </div>
            <div className="space-y-1">
              {chapters.map((c, i) => (
                <button
                  key={c}
                  onClick={() => { setChapter(i); setShowToc(false); }}
                  className={cn("w-full text-left p-3 rounded-lg text-sm", chapter === i ? "bg-black/10 dark:bg-white/10 font-medium" : "hover:bg-black/5 dark:hover:bg-white/5")}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
