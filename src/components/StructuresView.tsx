import { useMemo, useState } from 'react';
import { Check, CheckCircle2, Volume2 } from 'lucide-react';
import { SENTENCE_STRUCTURES } from '../data/structures';
import { SentenceStructure } from '../types/book';
import { assembleStructureSentence } from '../utils/learningLogic';
import { speakEnglish, SpeechSpeed } from '../utils/speech';

interface StructuresViewProps {
  masteredStructures: number[];
  initialStructureId?: number;
  speechSpeed: SpeechSpeed;
  onToggleMastered: (structureId: number) => void;
}

const CATEGORIES: { id: SentenceStructure['category'] | 'All'; label: string }[] = [
  { id: 'All', label: 'All 30 Structures' },
  { id: 'Identity & Needs', label: 'Identity & Needs' },
  { id: 'Actions & Habits', label: 'Actions & Habits' },
  { id: 'Polite Requests', label: 'Polite Requests' },
  { id: 'Workplace & Time', label: 'Workplace & Time' },
];

export function StructuresView({
  masteredStructures,
  initialStructureId,
  speechSpeed,
  onToggleMastered,
}: StructuresViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    SentenceStructure['category'] | 'All'
  >('All');
  const [activeId, setActiveId] = useState<number>(initialStructureId ?? 1);
  const [slotIndex, setSlotIndex] = useState<number>(0);

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return SENTENCE_STRUCTURES;
    return SENTENCE_STRUCTURES.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const activeStructure =
    SENTENCE_STRUCTURES.find((s) => s.id === activeId) ?? filtered[0] ?? SENTENCE_STRUCTURES[0];

  const assembled = assembleStructureSentence(activeStructure, slotIndex);
  const isMastered = masteredStructures.includes(activeStructure.id);

  const handleSelectStructure = (id: number) => {
    setActiveId(id);
    setSlotIndex(0);
  };

  return (
    <div className="py-7 sm:py-9 space-y-6 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            ৩০টি দৈনন্দিন বাক্য কাঠামো ও লাইভ বাক্য তৈরির ল্যাব
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
            30 Sentence Structures
          </h1>
        </div>
        <div className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
          Mastered:{' '}
          <strong className="text-[#0D7A78] dark:text-[#2DD4BF]">
            {masteredStructures.length} / 30
          </strong>
        </div>
      </div>

      <div
        role="group"
        aria-label="Filter sentence structures by category"
        className="inline-flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        <div className="studio-card lg:col-span-4 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-[#E4ECF4] dark:border-[#1B3552] flex items-center justify-between text-xs font-medium text-[#536B82] dark:text-[#9FB8D0]">
            <span>Choose a Structure</span>
            <span className="tabular-nums">{filtered.length} shown</span>
          </div>
          <div className="max-h-[600px] overflow-y-auto divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
            {filtered.map((item) => {
              const selected = item.id === activeStructure.id;
              const done = masteredStructures.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectStructure(item.id)}
                  className={`w-full text-left px-4 py-3.5 transition-colors flex items-start justify-between gap-3 cursor-pointer ${
                    selected
                      ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0B2239] dark:text-white'
                      : 'hover:bg-[#F4F8FC] dark:hover:bg-[#132C49] text-[#2B4359] dark:text-[#DCE9F5]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
                      <span className="font-mono-tabular font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                        {String(item.id).padStart(2, '0')}.
                      </span>
                      <span className="truncate">{item.category}</span>
                    </div>
                    <div className="text-sm font-bold text-[#0B2239] dark:text-white mt-0.5 leading-snug">
                      {item.pattern}
                    </div>
                    <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5 truncate">
                      {item.meaningBn}
                    </div>
                  </div>
                  {done && (
                    <CheckCircle2
                      className="h-4 w-4 text-[#0D7A78] dark:text-[#2DD4BF] shrink-0 mt-1"
                      aria-label="Mastered"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <article className="lg:col-span-8">
          <div className="studio-card rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#E4ECF4] dark:border-[#1B3552]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
                  <span className="font-mono-tabular font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                    Structure {String(activeStructure.id).padStart(2, '0')} of 30
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{activeStructure.category}</span>
                </div>
                <h2 className="font-display text-2xl font-extrabold text-[#0B2239] dark:text-white mt-1">
                  {activeStructure.pattern}
                </h2>
                <p className="font-bangla text-sm sm:text-base font-semibold text-[#0D7A78] dark:text-[#2DD4BF] mt-1">
                  {activeStructure.meaningBn}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onToggleMastered(activeStructure.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isMastered
                    ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0D7A78] dark:text-[#2DD4BF] border border-[#0D7A78]/35'
                    : 'bg-[#0B2847] text-white hover:bg-[#143C66]'
                }`}
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
              </button>
            </div>

            {/* Live Sentence Builder Stage (Navy + Gold) */}
            <div className="rounded-xl bg-[#07203B] border border-[#1E4368] text-white p-6 space-y-2.5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-[#9FBBD6]">
                  Live Sentence Builder · লাইভ বাক্য তৈরি
                </span>
                <button
                  type="button"
                  onClick={() => speakEnglish(assembled.en, speechSpeed)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#F4B41A] px-3.5 py-1.5 text-xs font-bold text-[#07203B] hover:bg-[#F7C242] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Listen</span>
                </button>
              </div>

              <p
                data-testid="built-sentence-en"
                className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug"
              >
                {assembled.en}
              </p>
              <p className="font-bangla text-base text-[#F4B41A]">
                উচ্চারণ: {assembled.pron}
              </p>
              <p className="font-bangla text-sm text-[#D1E2F1]">
                অর্থ: {assembled.bn}
              </p>
            </div>

            {/* Slot Selector */}
            <div className="space-y-3">
              <label className="block font-bangla text-sm font-bold text-[#0B2239] dark:text-white">
                {activeStructure.slotLabelBn} (যেকোনো একটি বেছে নিন):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStructure.slotOptions.map((opt, idx) => {
                  const active = idx === slotIndex;
                  return (
                    <button
                      key={opt.en}
                      type="button"
                      onClick={() => setSlotIndex(idx)}
                      className={`rounded-xl border p-3.5 text-left transition-colors cursor-pointer ${
                        active
                          ? 'border-[#0D7A78] bg-[#E6F5F4] dark:bg-[#0F3A43]'
                          : 'border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49] hover:border-[#0D7A78]/60'
                      }`}
                    >
                      <div className="text-sm font-bold text-[#0B2239] dark:text-white">{opt.en}</div>
                      <div className="font-bangla text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF] mt-0.5">
                        {opt.pron}
                      </div>
                      <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5">
                        {opt.bn}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ready Examples */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold text-[#0B2239] dark:text-white">
                আরও উদাহরণ (More Examples)
              </h3>
              <div className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552] rounded-xl border border-[#DCE6F0] dark:border-[#1F3C5C]">
                {activeStructure.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex items-center justify-between gap-4 hover:bg-[#F4F8FC] dark:hover:bg-[#132C49]"
                  >
                    <div className="space-y-0.5">
                      <p className="text-base font-bold text-[#0B2239] dark:text-white">{ex.en}</p>
                      <p className="font-bangla text-sm text-[#0D7A78] dark:text-[#2DD4BF]">
                        উচ্চারণ: {ex.pron}
                      </p>
                      <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0]">
                        অর্থ: {ex.bn}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => speakEnglish(ex.en, speechSpeed)}
                      aria-label={`Listen to ${ex.en}`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                    >
                      <Volume2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                disabled={activeStructure.id <= 1}
                onClick={() => handleSelectStructure(Math.max(1, activeStructure.id - 1))}
                className="rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-4 py-2 text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={activeStructure.id >= 30}
                onClick={() => handleSelectStructure(Math.min(30, activeStructure.id + 1))}
                className="rounded-lg bg-[#0D7A78] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0A6361] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next Structure
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
