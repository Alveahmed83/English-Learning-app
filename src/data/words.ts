import { CoreWord, WordCategory } from '../types/book';
import { WORDS_PART_1 } from './wordsPart1';
import { WORDS_PART_2 } from './wordsPart2';

export const CORE_WORDS: CoreWord[] = [...WORDS_PART_1, ...WORDS_PART_2];

export const WORD_CATEGORIES: { id: WordCategory | 'All'; labelEn: string; labelBn: string }[] = [
  { id: 'All', labelEn: 'All 300 Words', labelBn: 'সব ৩০০ শব্দ' },
  { id: 'People & Pronouns', labelEn: '1. People (1–30)', labelBn: 'মানুষ ও সর্বনাম' },
  { id: 'Daily Verbs (V1–V3)', labelEn: '2. Daily Verbs (31–90)', labelBn: '৬০টি দৈনন্দিন Verb' },
  { id: 'Workplace Verbs (V1–V3)', labelEn: '3. Workplace Verbs (91–130)', labelBn: '৪০টি কাজের Verb' },
  { id: 'Questions & Connectors', labelEn: '4. Questions & Links (131–170)', labelBn: 'প্রশ্ন ও সংযোগ' },
  { id: 'Describing Words', labelEn: '5. Describing (171–215)', labelBn: 'বিশেষণ' },
  { id: 'Time & Quantity', labelEn: '6. Time & Quantity (216–245)', labelBn: 'সময় ও পরিমাণ' },
  { id: 'Workplace & Nouns', labelEn: '7. Workplace & Nouns (246–300)', labelBn: 'কর্মক্ষেত্র ও বস্তু' },
];
