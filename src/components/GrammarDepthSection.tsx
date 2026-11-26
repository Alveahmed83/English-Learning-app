import { useState } from 'react';
import { Check, Copy, Volume2 } from 'lucide-react';
import {
  COMMON_BD_MISTAKES,
  DAY_ONE_SURVIVAL_PHRASES,
  INTERMEDIATE_TOPICS,
  TWELVE_TENSES,
  WRITING_TEMPLATES,
} from '../data/grammarDepth';
import { PRONUNCIATION_GUIDE } from '../data/stories';
import { GrammarSubTab } from '../types/book';
import { buildSelfIntroduction } from '../utils/learningLogic';
import { speakEnglish, SpeechSpeed } from '../utils/speech';
import {
  PrepositionVisualGrid,
  TenseTimelineDiagram,
  ThreeBoxOrderDiagram,
} from './VisualDiagrams';

interface GrammarDepthSectionProps {
  subTab: Exclude<GrammarSubTab, 'rules'>;
  speechSpeed: SpeechSpeed;
}

export function GrammarDepthSection({ subTab, speechSpeed }: GrammarDepthSectionProps) {
  const [speakingText, setSpeakingText] = useState<string | null>(null);
  const [timeZoneFilter, setTimeZoneFilter] = useState<'All' | 'Present' | 'Past' | 'Future'>('All');
  const [activeTenseId, setActiveTenseId] = useState<string>('present-simple');

  // Sub-panel inside Writing & Fixes so learners never face a massive scroll wall
  const [writingPanel, setWritingPanel] = useState<'intro' | 'templates' | 'mistakes' | 'extra'>('intro');

  // Self-Introduction Builder state
  const [learnerName, setLearnerName] = useState('Karim Ahmed');
  const [learnerDistrict, setLearnerDistrict] = useState('Barishal');
  const [learnerTrade, setLearnerTrade] = useState('Electrical Work');
  const [learnerSkill, setLearnerSkill] = useState('do house wiring and repair motors safely');
  const [pledgeSigned, setPledgeSigned] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const builtIntro = buildSelfIntroduction({
    name: learnerName,
    district: learnerDistrict,
    trade: learnerTrade,
    skill: learnerSkill,
  });

  const handleSpeak = (text: string) => {
    setSpeakingText(text);
    speakEnglish(text, speechSpeed, () => setSpeakingText(null));
  };

  const handleCopy = (id: string, text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2500);
  };

  // TAB 1: Quick Start (Part 0 — 3-Box Switch + 20 Instant Day-1 Phrases, Zero IPA)
  if (subTab === 'quickstart') {
    return (
      <div className="space-y-6">
        <ThreeBoxOrderDiagram speechSpeed={speechSpeed} />

        <div className="studio-card rounded-xl p-5 sm:p-6 space-y-4">
          <div>
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              প্রথম দিন থেকেই বলার মতো ২০টি সহজ বাক্য
            </p>
            <h2 className="font-display text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
              20 Instant Day-1 Phrases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DAY_ONE_SURVIVAL_PHRASES.map((phrase) => {
              const isPlaying = speakingText === phrase.en;
              return (
                <div
                  key={phrase.id}
                  className={`rounded-xl border p-3.5 flex items-center justify-between gap-3 transition-colors ${
                    isPlaying
                      ? 'border-[#0D7A78] bg-[#E6F5F4] dark:bg-[#0F3A43]'
                      : 'border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49]'
                  }`}
                >
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-tabular text-xs font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                        {String(phrase.id).padStart(2, '0')}.
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#0B2239] dark:text-white">
                        {phrase.en}
                      </span>
                    </div>
                    <p className="font-bangla text-xs text-[#0D7A78] dark:text-[#2DD4BF]">
                      {phrase.pron}{' '}
                      <span className="text-[#4B637A] dark:text-[#9FB8D0]">— {phrase.bn}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSpeak(phrase.en)}
                    aria-label={`Listen to ${phrase.en}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                  >
                    <Volume2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // TAB 2: Speaking Tips (8 Simple Bangla Pronunciation Guides — Zero IPA!)
  if (subTab === 'speaking') {
    return (
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            বাংলাভাষীদের জন্য ৮টি সহজ উচ্চারণ কৌশল (কোনো কঠিন চিহ্ন ছাড়াই)
          </p>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2239] dark:text-white">
            Easy Pronunciation &amp; Speaking Tips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRONUNCIATION_GUIDE.map((item) => (
            <article
              key={item.id}
              className="studio-card rounded-xl p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#0B2239] dark:text-white">
                  {item.soundLabel}
                </h3>
                <p className="font-bangla text-sm font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                  {item.banglaCue}
                </p>
                <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] leading-relaxed">
                  {item.trapTipBn}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E4ECF4] dark:border-[#1B3552]">
                {item.sampleWords.map((sample) => {
                  const isPlaying = speakingText === sample.en;
                  return (
                    <button
                      key={sample.en}
                      type="button"
                      onClick={() => handleSpeak(sample.en)}
                      aria-label={`Listen to ${sample.en}`}
                      className={`rounded-lg border p-2.5 text-left transition-colors cursor-pointer ${
                        isPlaying
                          ? 'border-[#0D7A78] bg-[#E6F5F4] dark:bg-[#0F3A43]'
                          : 'border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49] hover:border-[#0D7A78]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm font-bold text-[#0B2239] dark:text-white truncate">
                          {sample.en}
                        </span>
                        <Volume2
                          className="h-3.5 w-3.5 text-[#0D7A78] dark:text-[#2DD4BF] shrink-0"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="font-bangla text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF] mt-0.5 truncate">
                        {sample.pron}
                      </div>
                      <div className="font-bangla text-[11px] text-[#536B82] dark:text-[#9FB8D0] truncate">
                        {sample.bn}
                      </div>
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  // TAB 3: 12 Tenses (Interactive Timeline + Clean Cards, Zero IPA)
  if (subTab === 'tenses') {
    const visibleTenses =
      timeZoneFilter === 'All'
        ? TWELVE_TENSES
        : TWELVE_TENSES.filter((t) => t.timeZone === timeZoneFilter);

    return (
      <div className="space-y-5">
        <TenseTimelineDiagram
          tenses={TWELVE_TENSES}
          activeTenseId={activeTenseId}
          onSelectTense={(id) => {
            setActiveTenseId(id);
            const found = TWELVE_TENSES.find((t) => t.id === id);
            if (found && timeZoneFilter !== 'All' && found.timeZone !== timeZoneFilter) {
              setTimeZoneFilter('All');
            }
          }}
        />

        <div
          role="group"
          aria-label="Filter tenses by time zone"
          className="inline-flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
        >
          {(['All', 'Present', 'Past', 'Future'] as const).map((zone) => (
            <button
              key={zone}
              type="button"
              onClick={() => setTimeZoneFilter(zone)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                timeZoneFilter === zone
                  ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                  : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
              }`}
            >
              {zone === 'All' ? 'All 12 Tenses' : `${zone} (4)`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleTenses.map((tense) => {
            const isHighlighted = tense.id === activeTenseId;
            return (
              <article
                key={tense.id}
                onClick={() => setActiveTenseId(tense.id)}
                className={`studio-card rounded-xl p-5 space-y-3 transition-colors cursor-pointer ${
                  isHighlighted
                    ? 'border-[#0D7A78] ring-1 ring-[#0D7A78]/30'
                    : 'hover:border-[#0D7A78]/60'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-medium text-[#536B82] dark:text-[#9FB8D0]">
                      {tense.timeZone} · {tense.aspect}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white mt-0.5">
                      {tense.nameEn}
                    </h3>
                    <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                      {tense.nameBn}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(tense.exampleEn, speechSpeed);
                    }}
                    aria-label={`Listen to ${tense.nameEn} example`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                  >
                    <Volume2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="rounded-lg bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-2 font-mono-tabular text-xs font-semibold text-[#0B2239] dark:text-white">
                  {tense.formula}
                </div>

                <p className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] leading-relaxed">
                  কখন বলবেন: {tense.whenToUseBn}
                </p>

                <div className="pt-2.5 border-t border-[#E4ECF4] dark:border-[#1B3552] space-y-0.5">
                  <p className="text-sm sm:text-base font-bold text-[#0B2239] dark:text-white">
                    {tense.exampleEn}
                  </p>
                  <p className="font-bangla text-xs text-[#0D7A78] dark:text-[#2DD4BF]">
                    উচ্চারণ: {tense.examplePron}
                  </p>
                  <p className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                    অর্থ: {tense.exampleBn}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }

  // TAB 4: Writing, Self-Intro, Common Mistakes & Extra Grammar (Clean Focused Sub-Switch!)
  return (
    <div className="space-y-5">
      <div
        role="group"
        aria-label="Writing and practice tools"
        className="inline-flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
      >
        {[
          { id: 'intro' as const, label: 'Self-Intro Builder' },
          { id: 'mistakes' as const, label: 'Common Mistakes' },
          { id: 'templates' as const, label: 'Emails & CV Templates' },
          { id: 'extra' as const, label: 'Prepositions & Extras' },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setWritingPanel(item.id)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              writingPanel === item.id
                ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {writingPanel === 'intro' && (
        <section className="studio-card rounded-xl p-6 space-y-5">
          <div>
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              ইন্টারভিউ ও কর্মক্ষেত্রের জন্য নিজের পরিচয় তৈরি করুন
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B2239] dark:text-white mt-0.5">
              Ready-Made Self-Introduction Builder
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <label className="space-y-1 text-xs font-semibold text-[#334B61] dark:text-[#C5D5E4]">
              <span>Your Name (আপনার নাম)</span>
              <input
                type="text"
                value={learnerName}
                onChange={(e) => setLearnerName(e.target.value)}
                className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-2 text-sm text-[#0B2239] dark:text-white"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-[#334B61] dark:text-[#C5D5E4]">
              <span>District (জেলা)</span>
              <input
                type="text"
                value={learnerDistrict}
                onChange={(e) => setLearnerDistrict(e.target.value)}
                className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-2 text-sm text-[#0B2239] dark:text-white"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-[#334B61] dark:text-[#C5D5E4]">
              <span>Trade / Course (পেশা)</span>
              <input
                type="text"
                value={learnerTrade}
                onChange={(e) => setLearnerTrade(e.target.value)}
                className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-2 text-sm text-[#0B2239] dark:text-white"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-[#334B61] dark:text-[#C5D5E4]">
              <span>Key Skill (দক্ষতা)</span>
              <input
                type="text"
                value={learnerSkill}
                onChange={(e) => setLearnerSkill(e.target.value)}
                className="w-full rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-2 text-sm text-[#0B2239] dark:text-white"
              />
            </label>
          </div>

          <div className="rounded-xl bg-[#E6F5F4] dark:bg-[#0F3A43] border border-[#0D7A78]/25 p-5 space-y-3">
            <p className="text-base font-semibold text-[#0B2239] dark:text-white leading-relaxed">
              {builtIntro.en}
            </p>
            <p className="font-bangla text-sm text-[#334B61] dark:text-[#C5D5E4] leading-relaxed">
              {builtIntro.bn}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => speakEnglish(builtIntro.en, speechSpeed)}
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#0D7A78] px-4 text-xs sm:text-sm font-semibold text-white hover:bg-[#0A6361] cursor-pointer"
              >
                <Volume2 className="h-4 w-4" aria-hidden="true" />
                <span>Listen Aloud</span>
              </button>
              <button
                type="button"
                onClick={() => handleCopy('self-intro', builtIntro.en)}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] px-4 text-xs sm:text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] cursor-pointer"
              >
                {copiedId === 'self-intro' ? (
                  <>
                    <Check className="h-4 w-4 text-[#0D7A78]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#0D7A78]" aria-hidden="true" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-[#FDF8EE] dark:bg-[#282112] border border-[#EBDAB8] dark:border-[#5C481C] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={pledgeSigned}
                onChange={(e) => setPledgeSigned(e.target.checked)}
                className="mt-1 h-4 w-4 accent-[#0D7A78] rounded cursor-pointer"
              />
              <span className="font-bangla text-sm text-[#5B421A] dark:text-[#F0D9A3] leading-relaxed">
                <strong>শিক্ষার্থীর অঙ্গীকার:</strong> আমি প্রতিদিন অন্তত ২০ মিনিট ভয় ছাড়াই ইংরেজি
                অনুশীলন করব এবং নিজেকে দক্ষ জনশক্তি হিসেবে গড়ে তুলব।
              </span>
            </label>
            {pledgeSigned && (
              <span className="text-xs font-bold text-[#0D7A78] dark:text-[#2DD4BF] whitespace-nowrap shrink-0">
                Signed by {learnerName || 'Learner'}
              </span>
            )}
          </div>
        </section>
      )}

      {writingPanel === 'mistakes' && (
        <section className="studio-card rounded-xl overflow-hidden">
          <div className="p-5 border-b border-[#E4ECF4] dark:border-[#1B3552]">
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              বাংলাদেশি শিক্ষার্থীদের সাধারণ ভুল ও সঠিক ইংরেজি
            </p>
            <h2 className="font-display text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
              Common Mistakes &amp; Quick Fixes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="book-navy-thead text-xs font-semibold">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Avoid Saying (ভুল)</th>
                  <th className="py-3 px-4">Say Instead (সঠিক)</th>
                  <th className="py-3 px-4">Why (কারণ)</th>
                  <th className="py-3 px-4 text-right">Listen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                {COMMON_BD_MISTAKES.map((item) => (
                  <tr key={item.id} className="hover:bg-[#F4F8FC] dark:hover:bg-[#132C49]">
                    <td className="py-3.5 px-4 font-mono-tabular text-xs text-[#536B82] align-top">
                      {String(item.id).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 align-top">
                      <span className="line-through text-[#9E2E22] dark:text-[#FB8D83] font-medium">
                        {item.wrongEn}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 align-top space-y-0.5">
                      <div className="font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                        {item.correctEn}
                      </div>
                      <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                        {item.correctPron}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] align-top">
                      {item.reasonBn}
                    </td>
                    <td className="py-3 px-4 text-right align-top">
                      <button
                        type="button"
                        onClick={() => speakEnglish(item.correctEn.split('/')[0].trim(), speechSpeed)}
                        aria-label={`Listen to correct phrase: ${item.correctEn}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] cursor-pointer"
                      >
                        <Volume2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {writingPanel === 'templates' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {WRITING_TEMPLATES.map((tpl) => (
            <article
              key={tpl.id}
              className="studio-card rounded-xl p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#0B2239] dark:text-white">
                      {tpl.titleEn}
                    </h3>
                    <p className="font-bangla text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF]">
                      {tpl.titleBn}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        tpl.id,
                        tpl.subjectLine ? `${tpl.subjectLine}\n\n${tpl.bodyEn}` : tpl.bodyEn
                      )
                    }
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] px-3 text-xs font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] shrink-0 cursor-pointer"
                  >
                    {copiedId === tpl.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#0D7A78]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#0D7A78]" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {tpl.subjectLine && (
                  <div className="rounded-lg bg-[#F4F8FC] dark:bg-[#132C49] px-3 py-1.5 text-xs font-semibold text-[#0B2239] dark:text-white">
                    {tpl.subjectLine}
                  </div>
                )}

                <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-[#2B4359] dark:text-[#DCE9F5] bg-[#F4F8FC] dark:bg-[#132C49] border border-[#DCE6F0] dark:border-[#1F3C5C] rounded-lg p-3.5 leading-relaxed">
                  {tpl.bodyEn}
                </pre>
              </div>

              <p className="font-bangla text-xs text-[#7A5114] dark:text-[#F6C959] bg-[#FDF8EE] dark:bg-[#282112] rounded-lg px-3 py-2">
                টিপস: {tpl.notesBn}
              </p>
            </article>
          ))}
        </div>
      )}

      {writingPanel === 'extra' && (
        <div className="space-y-6">
          <PrepositionVisualGrid speechSpeed={speechSpeed} />

          <div className="space-y-4">
            {INTERMEDIATE_TOPICS.map((topic) => (
              <article key={topic.id} className="studio-card rounded-xl p-5 sm:p-6 space-y-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
                    {topic.titleEn}
                  </h3>
                  <p className="font-bangla text-sm font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                    {topic.titleBn}
                  </p>
                </div>

                <div className="rounded-lg bg-[#F4F8FC] dark:bg-[#132C49] px-3.5 py-2 font-mono-tabular text-xs font-semibold text-[#0B2239] dark:text-white">
                  {topic.formula}
                </div>

                <p className="font-bangla text-sm text-[#334B61] dark:text-[#C5D5E4] leading-relaxed">
                  {topic.explanationBn}
                </p>

                <div className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552] rounded-lg border border-[#DCE6F0] dark:border-[#1F3C5C]">
                  {topic.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="p-3.5 flex items-center justify-between gap-4 hover:bg-[#F4F8FC] dark:hover:bg-[#132C49]"
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm sm:text-base font-bold text-[#0B2239] dark:text-white">
                          {ex.en}
                        </p>
                        <p className="font-bangla text-xs text-[#0D7A78] dark:text-[#2DD4BF]">
                          উচ্চারণ: {ex.pron}{' '}
                          <span className="text-[#4B637A] dark:text-[#9FB8D0]">· {ex.bn}</span>
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
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
