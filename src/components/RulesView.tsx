import { useEffect, useMemo, useState } from 'react';
import { Check, CheckCircle2, Search, Volume2 } from 'lucide-react';
import { GOLDEN_RULES } from '../data/rules';
import { GrammarSubTab, RuleCategory } from '../types/book';
import { speakEnglish, SpeechSpeed } from '../utils/speech';
import { GrammarDepthSection } from './GrammarDepthSection';

interface RulesViewProps {
  masteredRules: number[];
  initialRuleId?: number;
  initialSubTab?: GrammarSubTab;
  speechSpeed: SpeechSpeed;
  onToggleMastered: (ruleId: number) => void;
}

const LESSON_TABS: { id: GrammarSubTab; label: string; labelBn: string }[] = [
  { id: 'quickstart', label: 'Quick Start', labelBn: 'শূন্য থেকে শুরু' },
  { id: 'rules', label: '30 Core Rules', labelBn: '৩০টি মূল নিয়ম' },
  { id: 'speaking', label: 'Speaking Tips', labelBn: 'সঠিক উচ্চারণ' },
  { id: 'tenses', label: '12 Tenses', labelBn: '১২টি Tense' },
  { id: 'writing', label: 'Writing & Fixes', labelBn: 'পরিচয়, চিঠি ও ভুল' },
];

const RULE_CATEGORIES: { id: RuleCategory | 'All'; label: string }[] = [
  { id: 'All', label: 'All 30' },
  { id: 'Group A: Foundation', label: 'A. Foundation (1–6)' },
  { id: 'Group B: Daily & Time', label: 'B. Daily & Time (7–12)' },
  { id: 'Group C: Ability & Politeness', label: 'C. Politeness (13–18)' },
  { id: 'Group D: Questions & Details', label: 'D. Questions (19–24)' },
  { id: 'Group E: Connecting Ideas', label: 'E. Connecting (25–30)' },
];

