export type AppTab = 'home' | 'rules' | 'structures' | 'words' | 'stories' | 'book';

export type GrammarSubTab =
  | 'quickstart'
  | 'rules'
  | 'speaking'
  | 'tenses'
  | 'writing'
  | 'intermediate';

export type ThemeMode = 'light' | 'dark';

export type RuleCategory =
  | 'Group A: Foundation'
  | 'Group B: Daily & Time'
  | 'Group C: Ability & Politeness'
  | 'Group D: Questions & Details'
  | 'Group E: Connecting Ideas';

export interface BilingualExample {
  en: string;
  pron: string; // Bangla phonetic pronunciation
  bn: string; // Bangla meaning
  ipa?: string;
}

export interface RuleQuiz {
  questionBn: string;
  options: string[];
  correctIndex: number;
  explanationBn: string;
}

export interface GoldenRule {
  id: number;
  category: RuleCategory;
  titleEn: string;
  titleBn: string;
  formula: string;
  explanationBn: string;
  pitfallTipBn: string;
  examples: BilingualExample[];
  quiz: RuleQuiz;
}

export interface StructureSlotOption {
  en: string;
  pron: string;
  bn: string;
}

export interface SentenceStructure {
  id: number;
  category: 'Identity & Needs' | 'Actions & Habits' | 'Polite Requests' | 'Workplace & Time';
  pattern: string;
  patternPron: string;
  meaningBn: string;
  usageBn: string;
  prefixEn: string;
  prefixPron: string;
  suffixEn?: string;
  suffixPron?: string;
  bnTemplate: string; // uses {slot} placeholder
  slotLabelBn: string;
  slotOptions: StructureSlotOption[];
  examples: BilingualExample[];
}

export type WordCategory =
  | 'People & Pronouns'
  | 'Daily Verbs (V1–V3)'
  | 'Workplace Verbs (V1–V3)'
  | 'Questions & Connectors'
  | 'Describing Words'
  | 'Time & Quantity'
  | 'Workplace & Nouns';

export interface VerbForms {
  v1: string;
  v1Pron: string;
  v2: string;
  v2Pron: string;
  v3: string;
  v3Pron: string;
}

export interface CoreWord {
  id: number;
  en: string;
  pron: string;
  bn: string;
  category: WordCategory;
  partOfSpeech: 'Verb' | 'Noun' | 'Adjective' | 'Connector' | 'Pronoun' | 'Expression';
  verbForms?: VerbForms;
  exampleEn: string;
  exampleBn: string;
}

export interface StoryLine {
  speaker: string;
  en: string;
  pron: string;
  bn: string;
  ruleRef?: number;
}

export interface StoryQuizQuestion {
  questionBn: string;
  options: string[];
  correctIndex: number;
}

export interface StoryChapter {
  id: number;
  levelBn: string;
  titleEn: string;
  titleBn: string;
  settingBn: string;
  imageUrl: string;
  imageAlt: string;
  keyWords: string[];
  keyStructuresNote?: string;
  speakWritePrompts?: string[];
  lines: StoryLine[];
  moralBn: string;
  quiz: StoryQuizQuestion[];
}

export interface PronunciationGuideItem {
  id: string;
  soundLabel: string;
  ipaSymbol: string;
  banglaCue: string;
  trapTipBn: string;
  sampleWords: { en: string; ipa: string; pron: string; bn: string }[];
}

export interface SurvivalPhrase {
  id: number;
  en: string;
  ipa: string;
  pron: string;
  bn: string;
}

export interface TenseItem {
  id: string;
  timeZone: 'Past' | 'Present' | 'Future';
  aspect: 'Simple' | 'Continuous' | 'Perfect' | 'Perfect Continuous';
  nameEn: string;
  nameBn: string;
  formula: string;
  whenToUseBn: string;
  exampleEn: string;
  exampleIpa: string;
  examplePron: string;
  exampleBn: string;
}

export interface IntermediateTopic {
  id: string;
  titleEn: string;
  titleBn: string;
  formula: string;
  explanationBn: string;
  workplaceTipBn: string;
  examples: { en: string; ipa: string; pron: string; bn: string }[];
}

export interface WritingTemplate {
  id: string;
  titleEn: string;
  titleBn: string;
  contextBn: string;
  subjectLine?: string;
  bodyEn: string;
  notesBn: string;
}

export interface BangladeshiMistakeItem {
  id: number;
  wrongEn: string;
  correctEn: string;
  correctIpa: string;
  correctPron: string;
  reasonBn: string;
}

export interface DailyPlanItem {
  day: number;
  weekLabel: string;
  ruleId: number;
  structureId: number;
  wordRangeStart: number;
  wordRangeEnd: number;
  storyId: number;
  focusTitleBn: string;
}

export interface LearnerProgress {
  masteredRules: number[];
  masteredStructures: number[];
  learnedWords: number[];
  completedStories: number[];
  completedDays: number[];
  dailyChecklist: Record<
    number,
    {
      rule: boolean;
      structure: boolean;
      words: boolean;
      speaking: boolean;
    }
  >;
  lastActiveDate: string;
}
