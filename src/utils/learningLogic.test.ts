import test from 'node:test';
import assert from 'node:assert/strict';
import { GOLDEN_RULES } from '../data/rules';
import { SENTENCE_STRUCTURES } from '../data/structures';
import { CORE_WORDS, WORD_CATEGORIES } from '../data/words';
import { PRONUNCIATION_GUIDE, STORY_CHAPTERS } from '../data/stories';
import {
  DAY_ONE_SURVIVAL_PHRASES,
  TWELVE_TENSES,
  INTERMEDIATE_TOPICS,
  WRITING_TEMPLATES,
  COMMON_BD_MISTAKES,
} from '../data/grammarDepth';
import { getWordIpa } from '../data/wordIpa';
import {
  assembleStructureSentence,
  buildAudioLessonUrl,
  buildSelfIntroduction,
  calculateProgressStats,
  DEFAULT_PROGRESS,
  filterWords,
  generate30DayPlan,
  loadTheme,
  parseDeepLinkParams,
  THEME_STORAGE_KEY,
  toggleDailyTask,
  toggleNumberInList,
} from './learningLogic';

test('3rd Edition PDF 1-to-1 alignment: 30 Rules (Groups A–E), 30 Structures, 300 Words (Cat. 1–7) & Karim Stories', () => {
  // 30 Rules across exact Groups A–E
  assert.equal(GOLDEN_RULES.length, 30, 'Must contain exactly 30 Fundamental Rules');
  const ruleGroups = [
    'Group A: Foundation',
    'Group B: Daily & Time',
    'Group C: Ability & Politeness',
    'Group D: Questions & Details',
    'Group E: Connecting Ideas',
  ];
  for (const grp of ruleGroups) {
    assert.equal(
      GOLDEN_RULES.filter((r) => r.category === grp).length,
      6,
      `Group "${grp}" must contain exactly 6 rules`
    );
  }
  assert.ok(GOLDEN_RULES[0].titleEn.includes('S + V + O'), 'Rule 1 must be S + V + O order');
  assert.ok(GOLDEN_RULES[0].formula.includes('Subject') && GOLDEN_RULES[0].formula.includes('Verb'));
  assert.equal(GOLDEN_RULES[29].id, 30);

  // 30 Common Everyday Sentence Structures
  assert.equal(SENTENCE_STRUCTURES.length, 30, 'Must contain exactly 30 Sentence Structures');
  assert.ok(SENTENCE_STRUCTURES[2].pattern.includes('I want to'), 'Structure #3 must be I want to + Verb');
  assert.ok(SENTENCE_STRUCTURES[29].pattern.includes('I am good at'), 'Structure #30 must be I am good at...');

  // 300 Power Words across exact Categories 1–7 with PDF bugs mitigated
  assert.equal(CORE_WORDS.length, 300, 'Must contain exactly 300 Core Power Words');
  assert.equal(WORD_CATEGORIES.length, 8, 'WORD_CATEGORIES must have All + 7 exact PDF categories');

  const uniqueIds = new Set(CORE_WORDS.map((w) => w.id));
  assert.equal(uniqueIds.size, 300, 'All 300 words must have unique IDs');

  // Fix 1: Restored Category 1 (Words #1–#30) with exact #15 Everyone & #30 Doctor slots
  assert.equal(CORE_WORDS[0].en, 'I');
  assert.equal(CORE_WORDS[14].id, 15);
  assert.equal(CORE_WORDS[14].en, 'Everyone');
  assert.equal(CORE_WORDS[29].id, 30);
  assert.equal(CORE_WORDS[29].en, 'Doctor');

  // Category 2 (60 Daily Verbs #31–#90) + Category 3 (40 Workplace Verbs #91–#130) = 100 V1–V3 Verbs
  const dailyVerbs = CORE_WORDS.filter((w) => w.category === 'Daily Verbs (V1–V3)');
  const workplaceVerbs = CORE_WORDS.filter((w) => w.category === 'Workplace Verbs (V1–V3)');
  assert.equal(dailyVerbs.length, 60, 'Category 2 must contain 60 Daily Verbs');
  assert.equal(workplaceVerbs.length, 40, 'Category 3 must contain 40 Workplace Verbs');
  assert.equal(dailyVerbs[0].id, 31);
  assert.equal(dailyVerbs[59].id, 90);
  assert.equal(workplaceVerbs[0].id, 91);
  assert.equal(workplaceVerbs[39].id, 130);

  const verbs = CORE_WORDS.filter((w) => w.verbForms);
  assert.equal(verbs.length, 100, 'Must contain 100 verbs with full V1/V2/V3 forms');
  for (const verb of verbs) {
    assert.ok(verb.verbForms?.v1 && verb.verbForms?.v2 && verb.verbForms?.v3, `Verb ${verb.en} missing V1/V2/V3`);
    assert.ok(
      verb.verbForms?.v1Pron && verb.verbForms?.v2Pron && verb.verbForms?.v3Pron,
      `Verb ${verb.en} missing Bangla pronunciations`
    );
  }

  // Fix 3: #273 City / Village cleanly inline between #272 Hospital & #274 Problem
  assert.equal(CORE_WORDS[271].en, 'Hospital');
  assert.equal(CORE_WORDS[272].id, 273);
  assert.equal(CORE_WORDS[272].en, 'City / Village');
  assert.equal(CORE_WORDS[273].en, 'Problem');
  assert.equal(CORE_WORDS[299].en, 'Country');

  // Karim from Barishal's exact 4 stories + 2 Bonus stories
  assert.equal(STORY_CHAPTERS.length, 6, 'Must contain 4 core Karim stories + 2 bonus stories');
  assert.ok(STORY_CHAPTERS[0].lines[0].en.includes('Barishal'), 'Story 1 must feature Karim from Barishal');
  assert.ok(STORY_CHAPTERS[1].titleEn.includes('Safety and Tools'), 'Story 2 must be Safety and Tools in the Workshop');
  assert.ok(STORY_CHAPTERS[2].titleEn.includes('Job Interview'), 'Story 3 must be The Job Interview');
  assert.ok(STORY_CHAPTERS[3].titleEn.includes('Foreign Supervisor'), 'Story 4 must be Helping a Foreign Supervisor');
  for (const story of STORY_CHAPTERS) {
    assert.ok(story.keyStructuresNote, `Story ${story.id} missing keyStructuresNote`);
    assert.ok(story.speakWritePrompts && story.speakWritePrompts.length >= 2, `Story ${story.id} missing speakWritePrompts`);
  }
});

