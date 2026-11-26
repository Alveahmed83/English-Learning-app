import { useState } from 'react';
import { Check, Download, Printer } from 'lucide-react';
import { GOLDEN_RULES } from '../data/rules';
import { SENTENCE_STRUCTURES } from '../data/structures';
import { CORE_WORDS } from '../data/words';
import { BOOK_META, PRONUNCIATION_GUIDE, STORY_CHAPTERS } from '../data/stories';
import {
  COMMON_BD_MISTAKES,
  DAY_ONE_SURVIVAL_PHRASES,
  INTERMEDIATE_TOPICS,
  TWELVE_TENSES,
  WRITING_TEMPLATES,
} from '../data/grammarDepth';
import { AppTab, GrammarSubTab, RuleCategory, WordCategory } from '../types/book';
import { generate30DayPlan } from '../utils/learningLogic';
import { BackCoverCard, FrontCoverCard } from './BookCover';
import { ThreeBoxOrderDiagram } from './VisualDiagrams';

interface FullBookPrintViewProps {
  onOpenAudioLesson?: (tab: AppTab, sub?: GrammarSubTab, id?: number) => void;
}

const BOOK_SECTIONS = [
  { id: 'book-front-cover', label: 'Cover' },
  { id: 'book-welcome', label: 'Welcome' },
  { id: 'book-part0', label: 'Part 0' },
  { id: 'book-part1', label: 'Part 1: 30 Rules' },
  { id: 'book-part2', label: 'Part 2: Structures' },
  { id: 'book-part3', label: 'Part 3: 300 Words' },
  { id: 'book-part4', label: 'Part 4: Stories' },
  { id: 'book-part5', label: 'Part 5: 30-Day Plan' },
  { id: 'book-bonus', label: 'Bonus Guide' },
  { id: 'book-back-cover', label: 'Back Cover' },
];

const RULE_GROUPS: { id: RuleCategory; heading: string; headingBn: string }[] = [
  { id: 'Group A: Foundation', heading: 'Group A: Foundation Rules (Rules 1–6)', headingBn: 'গ্রুপ এ: বাক্য গঠনের মূল ভিত্তি' },
  { id: 'Group B: Daily & Time', heading: 'Group B: Daily Actions & Time (Rules 7–12)', headingBn: 'গ্রুপ বি: প্রতিদিনের কাজ ও সময়ের নিয়ম' },
  { id: 'Group C: Ability & Politeness', heading: 'Group C: Ability, Duty & Politeness (Rules 13–18)', headingBn: 'গ্রুপ সি: সক্ষমতা, দায়িত্ব ও ভদ্রতা' },
  { id: 'Group D: Questions & Details', heading: 'Group D: Asking Questions & Details (Rules 19–24)', headingBn: 'গ্রুপ ডি: প্রশ্ন করা ও স্পষ্ট তথ্য দেওয়া' },
  { id: 'Group E: Connecting Ideas', heading: 'Group E: Connecting Ideas (Rules 25–30)', headingBn: 'গ্রুপ ই: বাক্য জোড়া দেওয়া ও স্পষ্ট বলা' },
];

const WORD_BOOK_GROUPS: {
  cat: WordCategory;
  num: number;
  title: string;
  subtitleBn: string;
  isVerbTable?: boolean;
}[] = [
  {
    cat: 'People & Pronouns',
    num: 1,
    title: 'Category 1: People, Pronouns, Family & Workplace Roles (Words 1–30)',
    subtitleBn: 'সর্বনাম, পরিবার ও কর্মক্ষেত্রের পদবি',
  },
  {
    cat: 'Daily Verbs (V1–V3)',
    num: 2,
    title: 'Category 2: 60 Daily Action Verbs with 3 Forms — V1, V2, V3 (Words 31–90)',
    subtitleBn: 'দৈনন্দিন কাজের ৬০টি Verb — বর্তমান (V1), অতীত (V2), সম্পন্ন (V3)',
    isVerbTable: true,
  },
  {
    cat: 'Workplace Verbs (V1–V3)',
    num: 3,
    title: 'Category 3: 40 Workplace & Technical Verbs — V1, V2, V3 (Words 91–130)',
    subtitleBn: 'ওয়ার্কশপ ও কর্মক্ষেত্রের ৪০টি Verb — V1, V2, V3',
    isVerbTable: true,
  },
  {
    cat: 'Questions & Connectors',
    num: 4,
    title: 'Category 4: Question Words, Prepositions & Connectors (Words 131–170)',
    subtitleBn: 'প্রশ্নবোধক শব্দ, Preposition ও বাক্য সংযোগকারী শব্দ',
  },
  {
    cat: 'Describing Words',
    num: 5,
    title: 'Category 5: Describing Words / Adjectives & Opposites (Words 171–215)',
    subtitleBn: 'দোষ-গুণ, অবস্থা ও বিপরীত শব্দ',
  },
  {
    cat: 'Time & Quantity',
    num: 6,
    title: 'Category 6: Time, Days & Quantity Words (Words 216–245)',
    subtitleBn: 'সময়, দিন, মাস ও পরিমাণ বোঝানোর শব্দ',
  },
  {
    cat: 'Workplace & Nouns',
    num: 7,
    title: 'Category 7: Workplace, Tools, Places & Everyday Nouns (Words 246–300)',
    subtitleBn: 'কর্মক্ষেত্র, যন্ত্রপাতি, স্থান ও নিত্যপ্রয়োজনীয় বস্তু',
  },
];

