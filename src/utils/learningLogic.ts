import {
  CoreWord,
  DailyPlanItem,
  LearnerProgress,
  SentenceStructure,
  ThemeMode,
  WordCategory,
} from '../types/book';

export const PROGRESS_STORAGE_KEY = 'edifice_spoken_english_progress_v1';
export const THEME_STORAGE_KEY = 'edifice_english_theme_v1';

export function loadTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme: ThemeMode): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage issues cleanly
  }
}

export const DEFAULT_PROGRESS: LearnerProgress = {
  masteredRules: [],
  masteredStructures: [],
  learnedWords: [],
  completedStories: [],
  completedDays: [],
  dailyChecklist: {},
  lastActiveDate: new Date().toISOString().slice(0, 10),
};

const WEEK_LABELS = [
  'Week 1 (Days 1–7) · Rules 1–7, Words 1–70 & Story 1',
  'Week 2 (Days 8–14) · Rules 8–15, Verbs 71–130 & Story 2',
  'Week 3 (Days 15–22) · Rules 16–23, Words 131–220 & Story 3',
  'Week 4 (Days 23–30) · Rules 24–30, Words 221–300 & Story 4',
];

const DAILY_FOCUS_TITLES_BN: string[] = [
  '৩-বক্স বাক্য ক্রম ও নিজের পরিচয়',
  'সর্বনাম (I/You/He/She) ও উৎস বলা',
  'Am/Is/Are এবং ইচ্ছা (I want to)',
  'Was/Were এবং প্রয়োজন (I need)',
  'Have/Has এবং দৈনন্দিন পছন্দ',
  'A/An/The এবং থাকা/ব্যবহার',
  'প্রতিদিনের রুটিন (V1) ও গল্প ১ অনুশীলন',
  'না-বোধক (Don\'t/Doesn\'t) ও দক্ষতা',
  'প্রশ্ন (Do/Does) ও ভদ্র সম্বোধন',
  'এখন চলছে (am/is/are + ing) ও অনুমতি',
  'অতীত কাজ (V2) ও নিষেধাজ্ঞা',
  'ভবিষ্যৎ পরিকল্পনা (Will) ও অবস্থা বলা',
  'সক্ষমতা (Can/Can\'t) ও অবস্থান',
  'উপদেশ (Should) ও গল্প ২ ওয়ার্কশপ অনুশীলন',
  'বাধ্যতামূলক (Must) ও নিরাপত্তা নিয়ম',
  'ভদ্র অনুরোধ (Could/May/Would) ও জরুরি নিয়ম',
  'নির্দেশনা (Imperative) ও স্থান জিজ্ঞাসা',
  'হ্যাঁ/না প্রশ্ন ও দাম জিজ্ঞাসা',
  'WH-প্রশ্ন (What/Where/Why) ও সময়',
  'There is / There are ও দক্ষতা প্রকাশ',
  'This/That/These/Those ও দলগত কাজ',
  'অধিকার (My/Your/His) ও গল্প ৩ ইন্টারভিউ অনুশীলন',
  'স্থানের Preposition (In/On/At) ও অভিজ্ঞতা',
  'To/For/With/From ও ধন্যবাদ জানানো',
  'বাক্য জোড়া (And/But/Or) ও বিনীত অনুরোধ',
  'কারণ ও ফল (Because/So) ও ভদ্রভাবে চাওয়া',
  'শর্ত (If) ও কাজের সমস্যা জানানো',
  'বর্ণনা (Adjectives) ও সময় হিসাব বলা',
  'কীভাবে কাজ হয় (Adverbs) ও দক্ষতার ক্ষেত্র',
  'ছোট পরিষ্কার বাক্য ও গল্প ৪ ফাইনাল অনুশীলন',
];

export function generate30DayPlan(): DailyPlanItem[] {
  const plan: DailyPlanItem[] = [];
  for (let day = 1; day <= 30; day++) {
    let weekIndex = 0;
    let storyId = 1;
    if (day <= 7) {
      weekIndex = 0;
      storyId = 1;
    } else if (day <= 14) {
      weekIndex = 1;
      storyId = 2;
    } else if (day <= 22) {
      weekIndex = 2;
      storyId = 3;
    } else {
      weekIndex = 3;
      storyId = day >= 28 ? 6 : day >= 26 ? 5 : 4;
    }

    plan.push({
      day,
      weekLabel: WEEK_LABELS[weekIndex],
      ruleId: day,
      structureId: day,
      wordRangeStart: (day - 1) * 10 + 1,
      wordRangeEnd: day * 10,
      storyId,
      focusTitleBn: DAILY_FOCUS_TITLES_BN[day - 1] ?? `দিন ${day} অনুশীলন`,
    });
  }
  return plan;
}

