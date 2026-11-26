import { useState } from 'react';
import { Check, CheckCircle2, Eye, EyeOff, Play, Square, Volume2 } from 'lucide-react';
import { STORY_CHAPTERS } from '../data/stories';
import { AppTab } from '../types/book';
import { speakEnglish, SpeechSpeed, stopSpeaking } from '../utils/speech';

interface StoriesViewProps {
  completedStories: number[];
  initialStoryId?: number;
  speechSpeed: SpeechSpeed;
  onToggleCompleted: (storyId: number) => void;
  onJumpToRule: (tab: AppTab, ruleId: number) => void;
}

export function StoriesView({
  completedStories,
  initialStoryId,
  speechSpeed,
  onToggleCompleted,
  onJumpToRule,
}: StoriesViewProps) {
  const [activeStoryId, setActiveStoryId] = useState<number>(initialStoryId ?? 1);
  const [showBanglaHints, setShowBanglaHints] = useState(true);
  const [playingFull, setPlayingFull] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [practiceInputs, setPracticeInputs] = useState<Record<string, string>>({});
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const activeStory =
    STORY_CHAPTERS.find((s) => s.id === activeStoryId) ?? STORY_CHAPTERS[0];
  const isCompleted = completedStories.includes(activeStory.id);

  const handlePlayFullStory = () => {
    if (playingFull) {
      stopSpeaking();
      setPlayingFull(false);
      return;
    }
    const fullText = activeStory.lines.map((l) => l.en).join(' ');
    setPlayingFull(true);
    speakEnglish(fullText, speechSpeed, () => setPlayingFull(false));
  };

  return (
    <div className="py-7 sm:py-9 space-y-6 pb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            গল্পের মাধ্যমে ইংরেজি বলা ও শোনা অনুশীলন
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
            Real-Life Stories
          </h1>
        </div>
        <div className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] tabular-nums">
          Stories Completed:{' '}
          <strong className="text-[#0D7A78] dark:text-[#2DD4BF]">
            {completedStories.length} / 6
          </strong>
        </div>
      </div>

      {/* Story Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {STORY_CHAPTERS.map((story) => {
          const active = story.id === activeStory.id;
          const done = completedStories.includes(story.id);
          return (
            <button
              key={story.id}
              type="button"
              onClick={() => {
                stopSpeaking();
                setPlayingFull(false);
                setActiveStoryId(story.id);
              }}
              className={`studio-card rounded-xl p-4 text-left transition-all flex items-start justify-between gap-3 cursor-pointer ${
                active
                  ? 'border-[#0D7A78] ring-1 ring-[#0D7A78]/30 bg-[#E6F5F4] dark:bg-[#0F3A43]'
                  : 'hover:border-[#0D7A78]/60'
              }`}
            >
              <div className="min-w-0">
                <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                  {story.levelBn}
                </p>
                <p className="text-sm font-bold text-[#0B2239] dark:text-white mt-0.5 leading-snug">
                  {story.titleEn}
                </p>
                <p className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5 truncate">
                  {story.titleBn}
                </p>
              </div>
              {done && (
                <CheckCircle2
                  className="h-4 w-4 text-[#0D7A78] dark:text-[#2DD4BF] shrink-0 mt-1"
                  aria-label="Completed"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Story Stage */}
      <article className="studio-card rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#E4ECF4] dark:border-[#1B3552]">
          <div className="lg:col-span-5 relative min-h-[220px] bg-[#07203B]">
            {!imgErrors[activeStory.id] ? (
              <img
                src={activeStory.imageUrl}
                alt={activeStory.imageAlt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setImgErrors((prev) => ({ ...prev, [activeStory.id]: true }))
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-[#F4B41A] font-display text-xl font-bold">
                Story {activeStory.id}
              </div>
            )}
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-4">
            <div className="space-y-1.5">
              <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                {activeStory.levelBn}
              </p>
              <h2 className="font-display text-2xl font-extrabold text-[#0B2239] dark:text-white">
                {activeStory.titleEn}
              </h2>
              <p className="font-bangla text-base font-semibold text-[#2B4359] dark:text-[#DCE9F5]">
                {activeStory.titleBn}
              </p>
              <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] leading-relaxed">
                {activeStory.settingBn}
              </p>
            </div>

            {activeStory.keyStructuresNote && (
              <p className="text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF]">
                {activeStory.keyStructuresNote}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={handlePlayFullStory}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0D7A78] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#0A6361] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {playingFull ? (
                  <>
                    <Square className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Listen Full Story</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowBanglaHints((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#132C49] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] whitespace-nowrap shrink-0 cursor-pointer"
              >
                {showBanglaHints ? (
                  <>
                    <EyeOff className="h-4 w-4 text-[#0D7A78] dark:text-[#2DD4BF]" aria-hidden="true" />
                    <span>Hide Bangla</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 text-[#0D7A78] dark:text-[#2DD4BF]" aria-hidden="true" />
                    <span>Show Bangla</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onToggleCompleted(activeStory.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isCompleted
                    ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0D7A78] dark:text-[#2DD4BF] border border-[#0D7A78]/35'
                    : 'bg-[#0B2847] text-white hover:bg-[#143C66]'
                }`}
              >
                <Check className="h-4 w-4" aria-hidden="true" />
                <span>{isCompleted ? 'Completed' : 'Mark Completed'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dialogue Lines */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552] rounded-xl border border-[#DCE6F0] dark:border-[#1F3C5C]">
            {activeStory.lines.map((line, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-[#F4F8FC] dark:hover:bg-[#132C49] transition-colors"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#536B82] dark:text-[#9FB8D0]">
                    <span className="font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                      {line.speaker}
                    </span>
                    {line.ruleRef && (
                      <>
                        <span aria-hidden="true">·</span>
                        <button
                          type="button"
                          onClick={() => onJumpToRule('rules', line.ruleRef!)}
                          className="hover:text-[#0D7A78] hover:underline cursor-pointer"
                        >
                          Rule #{line.ruleRef}
                        </button>
                      </>
                    )}
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#0B2239] dark:text-white leading-snug">
                    {line.en}
                  </p>
                  {showBanglaHints && (
                    <div className="space-y-0.5 pt-0.5">
                      <p className="font-bangla text-sm text-[#0D7A78] dark:text-[#2DD4BF]">
                        উচ্চারণ: {line.pron}
                      </p>
                      <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0]">
                        অর্থ: {line.bn}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => speakEnglish(line.en, speechSpeed)}
                  aria-label={`Listen to ${line.speaker}: ${line.en}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                >
                  <Volume2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>

          {/* Speak & Write Practice */}
          {activeStory.speakWritePrompts && activeStory.speakWritePrompts.length > 0 && (
            <div className="rounded-xl bg-[#F4F8FC] dark:bg-[#132C49] border border-[#DCE6F0] dark:border-[#1F3C5C] p-5 space-y-3">
              <div>
                <p className="font-bangla text-xs font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
                  Speak &amp; Write Practice · নিজে লিখে জোরে বলুন
                </p>
                <p className="text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5">
                  Fill in your own details and tap the speaker icon to hear your sentence.
                </p>
              </div>
              <div className="space-y-2.5">
                {activeStory.speakWritePrompts.map((prompt, pIdx) => {
                  const pKey = `${activeStory.id}-p-${pIdx}`;
                  const userVal = practiceInputs[pKey] ?? prompt;
                  return (
                    <div key={pKey} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={userVal}
                        onChange={(e) =>
                          setPracticeInputs((prev) => ({ ...prev, [pKey]: e.target.value }))
                        }
                        aria-label={`Practice sentence ${pIdx + 1}`}
                        className="flex-1 rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] px-3 py-2 text-sm text-[#0B2239] dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => speakEnglish(userVal.replace(/_+/g, ' '), speechSpeed)}
                        aria-label={`Listen to your practice sentence ${pIdx + 1}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                      >
                        <Volume2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Comprehension Check */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Quick Check · গল্পটি কতটুকু বুঝলেন?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {activeStory.quiz.map((q, qIdx) => {
                const key = `${activeStory.id}-${qIdx}`;
                const picked = quizAnswers[key];
                return (
                  <div
                    key={key}
                    className="rounded-xl bg-[#F4F8FC] dark:bg-[#132C49] border border-[#DCE6F0] dark:border-[#1F3C5C] p-4 space-y-2.5"
                  >
                    <p className="font-bangla text-sm font-semibold text-[#0B2239] dark:text-white">
                      {qIdx + 1}. {q.questionBn}
                    </p>
                    <div className="space-y-1.5">
                      {q.options.map((opt, oIdx) => {
                        const chosen = picked === oIdx;
                        const isRight = oIdx === q.correctIndex;
                        let cls =
                          'bg-white dark:bg-[#0E223A] border-[#C8D6E3] dark:border-[#244466] text-[#0B2239] dark:text-white hover:border-[#0D7A78]';
                        if (picked !== undefined) {
                          if (isRight) {
                            cls =
                              'bg-[#E6F5F4] dark:bg-[#0F3A43] border-[#0D7A78] text-[#0D7A78] dark:text-[#2DD4BF] font-semibold';
                          } else if (chosen && !isRight) {
                            cls =
                              'bg-[#FDF1F0] dark:bg-[#35181D] border-[#C44536] text-[#9E2E22] dark:text-[#FB8D83]';
                          }
                        }
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setQuizAnswers((prev) => ({ ...prev, [key]: oIdx }))
                            }
                            className={`w-full rounded-lg border px-3 py-2 text-left text-xs sm:text-sm transition-colors cursor-pointer ${cls}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