test('4th Edition expanded datasets (IPA, Day-1 Kit, 12 Tenses, Writing, Intermediate, BD Mistakes) are complete', () => {
  assert.equal(DAY_ONE_SURVIVAL_PHRASES.length, 20, 'Must contain 20 Day-1 survival phrases');
  for (const phrase of DAY_ONE_SURVIVAL_PHRASES) {
    assert.ok(phrase.ipa.startsWith('/'), `Day-1 phrase ${phrase.id} missing IPA`);
  }

  assert.equal(TWELVE_TENSES.length, 12, 'Must contain all 12 English tenses');
  assert.equal(INTERMEDIATE_TOPICS.length, 5, 'Must contain 5 intermediate grammar topics');
  assert.equal(WRITING_TEMPLATES.length, 4, 'Must contain 4 workplace writing templates');
  assert.equal(COMMON_BD_MISTAKES.length, 10, 'Must contain 10 common Bangladeshi mistake quick fixes');
  assert.ok(PRONUNCIATION_GUIDE.length >= 8, 'Must include 8 pronunciation traps');

  for (const word of CORE_WORDS) {
    const ipa = getWordIpa(word.id);
    assert.ok(ipa.startsWith('/') && ipa.endsWith('/'), `Word #${word.id} (${word.en}) missing valid IPA`);
  }
});