export function toggleNumberInList(list: number[], id: number): number[] {
  if (list.includes(id)) {
    return list.filter((item) => item !== id);
  }
  return [...list, id].sort((a, b) => a - b);
}

export function toggleDailyTask(
  progress: LearnerProgress,
  day: number,
  taskKey: 'rule' | 'structure' | 'words' | 'speaking'
): LearnerProgress {
  const current = progress.dailyChecklist[day] ?? {
    rule: false,
    structure: false,
    words: false,
    speaking: false,
  };
  const updatedDay = {
    ...current,
    [taskKey]: !current[taskKey],
  };
  const allDone =
    updatedDay.rule && updatedDay.structure && updatedDay.words && updatedDay.speaking;

  let completedDays = progress.completedDays;
  if (allDone && !completedDays.includes(day)) {
    completedDays = [...completedDays, day].sort((a, b) => a - b);
  } else if (!allDone && completedDays.includes(day)) {
    completedDays = completedDays.filter((d) => d !== day);
  }

  return {
    ...progress,
    dailyChecklist: {
      ...progress.dailyChecklist,
      [day]: updatedDay,
    },
    completedDays,
    lastActiveDate: new Date().toISOString().slice(0, 10),
  };
}

export interface ProgressStats {
  totalMasteredItems: number;
  totalCurriculumItems: number;
  overallPercent: number;
  completedDaysCount: number;
  currentStreak: number;
  recommendedDay: number;
}

export function calculateProgressStats(
  progress: LearnerProgress,
  totals = { rules: 30, structures: 30, words: 300, stories: 6 }
): ProgressStats {
  const totalCurriculumItems = totals.rules + totals.structures + totals.words + totals.stories;
  const totalMasteredItems =
    progress.masteredRules.length +
    progress.masteredStructures.length +
    progress.learnedWords.length +
    progress.completedStories.length;

  const curriculumRatio =
    totalCurriculumItems > 0 ? totalMasteredItems / totalCurriculumItems : 0;
  const daysRatio = progress.completedDays.length / 30;
  const rawPercent = Math.round(Math.max(curriculumRatio, daysRatio) * 100);
  const overallPercent =
    totalMasteredItems > 0 || progress.completedDays.length > 0
      ? Math.min(100, Math.max(1, rawPercent))
      : 0;

  // Compute consecutive completed days starting from day 1 or highest contiguous streak
  let streak = 0;
  let maxStreak = 0;
  const completedSet = new Set(progress.completedDays);
  for (let d = 1; d <= 30; d++) {
    if (completedSet.has(d)) {
      streak++;
      if (streak > maxStreak) maxStreak = streak;
    } else {
      streak = 0;
    }
  }

  // Recommend the first incomplete day (1..30)
  let recommendedDay = 1;
  for (let d = 1; d <= 30; d++) {
    if (!completedSet.has(d)) {
      recommendedDay = d;
      break;
    }
    recommendedDay = 30;
  }

  return {
    totalMasteredItems,
    totalCurriculumItems,
    overallPercent,
    completedDaysCount: progress.completedDays.length,
    currentStreak: maxStreak,
    recommendedDay,
  };
}

export function filterWords(
  words: CoreWord[],
  options: {
    category: WordCategory | 'All';
    query: string;
    verbsOnly?: boolean;
  }
): CoreWord[] {
  const normalizedQuery = options.query.trim().toLowerCase();
  return words.filter((word) => {
    if (options.verbsOnly && !word.verbForms) {
      return false;
    }
    if (options.category !== 'All' && word.category !== options.category) {
      return false;
    }
    if (!normalizedQuery) return true;

    const haystacks = [
      word.en,
      word.pron,
      word.bn,
      word.exampleEn,
      word.exampleBn,
      word.verbForms?.v1 ?? '',
      word.verbForms?.v2 ?? '',
      word.verbForms?.v3 ?? '',
    ];
    return haystacks.some((field) => field.toLowerCase().includes(normalizedQuery));
  });
}