export function RulesView({
  masteredRules,
  initialRuleId,
  initialSubTab = 'rules',
  speechSpeed,
  onToggleMastered,
}: RulesViewProps) {
  const normalizedInitial: GrammarSubTab =
    initialSubTab === 'intermediate' ? 'writing' : initialSubTab;
  const [subTab, setSubTab] = useState<GrammarSubTab>(normalizedInitial);
  const [selectedCategory, setSelectedCategory] = useState<RuleCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRuleId, setActiveRuleId] = useState<number>(initialRuleId ?? 1);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  useEffect(() => {
    setSubTab(initialSubTab === 'intermediate' ? 'writing' : initialSubTab);
  }, [initialSubTab]);

  useEffect(() => {
    if (initialRuleId) {
      setActiveRuleId(initialRuleId);
      setSubTab('rules');
    }
  }, [initialRuleId]);

  const filteredRules = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return GOLDEN_RULES.filter((rule) => {
      if (selectedCategory !== 'All' && rule.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;
      return (
        rule.titleEn.toLowerCase().includes(q) ||
        rule.titleBn.toLowerCase().includes(q) ||
        rule.formula.toLowerCase().includes(q) ||
        rule.explanationBn.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  const activeRule =
    GOLDEN_RULES.find((r) => r.id === activeRuleId) ?? filteredRules[0] ?? GOLDEN_RULES[0];

  const isMastered = masteredRules.includes(activeRule.id);
  const selectedQuizAnswer = quizAnswers[activeRule.id];

  return (
    <div className="py-7 sm:py-9 space-y-6 pb-16">
      {/* Clean Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            ধাপে ধাপে ইংরেজি শেখার ক্লাসরুম
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
            Guided Lessons
          </h1>
        </div>
        <div className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
          Rules Mastered:{' '}
          <strong className="text-[#0D7A78] dark:text-[#2DD4BF]">
            {masteredRules.length} / 30
          </strong>
        </div>
      </div>

      {/* 5 Clean Segmented Lesson Tabs */}
      <div
        role="tablist"
        aria-label="Lesson modules"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1.5 rounded-xl border border-[#D7E2EC] dark:border-[#1B3552]"
      >
        {LESSON_TABS.map((tab) => {
          const isActive = subTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSubTab(tab.id)}
              className={`rounded-lg px-3 py-2 text-left transition-colors cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                  : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
              }`}
            >
              <div className="text-xs sm:text-sm font-bold leading-tight whitespace-nowrap truncate">
                {tab.label}
              </div>
              <div className="font-bangla text-[11px] text-[#0D7A78] dark:text-[#2DD4BF] mt-0.5 truncate">
                {tab.labelBn}
              </div>
            </button>
          );
        })}
      </div>

      {subTab !== 'rules' ? (
        <GrammarDepthSection subTab={subTab} speechSpeed={speechSpeed} />
      ) : (
        <>
          {/* Category Filter + Search */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            <div
              role="group"
              aria-label="Filter rules by category"
              className="flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
            >
              {RULE_CATEGORIES.map((cat) => (
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

            <div className="relative w-full lg:w-64 shrink-0">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B8196]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rule or বাংলা..."
                aria-label="Search golden rules"
                className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] pl-9 pr-3 py-2 text-sm text-[#0B2239] dark:text-white placeholder:text-[#758A86]"
              />
            </div>
          </div>

          {/* Two-Zone Master-Detail Learning Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left List of Rules */}
            <div className="studio-card lg:col-span-4 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E4ECF4] dark:border-[#1B3552] flex items-center justify-between text-xs font-medium text-[#536B82] dark:text-[#9FB8D0]">
                <span>Select a Rule</span>
                <span className="tabular-nums">{filteredRules.length} rules</span>
              </div>
              <div className="max-h-[580px] overflow-y-auto divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                {filteredRules.length === 0 ? (
                  <div className="p-6 text-center text-sm text-[#536B82]">
                    No rules match &ldquo;{searchQuery}&rdquo;.
                  </div>
                ) : (
                  filteredRules.map((rule) => {
                    const selected = rule.id === activeRule.id;
                    const done = masteredRules.includes(rule.id);
                    return (
                      <button
                        key={rule.id}
                        type="button"
                        onClick={() => setActiveRuleId(rule.id)}
                        className={`w-full text-left px-4 py-3.5 transition-colors flex items-start justify-between gap-3 cursor-pointer ${
                          selected
                            ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0B2239] dark:text-white'
                            : 'hover:bg-[#F4F8FC] dark:hover:bg-[#132C49] text-[#2B4359] dark:text-[#DCE9F5]'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
                            <span className="font-mono-tabular font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                              {String(rule.id).padStart(2, '0')}.
                            </span>
                            <span className="truncate">{rule.category}</span>
                          </div>
                          <div className="text-sm font-semibold text-[#0B2239] dark:text-white mt-0.5 leading-snug">
                            {rule.titleEn}
                          </div>
                          <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5 truncate">
                            {rule.titleBn}
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
                  })
                )}
              </div>
            </div>

            {/* Right Detailed Interactive Rule Card (Clean, Zero IPA) */}
            <article className="studio-card lg:col-span-8 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#E4ECF4] dark:border-[#1B3552]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
                    <span className="font-mono-tabular font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                      Rule {String(activeRule.id).padStart(2, '0')} of 30
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeRule.category}</span>
                  </div>
                  <h2 className="font-display text-2xl font-extrabold text-[#0B2239] dark:text-white">
                    {activeRule.titleEn}
                  </h2>
                  <p className="font-bangla text-base font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                    {activeRule.titleBn}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onToggleMastered(activeRule.id)}
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

              {/* Simple Formula */}
              <div className="rounded-xl bg-[#F4F8FC] dark:bg-[#132C49] border border-[#D7E2EC] dark:border-[#1F3C5C] p-4">
                <div className="text-xs font-semibold text-[#536B82] dark:text-[#9FB8D0]">
                  সহজ সূত্র (Formula)
                </div>
                <div className="font-mono-tabular mt-1 text-base font-semibold text-[#0B2239] dark:text-white">
                  {activeRule.formula}
                </div>
              </div>

              {/* Bangla Explanation & Tip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold text-[#0B2239] dark:text-white">
                    সহজ বাংলা ব্যাখ্যা
                  </h3>
                  <p className="font-bangla text-sm text-[#334B61] dark:text-[#C5D5E4] leading-relaxed">
                    {activeRule.explanationBn}
                  </p>
                </div>
                <div className="rounded-xl bg-[#FDF8EE] dark:bg-[#282112] border border-[#EBDAB8] dark:border-[#5C481C] p-4 space-y-1.5">
                  <h3 className="font-bangla text-sm font-bold text-[#7A5114] dark:text-[#F6C959]">
                    মনে রাখার টিপস
                  </h3>
                  <p className="font-bangla text-sm text-[#5B421A] dark:text-[#F0D9A3] leading-relaxed">
                    {activeRule.pitfallTipBn}
                  </p>
                </div>
              </div>

              {/* 3 Audio Examples — Clean English + Bangla Pronunciation + Bangla Meaning (Zero IPA) */}
              <div className="space-y-2.5">
                <h3 className="text-sm font-bold text-[#0B2239] dark:text-white">
                  উদাহরণ শুনুন ও বলুন (Tap to Listen)
                </h3>
                <div className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552] rounded-xl border border-[#D7E2EC] dark:border-[#1F3C5C]">
                  {activeRule.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 flex items-center justify-between gap-4 hover:bg-[#F4F8FC] dark:hover:bg-[#132C49] transition-colors"
                    >
                      <div className="space-y-0.5">
                        <p className="text-base font-bold text-[#0B2239] dark:text-white">
                          {ex.en}
                        </p>
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
                        aria-label={`Listen to example: ${ex.en}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                      >
                        <Volume2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* 1-Question Quick Check */}
              <div className="rounded-xl bg-[#F4F8FC] dark:bg-[#132C49] border border-[#D7E2EC] dark:border-[#1F3C5C] p-5 space-y-3">
                <div className="text-xs font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                  নিজেকে যাচাই করুন (Quick Check)
                </div>
                <p className="font-bangla text-sm sm:text-base font-semibold text-[#0B2239] dark:text-white">
                  {activeRule.quiz.questionBn}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {activeRule.quiz.options.map((option, idx) => {
                    const chosen = selectedQuizAnswer === idx;
                    const isCorrect = idx === activeRule.quiz.correctIndex;
                    let styleClass =
                      'bg-white dark:bg-[#0E223A] border-[#C8D6E3] dark:border-[#244466] text-[#0B2239] dark:text-white hover:border-[#0D7A78]';
                    if (selectedQuizAnswer !== undefined) {
                      if (isCorrect) {
                        styleClass =
                          'bg-[#E6F5F4] dark:bg-[#0F3A43] border-[#0D7A78] text-[#0D7A78] dark:text-[#2DD4BF] font-semibold';
                      } else if (chosen && !isCorrect) {
                        styleClass =
                          'bg-[#FDF1F0] dark:bg-[#35181D] border-[#C44536] text-[#9E2E22] dark:text-[#FB8D83]';
                      }
                    }
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setQuizAnswers((prev) => ({ ...prev, [activeRule.id]: idx }))
                        }
                        className={`rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors cursor-pointer ${styleClass}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {selectedQuizAnswer !== undefined && (
                  <p className="font-bangla text-sm text-[#334B61] dark:text-[#C5D5E4] pt-1">
                    {selectedQuizAnswer === activeRule.quiz.correctIndex
                      ? `সঠিক উত্তর! ${activeRule.quiz.explanationBn}`
                      : `সঠিক উত্তর: "${activeRule.quiz.options[activeRule.quiz.correctIndex]}"। ${activeRule.quiz.explanationBn}`}
                  </p>
                )}
              </div>

              {/* Prev / Next Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={activeRule.id <= 1}
                  onClick={() => setActiveRuleId((id) => Math.max(1, id - 1))}
                  className="rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-4 py-2 text-sm font-medium text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  Previous Rule
                </button>
                <button
                  type="button"
                  disabled={activeRule.id >= 30}
                  onClick={() => setActiveRuleId((id) => Math.min(30, id + 1))}
                  className="rounded-lg bg-[#0D7A78] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0A6361] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  Next Rule
                </button>
              </div>
            </article>
          </div>
        </>
      )}
    </div>
  );
}
