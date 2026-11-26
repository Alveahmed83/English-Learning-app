import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  RotateCw,
  Volume2,
} from 'lucide-react';
import { AppTab, DailyPlanItem, GrammarSubTab, LearnerProgress } from '../types/book';
import { BOOK_META } from '../data/stories';
import { GOLDEN_RULES } from '../data/rules';
import { SENTENCE_STRUCTURES } from '../data/structures';
import { calculateProgressStats, generate30DayPlan } from '../utils/learningLogic';
import { SpeechSpeed } from '../utils/speech';
import { BackCoverCard, FrontCoverCard } from './BookCover';

interface HomeHubProps {
  progress: LearnerProgress;
  speechSpeed: SpeechSpeed;
  onChangeSpeechSpeed: (speed: SpeechSpeed) => void;
  onToggleDailyTask: (
    day: number,
    task: 'rule' | 'structure' | 'words' | 'speaking'
  ) => void;
  onNavigateTab: (tab: AppTab, focusId?: number, subTab?: GrammarSubTab) => void;
}

export function HomeHub({
  progress,
  speechSpeed,
  onChangeSpeechSpeed,
  onToggleDailyTask,
  onNavigateTab,
}: HomeHubProps) {
  const [coverSide, setCoverSide] = useState<'front' | 'back'>('front');
  const plan = useMemo(() => generate30DayPlan(), []);
  const stats = useMemo(() => calculateProgressStats(progress), [progress]);
  const [selectedDay, setSelectedDay] = useState<number>(stats.recommendedDay);

  const activePlan: DailyPlanItem = plan[selectedDay - 1] ?? plan[0];
  const dayChecklist = progress.dailyChecklist[selectedDay] ?? {
    rule: false,
    structure: false,
    words: false,
    speaking: false,
  };

  const todayRule = GOLDEN_RULES.find((r) => r.id === activePlan.ruleId);
  const todayStructure = SENTENCE_STRUCTURES.find((s) => s.id === activePlan.structureId);

  const courseModules: {
    part: string;
    title: string;
    bangla: string;
    progressText: string;
    percent: number;
    onClick: () => void;
  }[] = [
    {
      part: 'Part 0',
      title: 'Quick Start Bridge',
      bangla: '৩-বক্স বাক্য গঠন ও প্রথম দিনের ২০টি সহজ বাক্য',
      progressText: '20 Phrases',
      percent: stats.completedDaysCount > 0 ? 100 : 0,
      onClick: () => onNavigateTab('rules', undefined, 'quickstart'),
    },
    {
      part: 'Part 1',
      title: '30 Core Rules',
      bangla: 'সহজ বাংলায় প্রতিদিনের ইংরেজির ৩০টি মূল নিয়ম',
      progressText: `${progress.masteredRules.length} / 30`,
      percent: Math.round((progress.masteredRules.length / 30) * 100),
      onClick: () => onNavigateTab('rules', undefined, 'rules'),
    },
    {
      part: 'Part 2',
      title: '30 Sentence Structures',
      bangla: 'বাক্য তৈরির ৩০টি রেডিমেড ফর্মুলা ও প্র্যাকটিস ল্যাব',
      progressText: `${progress.masteredStructures.length} / 30`,
      percent: Math.round((progress.masteredStructures.length / 30) * 100),
      onClick: () => onNavigateTab('structures'),
    },
    {
      part: 'Part 3',
      title: '300 Words & V1–V3 Verbs',
      bangla: '৩০০টি দরকারি শব্দ ও ১০০টি Verb-এর ৩টি রূপ',
      progressText: `${progress.learnedWords.length} / 300`,
      percent: Math.round((progress.learnedWords.length / 300) * 100),
      onClick: () => onNavigateTab('words'),
    },
    {
      part: 'Part 4',
      title: "Karim's Real-Life Stories",
      bangla: 'বাস্তব গল্পের মাধ্যমে ইংরেজি বলা ও শোনা অনুশীলন',
      progressText: `${progress.completedStories.length} / 6`,
      percent: Math.round((progress.completedStories.length / 6) * 100),
      onClick: () => onNavigateTab('stories'),
    },
    {
      part: 'Part 5',
      title: 'Speaking, Tenses & Writing',
      bangla: 'সঠিক উচ্চারণ, ১২টি Tense, নিজের পরিচয় ও চিঠি লেখা',
      progressText: 'Bonus Guide',
      percent: stats.overallPercent,
      onClick: () => onNavigateTab('rules', undefined, 'speaking'),
    },
  ];

  return (
    <div className="py-7 sm:py-9 space-y-10 pb-16">
      {/* Section 1: Calm Executive Hero Stage with Authentic Matching Book Cover */}
      <section className="relative overflow-hidden rounded-2xl bg-[#07203B] text-white border border-[#1B3F66] shadow-[0_24px_60px_-24px_rgba(7,32,59,0.55)]">
        {/* Subtle brand depth glow inside hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#0E7C7B]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#F4B41A]/12 blur-3xl"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center p-6 sm:p-10 lg:p-12">
          {/* Left 7 Cols: Focused Copy + Primary CTA */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#A9C5DF]">
              <span>EDIFICE Consultants</span>
              <span aria-hidden="true">·</span>
              <span>Dhaka, Bangladesh</span>
              <span aria-hidden="true">·</span>
              <span>By {BOOK_META.authorName}</span>
            </div>

            <div className="space-y-3">
              <p className="font-bangla text-sm sm:text-base font-semibold text-[#2DD4BF]">
                আপনার দক্ষ হাতকে দিন আত্মবিশ্বাসী কণ্ঠ!
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                Learn Practical English from Bangla in{' '}
                <span className="text-[#F4B41A]">30 Simple Days</span>
              </h1>
              <p className="font-bangla text-sm sm:text-base text-[#D1E2F1] leading-relaxed max-w-xl">
                একদম শূন্য থেকে সহজ বাংলা উচ্চারণ, অডিও ও বাস্তব গল্পের মাধ্যমে প্রতিদিনের ও
                কর্মক্ষেত্রের ইংরেজি শিখুন—প্রতিদিন মাত্র ২০ মিনিট।
              </p>
            </div>

            {/* Single Primary CTA + Clean Book Action */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigateTab('rules', activePlan.ruleId, 'rules')}
                className="inline-flex items-center gap-2 rounded-lg bg-[#F4B41A] px-6 py-3 text-sm sm:text-base font-bold text-[#07203B] hover:bg-[#F7C242] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Start Day {activePlan.day} Lesson</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('book')}
                className="inline-flex items-center gap-2 rounded-lg border border-[#2B527A] bg-[#0D2E52] px-5 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#133D6B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-[#2DD4BF]" aria-hidden="true" />
                <span>Read Full Book &amp; PDF</span>
              </button>
            </div>

            {/* Compact Voice Speed Setting */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#B8D0E6]">
              <span className="inline-flex items-center gap-1.5 font-bangla">
                <Volume2 className="h-4 w-4 text-[#2DD4BF]" aria-hidden="true" />
                <span>অডিও গতি:</span>
              </span>
              <div
                role="group"
                aria-label="Speech playback speed"
                className="inline-flex rounded-lg bg-[#0B2A4A] border border-[#20456B] p-1"
              >
                <button
                  type="button"
                  onClick={() => onChangeSpeechSpeed('slow')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    speechSpeed === 'slow'
                      ? 'bg-[#0E7C7B] text-white'
                      : 'text-[#A9C5DF] hover:text-white'
                  }`}
                >
                  Slow Beginner (0.7x)
                </button>
                <button
                  type="button"
                  onClick={() => onChangeSpeechSpeed('normal')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    speechSpeed === 'normal'
                      ? 'bg-[#0E7C7B] text-white'
                      : 'text-[#A9C5DF] hover:text-white'
                  }`}
                >
                  Natural (1.0x)
                </button>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Authentic Matching Front/Back Book Cover */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[310px] sm:max-w-[330px]">
              {coverSide === 'front' ? (
                <FrontCoverCard compact />
              ) : (
                <BackCoverCard compact />
              )}

              <div className="mt-3.5 flex items-center justify-between gap-3">
                <span className="text-xs text-[#9FBBD6]">
                  {coverSide === 'front' ? 'Front Cover' : 'Back Cover'}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setCoverSide((prev) => (prev === 'front' ? 'back' : 'front'))
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#2B527A] bg-[#0D2E52] px-3 py-1.5 text-xs font-medium text-[#E5EFF8] hover:bg-[#133D6B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCw className="h-3.5 w-3.5 text-[#F4B41A]" aria-hidden="true" />
                  <span>{coverSide === 'front' ? 'Flip to Back Cover' : 'Flip to Front Cover'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Clean 6-Module Course Roadmap (One Focused Click to Any Part) */}
      <section aria-labelledby="modules-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              ধাপে ধাপে শেখার সহজ সূচিপত্র
            </p>
            <h2
              id="modules-heading"
              className="font-display text-2xl font-bold text-[#0B2239] dark:text-white mt-0.5"
            >
              Choose Your Study Module
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
            Overall Progress:{' '}
            <strong className="text-[#0D7A78] dark:text-[#2DD4BF]">{stats.overallPercent}%</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courseModules.map((mod) => (
            <button
              key={mod.part}
              type="button"
              onClick={mod.onClick}
              className="studio-card group rounded-xl p-5 text-left transition-all duration-150 hover:border-[#0D7A78] dark:hover:border-[#2DD4BF] flex flex-col justify-between gap-4 cursor-pointer"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono-tabular font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                    {mod.part}
                  </span>
                  <span className="font-mono-tabular text-[#536B82] dark:text-[#9FB8D0]">
                    {mod.progressText}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-[#0B2239] dark:text-white group-hover:text-[#0D7A78] dark:group-hover:text-[#2DD4BF] transition-colors">
                    {mod.title}
                  </h3>
                  <ChevronRight
                    className="h-4 w-4 text-[#7C93AA] group-hover:text-[#0D7A78] dark:group-hover:text-[#2DD4BF] group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-bangla text-xs sm:text-[13px] text-[#4B637A] dark:text-[#9FB8D0] leading-relaxed">
                  {mod.bangla}
                </p>
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E4ECF4] dark:bg-[#163252]">
                <div
                  className="h-full rounded-full bg-[#0D7A78] dark:bg-[#2DD4BF] transition-all duration-300"
                  style={{ width: `${Math.max(mod.percent, mod.percent > 0 ? 6 : 0)}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Section 3: Clean 30-Day Daily Study Plan */}
      <section aria-labelledby="daily-tracker-heading" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              প্রতিদিন মাত্র ২০ মিনিট · ৩০ দিনের রুটিন
            </p>
            <h2
              id="daily-tracker-heading"
              className="font-display text-2xl font-bold text-[#0B2239] dark:text-white mt-0.5"
            >
              30-Day Progress Tracker
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
            <span>
              Completed:{' '}
              <strong className="text-[#0B2239] dark:text-white">
                {stats.completedDaysCount}/30 days
              </strong>
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Streak:{' '}
              <strong className="text-[#0B2239] dark:text-white">
                {stats.currentStreak} days
              </strong>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left 5 cols: Day 1–30 Compact Grid */}
          <div className="studio-card lg:col-span-5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#0B2239] dark:text-white">
                Select Study Day (1–30)
              </h3>
              <span className="font-bangla text-xs text-[#536B82] dark:text-[#9FB8D0]">
                অটো-সেভ হয়
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {plan.map((item) => {
                const isSelected = item.day === selectedDay;
                const isDone = progress.completedDays.includes(item.day);
                return (
                  <button
                    key={item.day}
                    type="button"
                    onClick={() => setSelectedDay(item.day)}
                    aria-label={`Select Day ${item.day}${isDone ? ', completed' : ''}`}
                    className={`h-10 rounded-lg font-mono-tabular text-sm font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B2847] dark:bg-[#F4B41A] text-white dark:text-[#071526]'
                        : isDone
                        ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0D7A78] dark:text-[#2DD4BF] border border-[#0D7A78]/30'
                        : 'bg-[#F4F8FC] dark:bg-[#132C49] text-[#334B61] dark:text-[#B8CFE4] hover:bg-[#E4ECF4] dark:hover:bg-[#1A395D]'
                    }`}
                  >
                    {item.day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right 7 cols: Active Day 4 Simple Tasks */}
          <div className="studio-card lg:col-span-7 rounded-xl p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-2 pb-3.5 border-b border-[#E4ECF4] dark:border-[#1B3552]">
              <div>
                <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                  {activePlan.weekLabel}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
                  Day {activePlan.day}:{' '}
                  <span className="font-bangla">{activePlan.focusTitleBn}</span>
                </h3>
              </div>
              <span className="font-mono-tabular text-xs font-semibold text-[#536B82] dark:text-[#9FB8D0]">
                {[
                  dayChecklist.rule,
                  dayChecklist.structure,
                  dayChecklist.words,
                  dayChecklist.speaking,
                ].filter(Boolean).length}{' '}
                / 4 done
              </span>
            </div>

            <div className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
              <div className="py-3 flex items-center justify-between gap-4">
                <label className="flex items-start gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={dayChecklist.rule}
                    onChange={() => onToggleDailyTask(activePlan.day, 'rule')}
                    className="mt-1 h-4 w-4 accent-[#0D7A78] rounded cursor-pointer"
                  />
                  <div>
                    <div
                      className={`text-sm font-semibold ${
                        dayChecklist.rule
                          ? 'line-through text-[#7C93AA]'
                          : 'text-[#0B2239] dark:text-white'
                      }`}
                    >
                      1. Rule #{activePlan.ruleId}: {todayRule?.titleEn}
                    </div>
                    <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                      {todayRule?.titleBn}
                    </div>
                  </div>
                </label>
                <button
                  type="button"
                  onClick={() => onNavigateTab('rules', activePlan.ruleId, 'rules')}
                  className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Open
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <label className="flex items-start gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={dayChecklist.structure}
                    onChange={() => onToggleDailyTask(activePlan.day, 'structure')}
                    className="mt-1 h-4 w-4 accent-[#0D7A78] rounded cursor-pointer"
                  />
                  <div>
                    <div
                      className={`text-sm font-semibold ${
                        dayChecklist.structure
                          ? 'line-through text-[#7C93AA]'
                          : 'text-[#0B2239] dark:text-white'
                      }`}
                    >
                      2. Structure #{activePlan.structureId}: {todayStructure?.pattern}
                    </div>
                    <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                      {todayStructure?.meaningBn}
                    </div>
                  </div>
                </label>
                <button
                  type="button"
                  onClick={() => onNavigateTab('structures', activePlan.structureId)}
                  className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Practice
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <label className="flex items-start gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={dayChecklist.words}
                    onChange={() => onToggleDailyTask(activePlan.day, 'words')}
                    className="mt-1 h-4 w-4 accent-[#0D7A78] rounded cursor-pointer"
                  />
                  <div>
                    <div
                      className={`text-sm font-semibold ${
                        dayChecklist.words
                          ? 'line-through text-[#7C93AA]'
                          : 'text-[#0B2239] dark:text-white'
                      }`}
                    >
                      3. Learn 10 Words (#{activePlan.wordRangeStart}–#{activePlan.wordRangeEnd})
                    </div>
                    <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                      উচ্চারণ ও উদাহরণসহ ১০টি শব্দ শিখুন
                    </div>
                  </div>
                </label>
                <button
                  type="button"
                  onClick={() => onNavigateTab('words')}
                  className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Study
                </button>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <label className="flex items-start gap-3 cursor-pointer flex-1">
                  <input
                    type="checkbox"
                    checked={dayChecklist.speaking}
                    onChange={() => onToggleDailyTask(activePlan.day, 'speaking')}
                    className="mt-1 h-4 w-4 accent-[#0D7A78] rounded cursor-pointer"
                  />
                  <div>
                    <div
                      className={`text-sm font-semibold ${
                        dayChecklist.speaking
                          ? 'line-through text-[#7C93AA]'
                          : 'text-[#0B2239] dark:text-white'
                      }`}
                    >
                      4. Read Story #{activePlan.storyId} Aloud (5 mins)
                    </div>
                    <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                      জোরে জোরে সংলাপ বলুন ও অনুশীলন করুন
                    </div>
                  </div>
                </label>
                <button
                  type="button"
                  onClick={() => onNavigateTab('stories', activePlan.storyId)}
                  className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Read
                </button>
              </div>
            </div>

            {progress.completedDays.includes(activePlan.day) && (
              <div className="flex items-center gap-2 rounded-lg bg-[#E6F5F4] dark:bg-[#0F3A43] px-4 py-2.5 text-sm font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-bangla">
                  চমৎকার! Day {activePlan.day} সম্পন্ন হয়েছে।
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