test('self-introduction builder, theme persistence fallback, and QR audio deep-link helpers work accurately', () => {
  assert.equal(THEME_STORAGE_KEY, 'edifice_english_theme_v1');
  assert.equal(loadTheme(), 'light', 'SSR/Node fallback theme must default cleanly to light');

  const intro = buildSelfIntroduction({
    name: 'Karim Mia',
    district: 'Barishal',
    trade: 'Electrical Technician',
    skill: 'do house wiring and repair motors safely',
  });
  assert.ok(intro.en.includes('My name is Karim Mia.'));
  assert.ok(intro.en.includes('from Barishal'));
  assert.ok(intro.en.includes('Electrical Technician'));

  const url = buildAudioLessonUrl('http://localhost:3000/', {
    tab: 'rules',
    sub: 'tenses',
    id: 4,
  });
  assert.equal(url, 'http://localhost:3000/?tab=rules&sub=tenses&id=4');

  const parsed = parseDeepLinkParams('?tab=rules&sub=tenses&id=4');
  assert.deepEqual(parsed, { tab: 'rules', sub: 'tenses', id: 4 });

  const fallback = parseDeepLinkParams('?tab=invalid&sub=nope&id=-5');
  assert.deepEqual(fallback, { tab: 'home', sub: 'rules', id: undefined });
});

test('30-day roadmap maps cleanly across all 30 days and 300 words', () => {
  const plan = generate30DayPlan();
  assert.equal(plan.length, 30);
  assert.equal(plan[0].wordRangeStart, 1);
  assert.equal(plan[0].wordRangeEnd, 10);
  assert.equal(plan[29].wordRangeStart, 291);
  assert.equal(plan[29].wordRangeEnd, 300);
  assert.equal(plan[0].storyId, 1);
  assert.equal(plan[10].storyId, 2);
  assert.equal(plan[18].storyId, 3);
  assert.equal(plan[23].storyId, 4);
});

test('bilingual search and verb filtering work accurately', () => {
  const verbsOnly = filterWords(CORE_WORDS, { category: 'All', query: '', verbsOnly: true });
  assert.equal(verbsOnly.length, 100);

  const byPastForm = filterWords(CORE_WORDS, { category: 'All', query: 'went' });
  assert.ok(byPastForm.some((w) => w.en === 'Go'), 'Should match Go by its V2 form "went"');

  const byBangla = filterWords(CORE_WORDS, { category: 'All', query: 'নিরাপত্তা' });
  assert.ok(byBangla.length >= 1, 'Should match words by Bangla meaning');

  const cat1 = filterWords(CORE_WORDS, { category: 'People & Pronouns', query: '' });
  assert.equal(cat1.length, 30);
});

test('interactive sentence builder assembles valid English, Bangla pronunciation, and Bangla translation', () => {
  const struct = SENTENCE_STRUCTURES[2]; // #3 I want to + Verb
  const built = assembleStructureSentence(struct, 0);
  assert.ok(built.en.startsWith('I want to '));
  assert.ok(built.pron.includes('আই ওয়ান্ট টু'));
  assert.ok(built.bn.includes('আমি'));

  const questionStruct = SENTENCE_STRUCTURES[26]; // #27 Could you please + Verb?
  const builtQ = assembleStructureSentence(questionStruct, 0);
  assert.ok(builtQ.en.startsWith('Could you please '));
  assert.ok(builtQ.en.endsWith('?'));
});

test('progress toggle and daily tracker completion compute stats and streaks accurately', () => {
  let progress = { ...DEFAULT_PROGRESS };
  progress = {
    ...progress,
    masteredRules: toggleNumberInList(progress.masteredRules, 1),
    learnedWords: [1, 2, 3, 4, 5],
  };

  progress = toggleDailyTask(progress, 1, 'rule');
  progress = toggleDailyTask(progress, 1, 'structure');
  progress = toggleDailyTask(progress, 1, 'words');
  assert.equal(progress.completedDays.length, 0);

  progress = toggleDailyTask(progress, 1, 'speaking');
  assert.deepEqual(progress.completedDays, [1]);

  const stats = calculateProgressStats(progress);
  assert.equal(stats.completedDaysCount, 1);
  assert.equal(stats.currentStreak, 1);
  assert.equal(stats.recommendedDay, 2);
  assert.equal(stats.totalMasteredItems, 6);
  assert.ok(stats.overallPercent >= 3, 'Completing Day 1 should immediately show visible overall percentage');
});