const ROADMAP_WEEKS = [
  {
    week: 'Week 1 (Days 1–7)',
    goal: 'Finish Part 0, Rules 1–7, Structures 1–7, Words 1–70. Practice Story 1 aloud.',
    result: 'Introduce yourself, greet politely, and form basic sentences.',
  },
  {
    week: 'Week 2 (Days 8–14)',
    goal: 'Study Rules 8–15, Structures 8–15, Verbs 71–130 (V1/V2/V3). Practice Story 2 aloud.',
    result: 'Ask for tools, give/follow instructions, and talk about present/past actions.',
  },
  {
    week: 'Week 3 (Days 15–22)',
    goal: 'Study Rules 16–23, Structures 16–23, Words 131–220. Practice Story 3 aloud.',
    result: 'Ask WH-questions, describe skills, and answer job interview questions.',
  },
  {
    week: 'Week 4 (Days 23–30)',
    goal: 'Study Rules 24–30, Structures 24–30, Words 221–300. Practice Story 4 & review all.',
    result: 'Handle workplace conversations, solve problems, and speak with confidence.',
  },
];

export function FullBookPrintView(_props: FullBookPrintViewProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('book-front-cover');
  const plan = generate30DayPlan();

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadHtmlBook = () => {
    const bookRoot = document.getElementById('edifice-complete-book-printable');
    if (!bookRoot) return;
    const htmlDoc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Practical English for Skilled Manpower — By Alve Ahmed Shatu</title>
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  body { font-family: 'Plus Jakarta Sans', 'Hind Siliguri', sans-serif; color: #0B2239; background: #fff; max-width: 920px; margin: 0 auto; padding: 28px; line-height: 1.55; }
  h1, h2, h3 { color: #0B2847; }
  table { width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 13px; }
  th { background: #0B2847; color: #FFFFFF; padding: 8px 10px; text-align: left; }
  td { border-bottom: 1px solid #D7E2EC; padding: 7px 10px; vertical-align: top; }
  .book-page-break { page-break-before: always; margin-top: 32px; }
  .no-print { display: none; }
</style>
</head>
<body>${bookRoot.innerHTML}</body>
</html>`;
    const blob = new Blob([htmlDoc], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Practical-English-for-Skilled-Manpower-Alve-Ahmed-Shatu.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3500);
  };

  return (
    <div className="py-7 sm:py-9 space-y-6 pb-20">
      {/* Clean Executive Book Toolbar (hidden in print) */}
      <div className="no-print studio-card rounded-xl p-5 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              সম্পূর্ণ বই পড়ুন ও PDF প্রিন্ট করুন
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              Practical English for Skilled Manpower
            </h1>
            <p className="text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-0.5">
              Complete Bilingual Textbook · By {BOOK_META.authorName} · EDIFICE Consultants
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleDownloadHtmlBook}
              className="inline-flex items-center gap-2 rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#132C49] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0B2239] dark:text-white hover:bg-[#F4F8FC] whitespace-nowrap shrink-0 cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="h-4 w-4 text-[#0D7A78]" aria-hidden="true" />
                  <span>Saved Book</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 text-[#0D7A78] dark:text-[#2DD4BF]" aria-hidden="true" />
                  <span>Download HTML</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-2 rounded-lg bg-[#0D7A78] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#0A6361] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Clean Single-Line Scrollable Chapter Tabs (Never wraps into a messy paragraph!) */}
        <div className="pt-3 border-t border-[#E4ECF4] dark:border-[#1B3552] overflow-x-auto">
          <div className="flex items-center gap-1.5 min-w-max pb-1">
            {BOOK_SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'bg-[#0B2847] text-white dark:bg-[#F4B41A] dark:text-[#071526]'
                      : 'bg-[#F4F8FC] dark:bg-[#132C49] text-[#334B61] dark:text-[#B8CFE4] hover:bg-[#E4ECF4] dark:hover:bg-[#1A395D]'
                  }`}
                >
                  {sec.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Printable Complete Textbook */}
      <div id="edifice-complete-book-printable" className="space-y-8">
        {/* PAGE 1: FRONT COVER */}
        <section id="book-front-cover" className="flex justify-center py-2">
          <div className="w-full max-w-[540px]">
            <FrontCoverCard />
          </div>
        </section>

        {/* PAGE 2: WELCOME, GOLDEN SECRET & TABLE OF CONTENTS */}
        <section
          id="book-welcome"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-6"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-5">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white">
              Welcome to Your New Future!
            </h2>
            <p className="font-bangla text-sm font-semibold text-[#0D7A78] dark:text-[#2DD4BF] mt-1">
              অধ্যক্ষ ও লেখকের বাণী — লেখক: {BOOK_META.authorName} (EDIFICE Consultants)
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#2B4359] dark:text-[#DCE9F5] leading-relaxed">
            <p>
              <strong>Dear Learner,</strong> Welcome to a new chapter of your life. If you know
              zero English right now—do not worry! You do not need to memorize big dictionaries or
              difficult grammar books. This book is designed like a friendly teacher sitting beside
              you. Every single page gives you <strong>Bangla meaning</strong>,{' '}
              <strong>Bangla pronunciation (উচ্চারণ)</strong>, and simple spaces to write and
              practice with your own pen.
            </p>
            <p className="font-bangla">
              <strong>প্রিয় শিক্ষার্থী,</strong> আপনার জীবনের নতুন অধ্যায়ে আপনাকে স্বাগতম। আপনি যদি
              এখন একদমই ইংরেজি না জানেন, তবুও কোনো ভয় নেই! এই বইটি এমনভাবে তৈরি করা হয়েছে যেন
              কোনো শিক্ষক ছাড়াই আপনি নিজে নিজে সহজে ইংরেজি শিখতে পারেন। প্রতিটি শব্দের সাথে বাংলা
              উচ্চারণ ও অর্থ দেওয়া আছে। প্রতিদিন মাত্র ২০ মিনিট সময় দিলে ৩০ দিনেই আপনি আত্মবিশ্বাসের
              সাথে ইংরেজি বলতে পারবেন।
            </p>
          </div>

          {/* The Golden Secret Box */}
          <div className="rounded-xl bg-[#E6F5F4] dark:bg-[#0F3A43] border border-[#0D7A78]/35 p-5 space-y-2">
            <p className="text-sm font-bold text-[#0B2239] dark:text-white">
              The Golden Secret for Bangladeshi Learners (বাংলাদেশি শিক্ষার্থীদের জন্য মূল রহস্য):
            </p>
            <p className="font-bangla text-sm text-[#2B4359] dark:text-[#DCE9F5] leading-relaxed">
              Bangla and English build sentences in opposite order. In Bangla, the action word
              (Verb) goes at the end: <strong>আমি (I) কাজ (work) করি (do)</strong>. In English,
              the action word comes <strong>second</strong>, right after the person:{' '}
              <strong>I do work</strong>. Once you master this single switch, half of your English
              fear disappears immediately!
            </p>
          </div>

          {/* Table of Contents */}
          <div className="space-y-3 pt-2">
            <h3 className="font-display text-xl font-bold text-[#0B2239] dark:text-white">
              Table of Contents (সূচিপত্র)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="book-navy-thead text-xs font-semibold">
                    <th className="py-2.5 px-3 w-24">Section</th>
                    <th className="py-2.5 px-3">Topic (English)</th>
                    <th className="py-2.5 px-3 font-bangla">বিষয়বস্তু (বাংলা)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 0</td>
                    <td className="py-2.5 px-3 font-medium">Zero-to-Start Quick Bridge &amp; 20 Instant Phrases</td>
                    <td className="py-2.5 px-3 font-bangla">শূন্য থেকে শুরু ও প্রথম দিনের ২০টি জাদুকরী বাক্য</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 1</td>
                    <td className="py-2.5 px-3 font-medium">30 Core Rules for Daily English Communication</td>
                    <td className="py-2.5 px-3 font-bangla">প্রতিদিনের ইংরেজি কথোপকথনের ৩০টি সহজ নিয়ম</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 2</td>
                    <td className="py-2.5 px-3 font-medium">30 Common Sentence Structures (Ready Moulds)</td>
                    <td className="py-2.5 px-3 font-bangla">সবচেয়ে বেশি ব্যবহৃত ৩০টি বাক্য গঠন (স্ট্রাকচার)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 3</td>
                    <td className="py-2.5 px-3 font-medium">300 Power Words + 100 Verbs (V1, V2, V3 Forms)</td>
                    <td className="py-2.5 px-3 font-bangla">৩০০টি শব্দ ও ১০০টি ক্রিয়ার ৩টি রূপ (V1, V2, V3)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 4</td>
                    <td className="py-2.5 px-3 font-medium">Story-Based Learning System (Karim&apos;s Stories)</td>
                    <td className="py-2.5 px-3 font-bangla">গল্পের মাধ্যমে ইংরেজি শেখা (বাস্তব গল্প ও অনুশীলন)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Part 5</td>
                    <td className="py-2.5 px-3 font-medium">Self-Intro, 30-Day Tick Tracker &amp; Quick Fixes</td>
                    <td className="py-2.5 px-3 font-bangla">নিজের পরিচয়, ৩০ দিনের চার্ট, সাধারণ ভুল ও অঙ্গীকার</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">Bonus</td>
                    <td className="py-2.5 px-3 font-medium">Pronunciation Guide, 12 Tenses &amp; Workplace Writing</td>
                    <td className="py-2.5 px-3 font-bangla">সহজ উচ্চারণ কৌশল, ১২টি Tense ও অফিসিয়াল চিঠি/সিভি</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PART 0: ZERO-TO-START QUICK BRIDGE */}
        <section
          id="book-part0"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-6"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 0 · Absolute Beginner Starter
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              Zero-to-Start Quick Bridge
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              শূন্য থেকে শুরু: প্রথম দিনেই ইংরেজি বলার সহজ কৌশল
            </p>
          </div>

          <ThreeBoxOrderDiagram printStatic />

          {/* 3-Box Table matching Page 3 */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="book-navy-thead">
                  <th className="py-2.5 px-3 font-bangla">বাংলা বাক্য</th>
                  <th className="py-2.5 px-3">Box 1: কে? (Who)</th>
                  <th className="py-2.5 px-3">Box 2: কাজ (Action)</th>
                  <th className="py-2.5 px-3">Box 3: বাকি অংশ (Details)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                <tr>
                  <td className="py-2.5 px-3 font-bangla">আমি ইংরেজি শিখি।</td>
                  <td className="py-2.5 px-3 font-semibold">I (আমি)</td>
                  <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">learn (শিখি)</td>
                  <td className="py-2.5 px-3">English. (ইংরেজি)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bangla">সে মেশিন ঠিক করে।</td>
                  <td className="py-2.5 px-3 font-semibold">He (সে)</td>
                  <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">fixes (ঠিক করে)</td>
                  <td className="py-2.5 px-3">machines. (মেশিন)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bangla">আমরা ঢাকায় কাজ করি।</td>
                  <td className="py-2.5 px-3 font-semibold">We (আমরা)</td>
                  <td className="py-2.5 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">work (কাজ করি)</td>
                  <td className="py-2.5 px-3">in Dhaka. (ঢাকায়)</td>
                </tr>
                <tr className="bg-[#F4F8FC] dark:bg-[#132C49]">
                  <td className="py-2.5 px-3 font-bangla italic">নিজে লিখুন (আমি পানি পান করি):</td>
                  <td className="py-2.5 px-3 font-semibold">I</td>
                  <td className="py-2.5 px-3">__________________</td>
                  <td className="py-2.5 px-3">__________________</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 20 Instant Phrases — Clean, Zero IPA */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Day-1 Survival Kit: 20 Instant Phrases (প্রথম দিনের ২০টি জাদুকরী বাক্য)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="book-navy-thead">
                    <th className="py-2.5 px-3 w-10">#</th>
                    <th className="py-2.5 px-3">English Phrase</th>
                    <th className="py-2.5 px-3 font-bangla">সহজ বাংলা উচ্চারণ</th>
                    <th className="py-2.5 px-3 font-bangla">বাংলা অর্থ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                  {DAY_ONE_SURVIVAL_PHRASES.map((p) => (
                    <tr key={p.id}>
                      <td className="py-2 px-3 font-mono-tabular text-[#536B82]">{p.id}</td>
                      <td className="py-2 px-3 font-semibold text-[#0B2239] dark:text-white">{p.en}</td>
                      <td className="py-2 px-3 font-bangla text-[#0D7A78] dark:text-[#2DD4BF]">{p.pron}</td>
                      <td className="py-2 px-3 font-bangla">{p.bn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg border border-dashed border-[#0D7A78]/50 bg-[#F4F8FC] dark:bg-[#132C49] p-4 space-y-1.5 text-xs sm:text-sm">
            <p className="font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Day-1 Interactive Checkpoint (প্রথম দিনের কাজ — কলম দিয়ে টিক দিন)
            </p>
            <p className="font-bangla">
              ☐ I read all 20 phrases out loud 3 times. (আমি ২০টি বাক্য ৩ বার জোরে পড়েছি।)
            </p>
            <p className="font-bangla">
              ☐ I practiced greeting one friend or family member in English today. (আমি আজ একজনের সাথে ইংরেজিতে কুশল বিনিময় করেছি।)
            </p>
          </div>
        </section>

        {/* PART 1: 30 FUNDAMENTAL RULES (GROUPS A–E) */}
        <section
          id="book-part1"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-7"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 1 · Foundation
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              30 Fundamental Rules for Daily Communication
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              প্রতিদিনের ইংরেজি বাক্য তৈরির ৩০টি সহজ ও মূল নিয়ম (Group A – Group E)
            </p>
          </div>

          {RULE_GROUPS.map((grp) => {
            const grpRules = GOLDEN_RULES.filter((r) => r.category === grp.id);
            return (
              <div key={grp.id} className="space-y-3">
                <div className="rounded-lg bg-[#0B2847] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold">{grp.heading}</h3>
                  <span className="font-bangla text-xs text-[#F4B41A]">{grp.headingBn}</span>
                </div>

                <div className="space-y-3">
                  {grpRules.map((rule) => (
                    <div
                      key={rule.id}
                      className="book-avoid-break rounded-xl border border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC]/60 dark:bg-[#132C49] p-4 space-y-2"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-[#0B2239] dark:text-white">
                          Rule {rule.id}: {rule.titleEn}
                        </h4>
                        <span className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                          {rule.titleBn}
                        </span>
                      </div>
                      <p className="font-mono-tabular text-xs font-semibold text-[#0B2847] dark:text-[#F4B41A]">
                        Formula: {rule.formula}
                      </p>
                      <p className="font-bangla text-xs sm:text-sm text-[#334B61] dark:text-[#C5D5E4] leading-relaxed">
                        {rule.explanationBn}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-xs">
                        {rule.examples.map((ex, i) => (
                          <div
                            key={i}
                            className="rounded-lg bg-white dark:bg-[#0E223A] border border-[#DCE6F0] dark:border-[#1F3C5C] p-2.5 space-y-0.5"
                          >
                            <div className="font-semibold text-[#0B2239] dark:text-white">{ex.en}</div>
                            <div className="font-bangla text-[#0D7A78] dark:text-[#2DD4BF]">{ex.pron}</div>
                            <div className="font-bangla text-[#4B637A] dark:text-[#9FB8D0]">{ex.bn}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="book-avoid-break rounded-lg border border-dashed border-[#0D7A78]/50 bg-[#F4F8FC] dark:bg-[#132C49] p-4 space-y-2 text-xs sm:text-sm">
            <p className="font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 1 Mini Quiz — Test Yourself! (নিজেকে যাচাই করুন)
            </p>
            <p>
              1. I ______ (am / is) a skilled learner. &nbsp; 2. He ______ (work / works) in a
              factory. &nbsp; 3. I ______ (don&apos;t / doesn&apos;t) smoke. &nbsp; 4. Yesterday, I
              ______ (go / went) to the institute.
            </p>
            <p className="text-xs text-[#4B637A] dark:text-[#9FB8D0]">
              <em>Answers (উত্তর): 1. am | 2. works | 3. don&apos;t | 4. went</em>
            </p>
          </div>
        </section>

        {/* PART 2: 30 COMMON EVERYDAY SENTENCE STRUCTURES */}
        <section
          id="book-part2"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-6"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 2 · Ready-Made Patterns
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              30 Common Everyday Sentence Structures
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              প্রতিদিনের ব্যবহৃত ৩০টি কমন স্ট্রাকচার (বাক্য তৈরির ছাঁচ)
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="book-navy-thead">
                  <th className="py-2.5 px-3 w-10">#</th>
                  <th className="py-2.5 px-3">Structure Formula &amp; বাংলা অর্থ</th>
                  <th className="py-2.5 px-3">Practical Daily &amp; Workplace Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                {SENTENCE_STRUCTURES.map((st) => (
                  <tr key={st.id} className="book-avoid-break">
                    <td className="py-3 px-3 font-mono-tabular font-semibold text-[#0D7A78] dark:text-[#2DD4BF] align-top">
                      {st.id}
                    </td>
                    <td className="py-3 px-3 align-top">
                      <div className="font-bold text-[#0B2239] dark:text-white">{st.pattern}</div>
                      <div className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0] mt-0.5">
                        {st.meaningBn}
                      </div>
                    </td>
                    <td className="py-3 px-3 align-top space-y-1">
                      {st.examples.slice(0, 2).map((ex, idx) => (
                        <div key={idx}>
                          <span className="font-medium text-[#0B2239] dark:text-white">{ex.en}</span>{' '}
                          <span className="font-bangla text-xs text-[#4B637A] dark:text-[#9FB8D0]">
                            ({ex.bn})
                          </span>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PART 3: 300 ESSENTIAL POWER WORDS (CATEGORIES 1–7, ZERO IPA) */}
        <section
          id="book-part3"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 3 · Core Vocabulary &amp; 3 Forms of Verbs
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              The 300 Essential Power Words
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              উচ্চারণ, বাংলা অর্থ ও ক্রিয়ার ৩টি রূপ (V1–V2–V3) সহ ৩০০টি শব্দ
            </p>
          </div>

          {WORD_BOOK_GROUPS.map((group) => {
            const words = CORE_WORDS.filter((w) => w.category === group.cat);
            return (
              <div key={group.cat} className="space-y-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
                    {group.title}
                  </h3>
                  <p className="font-bangla text-xs text-[#0D7A78] dark:text-[#2DD4BF]">
                    {group.subtitleBn}
                  </p>
                </div>

                {group.isVerbTable ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="book-navy-thead">
                          <th className="py-2.5 px-2.5 w-10">#</th>
                          <th className="py-2.5 px-2.5">V1 (Present / বর্তমান)</th>
                          <th className="py-2.5 px-2.5">V2 (Past / অতীত)</th>
                          <th className="py-2.5 px-2.5">V3 (Past Participle)</th>
                          <th className="py-2.5 px-2.5 font-bangla">বাংলা অর্থ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                        {words.map((w) => (
                          <tr key={w.id}>
                            <td className="py-2 px-2.5 font-mono-tabular text-[#536B82]">{w.id}</td>
                            <td className="py-2 px-2.5">
                              <span className="font-bold text-[#0B2239] dark:text-white">{w.en}</span>{' '}
                              <span className="font-bangla text-[#0D7A78] dark:text-[#2DD4BF]">
                                ({w.pron})
                              </span>
                            </td>
                            <td className="py-2 px-2.5">
                              <span className="font-semibold">{w.verbForms?.v2}</span>{' '}
                              <span className="font-bangla text-[#536B82] dark:text-[#9FB8D0]">
                                ({w.verbForms?.v2Pron})
                              </span>
                            </td>
                            <td className="py-2 px-2.5">
                              <span className="font-semibold">{w.verbForms?.v3}</span>{' '}
                              <span className="font-bangla text-[#536B82] dark:text-[#9FB8D0]">
                                ({w.verbForms?.v3Pron})
                              </span>
                            </td>
                            <td className="py-2 px-2.5 font-bangla font-medium">{w.bn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="book-navy-thead">
                          <th className="py-2.5 px-2.5 w-10">#</th>
                          <th className="py-2.5 px-2.5">English Word</th>
                          <th className="py-2.5 px-2.5 font-bangla">বাংলা উচ্চারণ</th>
                          <th className="py-2.5 px-2.5 font-bangla">বাংলা অর্থ</th>
                          <th className="py-2.5 px-2.5">Example</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                        {words.map((w) => (
                          <tr key={w.id}>
                            <td className="py-2 px-2.5 font-mono-tabular text-[#536B82]">{w.id}</td>
                            <td className="py-2 px-2.5 font-bold text-[#0B2239] dark:text-white">{w.en}</td>
                            <td className="py-2 px-2.5 font-bangla text-[#0D7A78] dark:text-[#2DD4BF]">{w.pron}</td>
                            <td className="py-2 px-2.5 font-bangla font-medium">{w.bn}</td>
                            <td className="py-2 px-2.5 text-[#4B637A] dark:text-[#9FB8D0]">{w.exampleEn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* PART 4: STORY-BASED LEARNING (KARIM FROM BARISHAL + WORKPLACE STORIES) */}
        <section
          id="book-part4"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 4 · Story-Based Learning
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              Learn English Through Real-Life Stories
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              বাস্তব জীবনের গল্পের মাধ্যমে ইংরেজি শেখার পদ্ধতি
            </p>
          </div>

          {STORY_CHAPTERS.map((story) => (
            <div
              key={story.id}
              className="book-avoid-break rounded-xl border border-[#DCE6F0] dark:border-[#1F3C5C] p-5 space-y-4"
            >
              <div>
                <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                  {story.levelBn}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
                  {story.titleEn}
                </h3>
                <p className="font-bangla text-sm font-medium text-[#4B637A] dark:text-[#9FB8D0]">
                  {story.titleBn}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="book-navy-thead">
                      <th className="py-2 px-3 w-1/2">English Story (Read Out Loud)</th>
                      <th className="py-2 px-3 w-1/2 font-bangla">বাংলা অনুবাদ (অর্থ বুঝুন)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                    {story.lines.map((line, i) => (
                      <tr key={i}>
                        <td className="py-2.5 px-3 align-top">
                          <div className="font-medium text-[#0B2239] dark:text-white">{line.en}</div>
                          <div className="font-bangla text-[11px] text-[#0D7A78] dark:text-[#2DD4BF] mt-0.5">
                            {line.pron}
                          </div>
                        </td>
                        <td className="py-2.5 px-3 font-bangla align-top text-[#334B61] dark:text-[#C5D5E4]">
                          {line.bn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {story.keyStructuresNote && (
                <p className="text-xs font-medium text-[#0D7A78] dark:text-[#2DD4BF]">
                  {story.keyStructuresNote}
                </p>
              )}

              {story.speakWritePrompts && story.speakWritePrompts.length > 0 && (
                <div className="rounded-lg bg-[#F4F8FC] dark:bg-[#132C49] p-3.5 text-xs space-y-1">
                  <p className="font-bold text-[#0B2239] dark:text-white">
                    Speak &amp; Write Practice (নিজে লিখুন ও জোরে বলুন):
                  </p>
                  {story.speakWritePrompts.map((p, idx) => (
                    <p key={idx} className="font-mono-tabular">
                      {idx + 1}. {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* PART 5: 30-DAY ROADMAP, MISTAKES, SELF-INTRO, TRACKER & PLEDGE */}
        <section
          id="book-part5"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Part 5 · Action &amp; Mastery
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              30-Day Study Roadmap, Self-Intro &amp; Quick Fixes
            </h2>
            <p className="font-bangla text-sm text-[#4B637A] dark:text-[#9FB8D0] mt-1">
              ৩০ দিনের অনুশীলন পরিকল্পনা, সাধারণ ভুল, নিজের পরিচয় ও অঙ্গীকারনামা
            </p>
          </div>

          {/* Common Bangladeshi Mistakes */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Common Bangladeshi Mistakes &amp; Quick Fixes
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="book-navy-thead">
                    <th className="py-2.5 px-3">Common Mistake (ভুল)</th>
                    <th className="py-2.5 px-3">Correct English (সঠিক)</th>
                    <th className="py-2.5 px-3 font-bangla">Why? (কারণ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                  {COMMON_BD_MISTAKES.map((m) => (
                    <tr key={m.id}>
                      <td className="py-2 px-3 line-through text-[#9E2E22] dark:text-[#FB8D83]">
                        {m.wrongEn}
                      </td>
                      <td className="py-2 px-3 font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                        {m.correctEn}
                      </td>
                      <td className="py-2 px-3 font-bangla text-[#4B637A] dark:text-[#9FB8D0]">
                        {m.reasonBn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4-Week Self-Practice Plan */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Your 30-Day Self-Practice Plan (প্রতিদিন মাত্র ২০ মিনিট)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="book-navy-thead">
                    <th className="py-2.5 px-3 w-36">Week</th>
                    <th className="py-2.5 px-3">Daily Goal</th>
                    <th className="py-2.5 px-3">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                  {ROADMAP_WEEKS.map((w) => (
                    <tr key={w.week}>
                      <td className="py-2.5 px-3 font-bold text-[#0B2239] dark:text-white">{w.week}</td>
                      <td className="py-2.5 px-3">{w.goal}</td>
                      <td className="py-2.5 px-3 text-[#4B637A] dark:text-[#9FB8D0]">{w.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ready-Made Self-Introduction */}
          <div className="book-avoid-break rounded-xl border border-dashed border-[#0D7A78]/50 bg-[#F4F8FC] dark:bg-[#132C49] p-5 space-y-2 text-xs sm:text-sm">
            <h3 className="font-display text-base font-bold text-[#0D7A78] dark:text-[#2DD4BF]">
              My Ready-Made Self-Introduction (নিজের পরিচয় দেওয়ার রেডিমেড ছক)
            </h3>
            <p>1. Good morning, Sir. My name is ______________________________________.</p>
            <p>2. I am from __________________________ (District / Village).</p>
            <p>3. I completed my vocational training in __________________________ (Trade / Skill).</p>
            <p>4. I know how to ______________________________________________________.</p>
            <p>5. I am hard-working, honest, and always on time.</p>
            <p>6. Thank you for giving me this chance, Sir!</p>
          </div>

          {/* 30-Day Tick Tracker */}
          <div className="book-avoid-break space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Interactive 30-Day Progress Tracker (প্রতিদিন শেষে টিক ✓ দিন)
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-2 text-xs">
              {plan.map((item) => (
                <div
                  key={item.day}
                  className="rounded-lg border border-[#C8D6E3] dark:border-[#244466] px-3 py-2 font-mono-tabular font-semibold"
                >
                  ☐ Day {item.day}
                </div>
              ))}
            </div>
          </div>

          {/* Learner's Commitment Pledge & Trainee Sign-Off */}
          <div className="book-avoid-break rounded-xl border-2 border-[#0B2847] dark:border-[#244E7C] p-5 space-y-4">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              Learner&apos;s Commitment Pledge (শিক্ষার্থীর অঙ্গীকারনামা)
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              I promise to practice English for at least 20 minutes every day without fear or
              shame. I will learn my trade with honesty, respect safety rules, and transform myself
              into skilled, confident manpower for my family and my country.
            </p>
            <p className="font-bangla text-xs sm:text-sm text-[#4B637A] dark:text-[#9FB8D0] leading-relaxed">
              আমি শপথ করছি যে কোনো ভয় বা লজ্জা ছাড়াই প্রতিদিন অন্তত ২০ মিনিট ইংরেজি অনুশীলন করব।
              আমি সততার সাথে আমার কাজ শিখব এবং নিজেকে পরিবার ও দেশের জন্য একজন দক্ষ ও আত্মবিশ্বাসী
              মানুষ হিসেবে গড়ে তুলব।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#D7E2EC] dark:border-[#1F3C5C] text-xs">
              <div>
                <span className="font-semibold">Trainee Name (শিক্ষার্থীর নাম):</span>
                <div className="mt-5 border-b border-[#0B2239] dark:border-[#9FB8D0]" />
              </div>
              <div>
                <span className="font-semibold">Trade / Course (ট্রেড / কোর্স):</span>
                <div className="mt-5 border-b border-[#0B2239] dark:border-[#9FB8D0]" />
              </div>
              <div>
                <span className="font-semibold">Start Date (শুরুর তারিখ):</span>
                <div className="mt-5 border-b border-[#0B2239] dark:border-[#9FB8D0]" />
              </div>
              <div>
                <span className="font-semibold">Trainee Signature (স্বাক্ষর):</span>
                <div className="mt-5 border-b border-[#0B2239] dark:border-[#9FB8D0]" />
              </div>
            </div>
          </div>
        </section>

        {/* BONUS GUIDE: PRONUNCIATION TIPS, 12 TENSES & WORKPLACE WRITING (ZERO IPA) */}
        <section
          id="book-bonus"
          className="book-page-break studio-card rounded-xl p-6 sm:p-10 space-y-8"
        >
          <div className="border-b border-[#E4ECF4] dark:border-[#1B3552] pb-4">
            <p className="text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
              Bonus Guide · Speaking, Tenses &amp; Writing
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B2239] dark:text-white mt-0.5">
              Pronunciation Tips, 12 Tenses &amp; Workplace Writing
            </h2>
          </div>

          {/* 8 Simple Pronunciation Tips (Zero IPA) */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              1. Easy Pronunciation Tips for Bangla Speakers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {PRONUNCIATION_GUIDE.map((item) => (
                <div
                  key={item.id}
                  className="book-avoid-break rounded-lg border border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49] p-3.5 space-y-1"
                >
                  <div className="font-bold text-[#0B2239] dark:text-white">{item.soundLabel}</div>
                  <div className="font-bangla font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                    {item.banglaCue}
                  </div>
                  <div className="font-bangla text-[#4B637A] dark:text-[#9FB8D0]">
                    {item.sampleWords.map((s) => `${s.en} (${s.pron})`).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 12 Tenses Chart (Zero IPA) */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              2. Complete 12 English Tenses Master Chart
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="book-navy-thead">
                    <th className="py-2.5 px-2.5">Tense</th>
                    <th className="py-2.5 px-2.5">Formula</th>
                    <th className="py-2.5 px-2.5">Example &amp; বাংলা অর্থ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4ECF4] dark:divide-[#1B3552]">
                  {TWELVE_TENSES.map((t) => (
                    <tr key={t.id}>
                      <td className="py-2 px-2.5 align-top">
                        <div className="font-bold text-[#0B2239] dark:text-white">{t.nameEn}</div>
                        <div className="font-bangla text-[11px] text-[#0D7A78] dark:text-[#2DD4BF]">
                          {t.nameBn}
                        </div>
                      </td>
                      <td className="py-2 px-2.5 font-mono-tabular align-top">{t.formula}</td>
                      <td className="py-2 px-2.5 align-top">
                        <div className="font-semibold">{t.exampleEn}</div>
                        <div className="font-bangla text-[#4B637A] dark:text-[#9FB8D0]">
                          {t.examplePron} — {t.exampleBn}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Intermediate Grammar Summary */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              3. Intermediate Workplace Grammar Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {INTERMEDIATE_TOPICS.map((topic) => (
                <div
                  key={topic.id}
                  className="book-avoid-break rounded-lg border border-[#DCE6F0] dark:border-[#1F3C5C] p-3.5 space-y-1"
                >
                  <div className="font-bold text-[#0B2239] dark:text-white">{topic.titleEn}</div>
                  <div className="font-mono-tabular text-[#0D7A78] dark:text-[#2DD4BF]">{topic.formula}</div>
                  <div className="font-bangla text-[#4B637A] dark:text-[#9FB8D0]">{topic.explanationBn}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Workplace Writing Templates */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
              4. Workplace Writing &amp; Vocational CV Templates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {WRITING_TEMPLATES.map((tpl) => (
                <div
                  key={tpl.id}
                  className="book-avoid-break rounded-lg border border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49] p-4 space-y-2"
                >
                  <div className="font-bold text-[#0B2239] dark:text-white">{tpl.titleEn}</div>
                  <pre className="whitespace-pre-wrap font-sans text-[11px] leading-relaxed text-[#2B4359] dark:text-[#DCE9F5]">
                    {tpl.bodyEn}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BACK COVER */}
        <section id="book-back-cover" className="book-page-break flex justify-center py-2">
          <div className="w-full max-w-[540px]">
            <BackCoverCard />
          </div>
        </section>
      </div>
    </div>
  );
}