export function assembleStructureSentence(
  structure: SentenceStructure,
  slotIndex: number
): { en: string; pron: string; bn: string } {
  const safeIndex = Math.max(0, Math.min(slotIndex, structure.slotOptions.length - 1));
  const slot = structure.slotOptions[safeIndex];
  const suffixEn = structure.suffixEn ?? '.';
  const suffixPron = structure.suffixPron ?? '।';
  const en = `${structure.prefixEn} ${slot.en}${suffixEn}`.replace(/\s+\?/g, '?').replace(/\s+\./g, '.');
  const pron = `${structure.prefixPron} ${slot.pron}${suffixPron}`.replace(/\s+\?/g, '?');
  const bn = structure.bnTemplate.replace('{slot}', slot.bn);
  return { en, pron, bn };
}

export function loadProgress(): LearnerProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<LearnerProgress>;
    return {
      masteredRules: Array.isArray(parsed.masteredRules) ? parsed.masteredRules : [],
      masteredStructures: Array.isArray(parsed.masteredStructures) ? parsed.masteredStructures : [],
      learnedWords: Array.isArray(parsed.learnedWords) ? parsed.learnedWords : [],
      completedStories: Array.isArray(parsed.completedStories) ? parsed.completedStories : [],
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
      dailyChecklist:
        parsed.dailyChecklist && typeof parsed.dailyChecklist === 'object'
          ? parsed.dailyChecklist
          : {},
      lastActiveDate:
        typeof parsed.lastActiveDate === 'string'
          ? parsed.lastActiveDate
          : DEFAULT_PROGRESS.lastActiveDate,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: LearnerProgress): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Ignore storage quota issues cleanly
  }
}

export interface SelfIntroInput {
  name: string;
  district: string;
  trade: string;
  skill: string;
}

export function buildSelfIntroduction(input: SelfIntroInput): { en: string; bn: string } {
  const name = input.name.trim() || 'your name';
  const district = input.district.trim() || 'Bangladesh';
  const trade = input.trade.trim() || 'Technical Trainee';
  const skill = input.skill.trim() || 'complete my daily duties safely and on time';

  const en = `Assalamu Alaikum and good morning, Sir. My name is ${name}. I am from ${district}. I am training as a ${trade} at EDIFICE Consultants Vocational Institute, Dhaka. I can ${skill}. I am punctual, honest, and ready to work hard for your team. Thank you very much.`;
  const bn = `আসসালামু আলাইকুম এবং সুপ্রভাত, স্যার। আমার নাম ${name}। আমার বাড়ি ${district}। আমি ঢাকার EDIFICE Consultants Vocational Institute-এ ${trade} হিসেবে প্রশিক্ষণ নিচ্ছি। আমি ${skill} কাজটি দক্ষতার সাথে করতে পারি। আমি সময়নিষ্ঠ, সৎ এবং আপনার টিমের জন্য কঠোর পরিশ্রম করতে প্রস্তুত। আপনাকে অসংখ্য ধন্যবাদ।`;

  return { en, bn };
}

export interface AudioLessonDeepLink {
  tab: 'home' | 'rules' | 'structures' | 'words' | 'stories' | 'book';
  sub?: 'quickstart' | 'rules' | 'speaking' | 'tenses' | 'writing' | 'intermediate';
  id?: number;
}

export function buildAudioLessonUrl(origin: string, params: AudioLessonDeepLink): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  const search = new URLSearchParams();
  search.set('tab', params.tab);
  if (params.sub) {
    search.set('sub', params.sub);
  }
  if (typeof params.id === 'number' && Number.isFinite(params.id) && params.id > 0) {
    search.set('id', String(params.id));
  }
  return `${cleanOrigin}/?${search.toString()}`;
}

const VALID_TABS = new Set(['home', 'rules', 'structures', 'words', 'stories', 'book']);
const VALID_SUB_TABS = new Set([
  'quickstart',
  'rules',
  'speaking',
  'tenses',
  'writing',
  'intermediate',
]);

export function parseDeepLinkParams(search: string): {
  tab: AudioLessonDeepLink['tab'];
  sub: NonNullable<AudioLessonDeepLink['sub']>;
  id?: number;
} {
  const params = new URLSearchParams(search);
  const rawTab = params.get('tab') ?? 'home';
  const rawSub = params.get('sub') ?? 'rules';
  const rawId = params.get('id');
  const parsedId = rawId ? Number.parseInt(rawId, 10) : NaN;

  return {
    tab: (VALID_TABS.has(rawTab) ? rawTab : 'home') as AudioLessonDeepLink['tab'],
    sub: (VALID_SUB_TABS.has(rawSub) ? rawSub : 'rules') as NonNullable<
      AudioLessonDeepLink['sub']
    >,
    id: Number.isFinite(parsedId) && parsedId > 0 ? parsedId : undefined,
  };
}

