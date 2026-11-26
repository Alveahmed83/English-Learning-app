import { useMemo, useState } from 'react';
import { Check, Layers, LayoutGrid, List, RotateCw, Search, Volume2 } from 'lucide-react';
import { CORE_WORDS, WORD_CATEGORIES } from '../data/words';
import { CoreWord, WordCategory } from '../types/book';
import { filterWords } from '../utils/learningLogic';
import { speakEnglish, SpeechSpeed } from '../utils/speech';
import { VisualVocabGallery } from './VisualDiagrams';

interface WordsViewProps {
  learnedWords: number[];
  speechSpeed: SpeechSpeed;
  onToggleLearned: (wordId: number) => void;
}

const PAGE_SIZE = 30;

export function WordsView({
  learnedWords,
  speechSpeed,
  onToggleLearned,
}: WordsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<WordCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState<'table' | 'visual' | 'flashcards'>('table');
  const [page, setPage] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(
    () => filterWords(CORE_WORDS, { category: selectedCategory, query: searchQuery }),
    [selectedCategory, searchQuery]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageWords = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
  const isVerbTableView =
    selectedCategory === 'Daily Verbs (V1–V3)' ||
    selectedCategory === 'Workplace Verbs (V1–V3)';

  const activeCard: CoreWord | undefined = filtered[cardIndex % Math.max(filtered.length, 1)];

  const handleCategoryChange = (cat: WordCategory | 'All') => {
    setSelectedCategory(cat);
    setPage(1);
    setCardIndex(0);
    setFlipped(false);
  };

  const handleSpeakVerbForms = (word: CoreWord) => {
    if (word.verbForms) {
      speakEnglish(
        `${word.verbForms.v1}, ${word.verbForms.v2}, ${word.verbForms.v3}`,
        speechSpeed
      );
    } else {
      speakEnglish(word.en, speechSpeed);
    }
  };

  return (
    <div className="py-7 sm:py-9 space-y-6 pb-16">
      {/* Clean Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            ৩০০টি প্রয়োজনীয় শব্দ ও ১০০টি Verb-এর ৩টি রূপ (V1 · V2 · V3)
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
            300 Power Words &amp; Verb Forms
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
            Learned:{' '}
            <strong className="text-[#0D7A78] dark:text-[#2DD4BF]">
              {learnedWords.length} / 300
            </strong>
          </span>

          <div
            role="group"
            aria-label="Vocabulary study mode"
            className="inline-flex rounded-lg bg-[#E4ECF4] dark:bg-[#0D2138] p-1 border border-[#D7E2EC] dark:border-[#1B3552]"
          >
            <button
              type="button"
              onClick={() => setMode('table')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'table'
                  ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                  : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
              }`}
            >
              <List className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Word List</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('visual')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'visual'
                  ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                  : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Visual Cards</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('flashcards');
                setCardIndex(0);
                setFlipped(false);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                mode === 'flashcards'
                  ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                  : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Flashcards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter + Search */}
      {mode !== 'visual' && (
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          <div
            role="group"
            aria-label="Filter words by category"
            className="flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
          >
            {WORD_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                    : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
                }`}
              >
                {cat.labelEn}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72 shrink-0">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B8196]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
                setCardIndex(0);
              }}
              placeholder="Search English, V2/V3, or বাংলা..."
              aria-label="Search 300 power words"
              className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] pl-9 pr-3 py-2 text-sm text-[#0B2239] dark:text-white placeholder:text-[#758A86]"
            />
          </div>
        </div>
      )}

      {mode === 'visual' ? (
        <VisualVocabGallery speechSpeed={speechSpeed} />
      ) : mode === 'table' ? (
        <div className="studio-card rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E4ECF4] dark:border-[#1B3552] flex flex-wrap items-center justify-between gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
            <span className="font-bangla">
              {isVerbTableView
                ? 'ক্রিয়ার ৩টি রূপ: V1 (বর্তমান) · V2 (অতীত) · V3 (সম্পন্ন কাজ) — শুনতে স্পিকারে চাপুন'
                : 'প্রতিটি শব্দের পাশে স্পিকার আইকনে চাপ দিয়ে সঠিক উচ্চারণ শুনুন'}
            </span>
            <span className="font-mono-tabular">
              Showing {filtered.length} words · Page {safePage} of {totalPages}
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="p-10 text-center text-sm text-[#536B82]">
              No words matched &ldquo;{searchQuery}&rdquo;. Try another English or Bangla word.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="book-navy-thead text-xs font-semibold">
                    <th className="py-3 px-3 w-12 font-mono-tabular">#</th>
                    <th className="py-3 px-3">
                      {isVerbTableView ? 'V1 (Present / বর্তমান)' : 'English & উচ্চারণ'}
                    </th>
                    {isVerbTableView ? (
                      <>
                        <th className="py-3 px-3">V2 (Past / অতীত)</th>
                        <th className="py-3 px-3">V3 (Past Participle)</th>
                      </>
                    ) : (
                      <th className="py-3 px-3">Verb Forms (V1 → V2 → V3)</th>
                    )}
                    <th className="py-3 px-3">বাংলা অর্থ</th>
                    <th className="py-3 px-3 hidden md:table-cell">Daily Example</th>
                    <th className="py-3 px-3 text-right w-28">Practice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552] text-sm">
                  {pageWords.map((word) => {
                    const isLearned = learnedWords.includes(word.id);
                    return (
                      <tr
                        key={word.id}
                        className={`transition-colors ${
                          isLearned
                            ? 'bg-[#E6F5F4]/60 dark:bg-[#0F3A43]/60'
                            : 'hover:bg-[#F4F8FC] dark:hover:bg-[#132C49]'
                        }`}
                      >
                        <td className="py-3.5 px-3 font-mono-tabular text-xs text-[#6B8196] align-top">
                          {String(word.id).padStart(3, '0')}
                        </td>

                        {/* Primary Word + Simple Bangla Pronunciation (Zero IPA!) */}
                        <td className="py-3.5 px-3 align-top">
                          <div className="font-bold text-[#0B2239] dark:text-white">{word.en}</div>
                          <div className="font-bangla text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF] mt-0.5">
                            {word.pron}
                          </div>
                        </td>

                        {isVerbTableView && word.verbForms ? (
                          <>
                            <td className="py-3.5 px-3 align-top">
                              <div className="font-semibold text-[#0B2239] dark:text-white">
                                {word.verbForms.v2}
                              </div>
                              <div className="font-bangla text-xs text-[#536B82] dark:text-[#9FB8D0]">
                                {word.verbForms.v2Pron}
                              </div>
                            </td>
                            <td className="py-3.5 px-3 align-top">
                              <div className="font-semibold text-[#0B2239] dark:text-white">
                                {word.verbForms.v3}
                              </div>
                              <div className="font-bangla text-xs text-[#536B82] dark:text-[#9FB8D0]">
                                {word.verbForms.v3Pron}
                              </div>
                            </td>
                          </>
                        ) : (
                          <td className="py-3.5 px-3 align-top">
                            {word.verbForms ? (
                              <div className="text-xs text-[#2B4359] dark:text-[#DCE9F5]">
                                <span className="font-semibold">{word.verbForms.v1}</span>
                                <span className="mx-1 text-[#7C93AA]">→</span>
                                <span>{word.verbForms.v2}</span>
                                <span className="mx-1 text-[#7C93AA]">→</span>
                                <span>{word.verbForms.v3}</span>
                                <div className="font-bangla text-[11px] text-[#536B82] dark:text-[#9FB8D0] mt-0.5">
                                  {word.verbForms.v1Pron} · {word.verbForms.v2Pron} · {word.verbForms.v3Pron}
                                </div>
                              </div>
                            ) : (
                              <span className="text-xs text-[#536B82] dark:text-[#9FB8D0]">
                                {word.category}
                              </span>
                            )}
                          </td>
                        )}

                        <td className="py-3.5 px-3 align-top">
                          <div className="font-bangla font-semibold text-[#0B2239] dark:text-white">
                            {word.bn}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 hidden md:table-cell align-top max-w-xs">
                          <div className="text-xs font-semibold text-[#2B4359] dark:text-[#DCE9F5]">
                            {word.exampleEn}
                          </div>
                          <div className="font-bangla text-xs text-[#536B82] dark:text-[#9FB8D0] mt-0.5">
                            {word.exampleBn}
                          </div>
                        </td>

                        <td className="py-3 px-3 text-right align-top">
                          <div className="inline-flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleSpeakVerbForms(word)}
                              aria-label={`Listen to ${word.en}`}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] cursor-pointer"
                            >
                              <Volume2 className="h-4 w-4" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              onClick={() => onToggleLearned(word.id)}
                              aria-label={
                                isLearned
                                  ? `Unmark ${word.en} as learned`
                                  : `Mark ${word.en} as learned`
                              }
                              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                                isLearned
                                  ? 'border-[#0D7A78] bg-[#0D7A78] text-white'
                                  : 'border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#6B8196] hover:border-[#0D7A78] hover:text-[#0D7A78]'
                              }`}
                            >
                              <Check className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {totalPages > 1 && (
            <div className="px-4 py-3 border-t border-[#E4ECF4] dark:border-[#1B3552] flex items-center justify-between gap-4">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-3.5 py-1.5 text-xs font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Previous 30
              </button>
              <span className="font-mono-tabular text-xs text-[#536B82] dark:text-[#9FB8D0]">
                Page {safePage} / {totalPages}
              </span>
              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-lg bg-[#0D7A78] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#0A6361] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next 30
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Interactive Flashcards — Zero IPA */
        <div className="max-w-xl mx-auto space-y-5">
          {!activeCard ? (
            <div className="studio-card rounded-xl p-10 text-center text-sm text-[#536B82]">
              No flashcards available for this filter.
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between text-xs text-[#536B82] dark:text-[#9FB8D0] font-mono-tabular">
                <span>
                  Card {(cardIndex % filtered.length) + 1} of {filtered.length}
                </span>
                <span>{activeCard.category}</span>
              </div>

              <div className="studio-card rounded-2xl p-8 sm:p-10 min-h-[300px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-xs text-[#6B8196]">
                    Word #{String(activeCard.id).padStart(3, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleSpeakVerbForms(activeCard)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-3 py-1.5 text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Listen</span>
                  </button>
                </div>

                {!flipped ? (
                  <div className="py-8 text-center space-y-3">
                    <h2 className="font-display text-4xl font-extrabold text-[#0B2239] dark:text-white">
                      {activeCard.en}
                    </h2>
                    <p className="font-bangla text-lg font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                      উচ্চারণ: {activeCard.pron}
                    </p>
                    {activeCard.verbForms && (
                      <p className="font-mono-tabular text-sm text-[#4B637A] dark:text-[#9FB8D0] pt-1">
                        V1: {activeCard.verbForms.v1} · V2: {activeCard.verbForms.v2} · V3:{' '}
                        {activeCard.verbForms.v3}
                      </p>
                    )}
                    <p className="font-bangla text-xs text-[#6B8196] pt-2">
                      অর্থ ও উদাহরণ দেখতে নিচে &ldquo;Flip Card&rdquo; চাপুন
                    </p>
                  </div>
                ) : (
                  <div className="py-6 text-center space-y-3">
                    <h2 className="font-bangla text-3xl font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                      {activeCard.bn}
                    </h2>
                    <p className="text-base font-bold text-[#0B2239] dark:text-white">
                      {activeCard.exampleEn}
                    </p>
                    <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0]">
                      {activeCard.exampleBn}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#E4ECF4] dark:border-[#1B3552]">
                  <button
                    type="button"
                    onClick={() => setFlipped((f) => !f)}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-4 py-2 text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] cursor-pointer"
                  >
                    <RotateCw className="h-4 w-4 text-[#0D7A78]" aria-hidden="true" />
                    <span>{flipped ? 'Show English' : 'Flip Card'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleLearned(activeCard.id)}
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold cursor-pointer ${
                      learnedWords.includes(activeCard.id)
                        ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0D7A78] dark:text-[#2DD4BF] border border-[#0D7A78]/35'
                        : 'bg-[#0D7A78] text-white hover:bg-[#0A6361]'
                    }`}
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {learnedWords.includes(activeCard.id) ? 'Learned' : 'Mark Learned'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setCardIndex((i) => (i - 1 + filtered.length) % filtered.length);
                    setFlipped(false);
                  }}
                  className="rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] px-4 py-2 text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] cursor-pointer"
                >
                  Previous Word
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCardIndex((i) => (i + 1) % filtered.length);
                    setFlipped(false);
                  }}
                  className="rounded-lg bg-[#0B2847] px-4 py-2 text-sm font-semibold text-white hover:bg-[#143C66] cursor-pointer"
                >
                  Next Word
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
