import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { TenseItem } from '../types/book';
import { speakEnglish, SpeechSpeed } from '../utils/speech';

// 1. Part 0: Interactive SVG 3-Box Sentence Order Diagram (Bangla SOV -> English SVO, Zero IPA)
interface ThreeBoxExample {
  id: string;
  label: string;
  bnSubj: string;
  bnObj: string;
  bnVerb: string;
  enSubj: string;
  enVerb: string;
  enObj: string;
  pron: string;
}

const THREE_BOX_EXAMPLES: ThreeBoxExample[] = [
  {
    id: 'eat-rice',
    label: 'Daily Life',
    bnSubj: 'আমি',
    bnObj: 'ভাত',
    bnVerb: 'খাই',
    enSubj: 'I',
    enVerb: 'eat',
    enObj: 'rice',
    pron: 'আই ইট রাইস।',
  },
  {
    id: 'repair-motor',
    label: 'Workshop',
    bnSubj: 'আমি',
    bnObj: 'মোটরটি',
    bnVerb: 'মেরামত করি',
    enSubj: 'I',
    enVerb: 'repair',
    enObj: 'the motor',
    pron: 'আই রিপেয়ার দা মোটর।',
  },
  {
    id: 'wear-helmet',
    label: 'Safety',
    bnSubj: 'আমরা',
    bnObj: 'হেলমেট',
    bnVerb: 'পরি',
    enSubj: 'We',
    enVerb: 'wear',
    enObj: 'helmets',
    pron: 'উই ওয়্যার হেলমেটস।',
  },
  {
    id: 'check-voltage',
    label: 'Electrical',
    bnSubj: 'সে',
    bnObj: 'ভোল্টেজ',
    bnVerb: 'পরীক্ষা করে',
    enSubj: 'He',
    enVerb: 'checks',
    enObj: 'voltage',
    pron: 'হি চেকস ভোল্টেজ।',
  },
];

export function ThreeBoxOrderDiagram({
  speechSpeed,
  printStatic = false,
}: {
  speechSpeed?: SpeechSpeed;
  printStatic?: boolean;
}) {
  const [selectedId, setSelectedId] = useState<string>(THREE_BOX_EXAMPLES[0].id);
  const current =
    THREE_BOX_EXAMPLES.find((ex) => ex.id === selectedId) ?? THREE_BOX_EXAMPLES[0];
  const fullSentence = `${current.enSubj} ${current.enVerb} ${current.enObj}.`;

  return (
    <div className="studio-card rounded-xl p-5 sm:p-6 space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            বাংলা থেকে ইংরেজি বাক্যের ক্রম (3-Box Sentence Switch)
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
            Bangla (Who + What + Action) → English (Who + Action + What)
          </h3>
        </div>

        {!printStatic && (
          <div
            role="group"
            aria-label="Choose 3-box sentence example"
            className="flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#132C49] p-1 rounded-lg"
          >
            {THREE_BOX_EXAMPLES.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => setSelectedId(ex.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  ex.id === selectedId
                    ? 'bg-white dark:bg-[#0B2847] text-[#0B2239] dark:text-white shadow-sm'
                    : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Custom SVG Diagram Harmonized with Navy + Teal + Gold Palette */}
      <div className="svg-plate w-full overflow-x-auto rounded-xl border border-[#DCE6F0] p-2 bg-white">
        <svg
          viewBox="0 0 760 235"
          role="img"
          aria-label={`Sentence order diagram showing Bangla ${current.bnSubj} ${current.bnObj} ${current.bnVerb} transforming into English ${fullSentence}`}
          className="w-full min-w-[540px] h-auto"
        >
          <defs>
            <marker
              id="arrow-teal"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#0D7A78" />
            </marker>
            <marker
              id="arrow-gold"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#C98A0C" />
            </marker>
          </defs>

          <text x="16" y="22" fill="#4B637A" fontSize="12" fontWeight="600">
            BANGLA ORDER (কাজ শেষে বসে)
          </text>

          <rect x="16" y="32" width="218" height="58" rx="10" fill="#F4F8FC" stroke="#C8D6E3" strokeWidth="1.5" />
          <text x="125" y="53" textAnchor="middle" fill="#4B637A" fontSize="11" fontWeight="600">
            1. WHO (কর্তা)
          </text>
          <text x="125" y="76" textAnchor="middle" fill="#0B2239" fontSize="17" fontWeight="700">
            {current.bnSubj}
          </text>

          <rect x="270" y="32" width="218" height="58" rx="10" fill="#FEF8E7" stroke="#E8C66B" strokeWidth="1.5" />
          <text x="379" y="53" textAnchor="middle" fill="#8A5E08" fontSize="11" fontWeight="600">
            2. WHAT / DETAILS (বিস্তারিত)
          </text>
          <text x="379" y="76" textAnchor="middle" fill="#5C3F05" fontSize="17" fontWeight="700">
            {current.bnObj}
          </text>

          <rect x="524" y="32" width="220" height="58" rx="10" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="1.5" />
          <text x="634" y="53" textAnchor="middle" fill="#0D7A78" fontSize="11" fontWeight="600">
            3. ACTION (কাজ / Verb)
          </text>
          <text x="634" y="76" textAnchor="middle" fill="#0B2239" fontSize="17" fontWeight="700">
            {current.bnVerb}
          </text>

          <path d="M 125 92 L 125 144" stroke="#4B637A" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#arrow-teal)" />
          <path
            d="M 634 92 C 634 128, 379 108, 379 144"
            fill="none"
            stroke="#0D7A78"
            strokeWidth="2.5"
            markerEnd="url(#arrow-teal)"
          />
          <path
            d="M 379 92 C 379 126, 634 112, 634 144"
            fill="none"
            stroke="#C98A0C"
            strokeWidth="2"
            strokeDasharray="5 3"
            markerEnd="url(#arrow-gold)"
          />

          <text x="16" y="140" fill="#0B2847" fontSize="12" fontWeight="700">
            ENGLISH 3-BOX ORDER (Action সবসময় ২ নম্বর ঘরে!)
          </text>

          <rect x="16" y="150" width="218" height="68" rx="10" fill="#0B2847" />
          <text x="125" y="172" textAnchor="middle" fill="#C4D7EA" fontSize="11" fontWeight="600">
            BOX 1 · WHO (Subject)
          </text>
          <text x="125" y="200" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700">
            {current.enSubj}
          </text>

          <rect x="270" y="150" width="218" height="68" rx="10" fill="#0D7A78" />
          <text x="379" y="172" textAnchor="middle" fill="#D5F3F1" fontSize="11" fontWeight="600">
            BOX 2 · ACTION (Verb)
          </text>
          <text x="379" y="200" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="700">
            {current.enVerb}
          </text>

          <rect x="524" y="150" width="220" height="68" rx="10" fill="#FEF6DF" stroke="#E5A91A" strokeWidth="1.5" />
          <text x="634" y="172" textAnchor="middle" fill="#8A5E08" fontSize="11" fontWeight="600">
            BOX 3 · DETAILS (Object)
          </text>
          <text x="634" y="200" textAnchor="middle" fill="#0B2239" fontSize="20" fontWeight="700">
            {current.enObj}
          </text>
        </svg>
      </div>

      {/* Assembled Audio Readout (Zero IPA) */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#F4F8FC] dark:bg-[#132C49] border border-[#DCE6F0] dark:border-[#1F3C5C] px-4 py-3">
        <div className="space-y-0.5">
          <span className="text-base sm:text-lg font-bold text-[#0B2239] dark:text-white">
            {fullSentence}
          </span>
          <p className="font-bangla text-xs sm:text-sm text-[#0D7A78] dark:text-[#2DD4BF]">
            উচ্চারণ: {current.pron}
          </p>
        </div>

        {!printStatic && speechSpeed && (
          <button
            type="button"
            onClick={() => speakEnglish(fullSentence, speechSpeed)}
            aria-label={`Listen to ${fullSentence}`}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#0D7A78] px-4 text-xs sm:text-sm font-semibold text-white hover:bg-[#0A6361] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Volume2 className="h-4 w-4" aria-hidden="true" />
            <span>Listen</span>
          </button>
        )}
      </div>
    </div>
  );
}

// 2. Interactive SVG 12-Tense Visual Timeline Diagram
interface TenseTimelineDiagramProps {
  tenses: TenseItem[];
  activeTenseId: string;
  onSelectTense: (tenseId: string) => void;
}

const TIMELINE_COORDS: Record<string, { x: number; y: number; short: string }> = {
  'past-perfect-continuous': { x: 68, y: 124, short: 'Past Perf Cont' },
  'past-perfect': { x: 138, y: 66, short: 'Past Perfect' },
  'past-continuous': { x: 208, y: 124, short: 'Past Cont' },
  'past-simple': { x: 274, y: 66, short: 'Past Simple' },

  'present-perfect-continuous': { x: 356, y: 124, short: 'Pres Perf Cont' },
  'present-perfect': { x: 384, y: 66, short: 'Pres Perfect' },
  'present-simple': { x: 472, y: 66, short: 'Pres Simple' },
  'present-continuous': { x: 472, y: 124, short: 'NOW (Cont)' },

  'future-simple': { x: 562, y: 66, short: 'Future Simple' },
  'future-continuous': { x: 620, y: 124, short: 'Future Cont' },
  'future-perfect': { x: 684, y: 66, short: 'Future Perf' },
  'future-perfect-continuous': { x: 738, y: 124, short: 'Fut Perf Cont' },
};

export function TenseTimelineDiagram({
  tenses,
  activeTenseId,
  onSelectTense,
}: TenseTimelineDiagramProps) {
  const active = tenses.find((t) => t.id === activeTenseId) ?? tenses[0];

  return (
    <div className="studio-card rounded-xl p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            সময়রেখায় ক্লিক করে যেকোনো Tense দেখুন
          </p>
          <h3 className="font-display text-lg font-bold text-[#0B2239] dark:text-white">
            Visual 12-Tense Map (Past ← NOW → Future)
          </h3>
        </div>
        <div className="text-xs font-mono-tabular text-[#0D7A78] dark:text-[#2DD4BF] font-semibold">
          Selected: {active.nameEn}
        </div>
      </div>

      <div className="svg-plate w-full overflow-x-auto rounded-xl border border-[#DCE6F0] p-2 bg-white">
        <svg
          viewBox="0 0 800 185"
          role="img"
          aria-label="Visual timeline mapping all 12 English tenses across Past, Present Now, and Future"
          className="w-full min-w-[600px] h-auto"
        >
          <rect x="20" y="14" width="292" height="156" rx="10" fill="#F4F8FC" />
          <rect x="324" y="14" width="188" height="156" rx="10" fill="#E6F5F4" stroke="#B6DFDC" />
          <rect x="524" y="14" width="256" height="156" rx="10" fill="#FEF8E7" />

          <text x="166" y="34" textAnchor="middle" fill="#4B637A" fontSize="12" fontWeight="700">
            PAST (অতীত)
          </text>
          <text x="418" y="34" textAnchor="middle" fill="#0D7A78" fontSize="12" fontWeight="700">
            PRESENT · NOW (বর্তমান)
          </text>
          <text x="652" y="34" textAnchor="middle" fill="#8A5E08" fontSize="12" fontWeight="700">
            FUTURE (ভবিষ্যৎ)
          </text>

          <line x1="36" y1="94" x2="764" y2="94" stroke="#9AB0C4" strokeWidth="2.5" />
          <line x1="472" y1="42" x2="472" y2="160" stroke="#0D7A78" strokeWidth="2" strokeDasharray="4 3" />

          {tenses.map((t) => {
            const coord = TIMELINE_COORDS[t.id];
            if (!coord) return null;
            const isSelected = t.id === activeTenseId;
            return (
              <g
                key={t.id}
                onClick={() => onSelectTense(t.id)}
                className="cursor-pointer outline-none focus:outline-none"
                role="button"
                tabIndex={0}
                aria-label={`Select ${t.nameEn}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectTense(t.id);
                  }
                }}
              >
                <line
                  x1={coord.x}
                  y1={94}
                  x2={coord.x}
                  y2={coord.y}
                  stroke={isSelected ? '#0D7A78' : '#B4C6D7'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />
                {isSelected && (
                  <circle cx={coord.x} cy={coord.y} r={14} fill="#0D7A78" fillOpacity="0.18" />
                )}
                <circle
                  cx={coord.x}
                  cy={coord.y}
                  r={isSelected ? 9 : 7}
                  fill={isSelected ? '#0D7A78' : '#FFFFFF'}
                  stroke={isSelected ? '#0B2847' : '#0D7A78'}
                  strokeWidth="2.5"
                />
                <text
                  x={coord.x}
                  y={coord.y < 94 ? coord.y - 14 : coord.y + 22}
                  textAnchor="middle"
                  fill={isSelected ? '#0B2239' : '#3E556B'}
                  fontSize="10"
                  fontWeight={isSelected ? '700' : '500'}
                >
                  {coord.short}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

// 3. Visual Preposition Diagram Grid (Zero IPA)
interface PrepositionVisual {
  word: string;
  pron: string;
  bn: string;
  exampleEn: string;
  type: 'in' | 'on' | 'at' | 'under' | 'over' | 'near';
}

const PREPOSITIONS: PrepositionVisual[] = [
  { word: 'IN', pron: 'ইন', bn: 'ভেতরে', exampleEn: 'The tool is in the box.', type: 'in' },
  { word: 'ON', pron: 'অন', bn: 'ওপরে (লেগে আছে)', exampleEn: 'The helmet is on the table.', type: 'on' },
  { word: 'AT', pron: 'অ্যাট', bn: 'নির্দিষ্ট স্থানে', exampleEn: 'Meet me at the gate.', type: 'at' },
  { word: 'UNDER', pron: 'আন্ডার', bn: 'নিচে', exampleEn: 'The cable is under the desk.', type: 'under' },
  { word: 'OVER', pron: 'ওভার', bn: 'ওপর দিয়ে (না ছুঁয়ে)', exampleEn: 'The fan is over the bed.', type: 'over' },
  { word: 'NEAR', pron: 'নিয়ার', bn: 'কাছে / পাশে', exampleEn: 'The switch is near the door.', type: 'near' },
];

function PrepositionIcon({ type }: { type: PrepositionVisual['type'] }) {
  return (
    <svg viewBox="0 0 120 76" className="svg-plate w-full h-16 rounded-lg border border-[#DCE6F0] bg-white" aria-hidden="true">
      {type === 'in' && (
        <>
          <rect x="34" y="20" width="52" height="42" rx="6" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2.5" />
          <circle cx="60" cy="41" r="10" fill="#E5A91A" />
        </>
      )}
      {type === 'on' && (
        <>
          <rect x="28" y="40" width="64" height="24" rx="5" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2.5" />
          <circle cx="60" cy="29" r="10" fill="#E5A91A" />
        </>
      )}
      {type === 'at' && (
        <>
          <line x1="20" y1="58" x2="100" y2="58" stroke="#9AB0C4" strokeWidth="2" />
          <rect x="66" y="24" width="22" height="34" rx="3" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2" />
          <circle cx="48" cy="48" r="9" fill="#E5A91A" />
          <line x1="57" y1="48" x2="66" y2="48" stroke="#0D7A78" strokeWidth="2" strokeDasharray="3 2" />
        </>
      )}
      {type === 'under' && (
        <>
          <rect x="26" y="16" width="68" height="20" rx="5" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2.5" />
          <circle cx="60" cy="52" r="10" fill="#E5A91A" />
        </>
      )}
      {type === 'over' && (
        <>
          <rect x="30" y="46" width="60" height="20" rx="5" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2.5" />
          <circle cx="60" cy="18" r="10" fill="#E5A91A" />
          <path d="M 38 34 Q 60 26 82 34" fill="none" stroke="#0D7A78" strokeWidth="2" strokeDasharray="3 3" />
        </>
      )}
      {type === 'near' && (
        <>
          <rect x="22" y="24" width="38" height="38" rx="6" fill="#E6F5F4" stroke="#0D7A78" strokeWidth="2.5" />
          <circle cx="84" cy="43" r="10" fill="#E5A91A" />
          <line x1="62" y1="43" x2="72" y2="43" stroke="#0D7A78" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

export function PrepositionVisualGrid({ speechSpeed }: { speechSpeed: SpeechSpeed }) {
  return (
    <div className="studio-card rounded-xl p-5 sm:p-6 space-y-4">
      <div>
        <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
          ছবি দেখে Preposition বুঝুন
        </p>
        <h3 className="font-display text-xl font-bold text-[#0B2239] dark:text-white mt-0.5">
          In · On · At · Under · Over · Near
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
        {PREPOSITIONS.map((item) => (
          <div
            key={item.word}
            className="rounded-xl border border-[#DCE6F0] dark:border-[#1F3C5C] bg-[#F4F8FC] dark:bg-[#132C49] p-3.5 flex flex-col justify-between gap-2"
          >
            <PrepositionIcon type={item.type} />
            <div className="space-y-0.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-base font-bold text-[#0B2239] dark:text-white">
                  {item.word}
                </span>
                <button
                  type="button"
                  onClick={() => speakEnglish(item.exampleEn, speechSpeed)}
                  aria-label={`Listen to ${item.exampleEn}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                >
                  <Volume2 className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                {item.pron} · {item.bn}
              </p>
              <p className="text-xs text-[#4B637A] dark:text-[#9FB8D0]">{item.exampleEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. Visual Vocab Illustrated SVG Gallery (16 Workplace & Daily Items — Zero IPA)
interface VisualVocabCard {
  id: string;
  en: string;
  pron: string;
  bn: string;
  category: 'Safety & Electrical' | 'Tools & Campus' | 'Everyday Life';
  sentence: string;
}

const VISUAL_VOCAB_ITEMS: VisualVocabCard[] = [
  { id: 'helmet', en: 'Safety Helmet', pron: 'সেফটি হেলমেট', bn: 'নিরাপত্তা হেলমেট', category: 'Safety & Electrical', sentence: 'Wear your safety helmet on site.' },
  { id: 'gloves', en: 'Safety Gloves', pron: 'সেফটি গ্লাভস', bn: 'নিরাপত্তা দস্তানা', category: 'Safety & Electrical', sentence: 'Put on rubber gloves before testing.' },
  { id: 'multimeter', en: 'Multimeter', pron: 'মাল্টিমিটার', bn: 'ভোল্টেজ মাপার মিটার', category: 'Safety & Electrical', sentence: 'Check the voltage with a multimeter.' },
  { id: 'wire', en: 'Copper Wire', pron: 'কপার ওয়্যার', bn: 'তামার তার', category: 'Safety & Electrical', sentence: 'Connect the red copper wire safely.' },
  { id: 'switch', en: 'Main Switch', pron: 'মেইন সুইচ', bn: 'মূল সুইচ', category: 'Safety & Electrical', sentence: 'Turn off the main switch first.' },
  { id: 'fan', en: 'Ceiling Fan', pron: 'সিলিং ফ্যান', bn: 'বৈদ্যুতিক পাখা', category: 'Safety & Electrical', sentence: 'The technician repaired the ceiling fan.' },
  { id: 'light', en: 'LED Light', pron: 'এলইডি লাইট', bn: 'বৈদ্যুতিক বাতি', category: 'Safety & Electrical', sentence: 'Please switch on the workshop light.' },
  { id: 'wrench', en: 'Tools / Wrench', pron: 'টুলস / রেঞ্চ', bn: 'যন্ত্রপাতি / রেঞ্চ', category: 'Tools & Campus', sentence: 'Keep all tools inside the toolbox.' },
  { id: 'workshop', en: 'Workshop', pron: 'ওয়ার্কশপ', bn: 'কর্মশালা', category: 'Tools & Campus', sentence: 'Our practical class is in the workshop.' },
  { id: 'classroom', en: 'Classroom', pron: 'ক্লাসরুম', bn: 'শ্রেণিকক্ষ', category: 'Tools & Campus', sentence: 'We practice spoken English in the classroom.' },
  { id: 'clock', en: 'Clock / Time', pron: 'ক্লক / টাইম', bn: 'ঘড়ি / সময়', category: 'Tools & Campus', sentence: 'Always arrive at work on time.' },
  { id: 'book', en: 'Workbook', pron: 'ওয়ার্কবুক', bn: 'অনুশীলন বই', category: 'Tools & Campus', sentence: 'Open your workbook to page ten.' },
  { id: 'water', en: 'Drinking Water', pron: 'ড্রিংকিং ওয়াটার', bn: 'পানীয় জল', category: 'Everyday Life', sentence: 'Please give me a bottle of water.' },
  { id: 'tea', en: 'Cup of Tea', pron: 'কাপ অফ টি', bn: 'এক কাপ চা', category: 'Everyday Life', sentence: 'Let us have a cup of tea at break.' },
  { id: 'bus', en: 'City Bus', pron: 'সিটি বাস', bn: 'শহরের বাস', category: 'Everyday Life', sentence: 'I take the morning bus to Dhaka.' },
  { id: 'phone', en: 'Mobile Phone', pron: 'মোবাইল ফোন', bn: 'মোবাইল ফোন', category: 'Everyday Life', sentence: 'Practice speaking on your phone.' },
];

function VocabIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 120 84" className="svg-plate w-full h-20 rounded-lg bg-[#F4F8FC] border border-[#DCE6F0]" aria-hidden="true">
      {id === 'helmet' && (
        <>
          <path d="M28 54 C28 30, 92 30, 92 54 Z" fill="#F4B41A" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="22" y="54" width="76" height="8" rx="4" fill="#0B2847" />
          <rect x="54" y="28" width="12" height="24" rx="4" fill="#FEF6DF" stroke="#0B2847" strokeWidth="2" />
        </>
      )}
      {id === 'gloves' && (
        <>
          <rect x="34" y="34" width="24" height="32" rx="6" fill="#0D7A78" stroke="#0B2847" strokeWidth="2" />
          <rect x="62" y="34" width="24" height="32" rx="6" fill="#0D7A78" stroke="#0B2847" strokeWidth="2" />
          <rect x="34" y="56" width="24" height="10" rx="3" fill="#F4B41A" />
          <rect x="62" y="56" width="24" height="10" rx="3" fill="#F4B41A" />
          <line x1="42" y1="34" x2="42" y2="20" stroke="#0B2847" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="34" x2="50" y2="18" stroke="#0B2847" strokeWidth="4" strokeLinecap="round" />
          <line x1="70" y1="34" x2="70" y2="18" stroke="#0B2847" strokeWidth="4" strokeLinecap="round" />
          <line x1="78" y1="34" x2="78" y2="20" stroke="#0B2847" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {id === 'multimeter' && (
        <>
          <rect x="38" y="14" width="44" height="58" rx="6" fill="#F4B41A" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="45" y="21" width="30" height="16" rx="2" fill="#E6F5F4" stroke="#0B2847" strokeWidth="1.5" />
          <text x="60" y="33" textAnchor="middle" fill="#0B2847" fontSize="10" fontWeight="700">228V</text>
          <circle cx="60" cy="52" r="10" fill="#0B2847" />
          <line x1="60" y1="52" x2="66" y2="46" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {id === 'wire' && (
        <>
          <path d="M22 52 C40 24, 60 66, 82 34" fill="none" stroke="#C44536" strokeWidth="6" strokeLinecap="round" />
          <path d="M82 34 L98 28" stroke="#E5A91A" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M82 34 L98 38" stroke="#E5A91A" strokeWidth="3.5" strokeLinecap="round" />
        </>
      )}
      {id === 'switch' && (
        <>
          <rect x="34" y="16" width="52" height="52" rx="6" fill="#FFFFFF" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="50" y="28" width="20" height="28" rx="3" fill="#0D7A78" />
          <circle cx="60" cy="36" r="3" fill="#FFFFFF" />
        </>
      )}
      {id === 'fan' && (
        <>
          <circle cx="60" cy="42" r="9" fill="#0B2847" />
          <ellipse cx="60" cy="22" rx="6" ry="13" fill="#0D7A78" />
          <ellipse cx="78" cy="52" rx="13" ry="6" transform="rotate(28 78 52)" fill="#0D7A78" />
          <ellipse cx="42" cy="52" rx="13" ry="6" transform="rotate(-28 42 52)" fill="#0D7A78" />
        </>
      )}
      {id === 'light' && (
        <>
          <circle cx="60" cy="34" r="17" fill="#F9DC82" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="52" y="51" width="16" height="14" rx="3" fill="#4B637A" />
          <line x1="60" y1="8" x2="60" y2="13" stroke="#E5A91A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="34" x2="39" y2="34" stroke="#E5A91A" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="81" y1="34" x2="86" y2="34" stroke="#E5A91A" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {id === 'wrench' && (
        <>
          <line x1="34" y1="60" x2="78" y2="24" stroke="#0B2847" strokeWidth="8" strokeLinecap="round" />
          <circle cx="82" cy="22" r="10" fill="#0D7A78" />
          <rect x="82" y="16" width="10" height="10" fill="#F4F8FC" transform="rotate(-35 84 20)" />
        </>
      )}
      {id === 'workshop' && (
        <>
          <polygon points="22,40 60,16 98,40" fill="#0D7A78" />
          <rect x="30" y="40" width="60" height="30" fill="#FFFFFF" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="48" y="48" width="24" height="22" fill="#F4B41A" />
        </>
      )}
      {id === 'classroom' && (
        <>
          <rect x="24" y="18" width="72" height="42" rx="4" fill="#0B2847" stroke="#E5A91A" strokeWidth="3" />
          <text x="60" y="44" textAnchor="middle" fill="#E6F5F4" fontSize="13" fontWeight="700">A B C</text>
          <line x1="36" y1="68" x2="84" y2="68" stroke="#0D7A78" strokeWidth="4" strokeLinecap="round" />
        </>
      )}
      {id === 'clock' && (
        <>
          <circle cx="60" cy="42" r="24" fill="#FFFFFF" stroke="#0B2847" strokeWidth="2.5" />
          <line x1="60" y1="42" x2="60" y2="26" stroke="#0D7A78" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="42" x2="73" y2="42" stroke="#E5A91A" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="60" cy="42" r="3" fill="#0B2847" />
        </>
      )}
      {id === 'book' && (
        <>
          <rect x="32" y="16" width="56" height="52" rx="4" fill="#0B2847" stroke="#0B2847" strokeWidth="2" />
          <rect x="40" y="16" width="46" height="52" rx="2" fill="#FFFFFF" stroke="#0B2847" strokeWidth="2" />
          <line x1="48" y1="32" x2="78" y2="32" stroke="#0D7A78" strokeWidth="3" />
          <line x1="48" y1="44" x2="74" y2="44" stroke="#9AB0C4" strokeWidth="2.5" />
          <line x1="48" y1="54" x2="70" y2="54" stroke="#9AB0C4" strokeWidth="2.5" />
        </>
      )}
      {id === 'water' && (
        <>
          <rect x="46" y="24" width="28" height="44" rx="6" fill="#DCEFF6" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="52" y="15" width="16" height="9" rx="2" fill="#0D7A78" />
          <rect x="49" y="40" width="22" height="14" fill="#5CB6D6" />
        </>
      )}
      {id === 'tea' && (
        <>
          <path d="M36 34 H76 V54 C76 62, 68 68, 56 68 C44 68, 36 62, 36 54 Z" fill="#FFFFFF" stroke="#0B2847" strokeWidth="2.5" />
          <path d="M76 40 H84 C88 40, 88 54, 84 54 H76" fill="none" stroke="#0B2847" strokeWidth="2.5" />
          <path d="M48 26 Q50 18 48 14 M62 26 Q64 18 62 14" fill="none" stroke="#E5A91A" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {id === 'bus' && (
        <>
          <rect x="24" y="24" width="72" height="36" rx="6" fill="#0D7A78" stroke="#0B2847" strokeWidth="2.5" />
          <rect x="32" y="30" width="18" height="14" rx="2" fill="#E6F5F4" />
          <rect x="54" y="30" width="18" height="14" rx="2" fill="#E6F5F4" />
          <rect x="76" y="30" width="14" height="14" rx="2" fill="#E6F5F4" />
          <circle cx="40" cy="62" r="7" fill="#0B2847" />
          <circle cx="80" cy="62" r="7" fill="#0B2847" />
        </>
      )}
      {id === 'phone' && (
        <>
          <rect x="42" y="14" width="36" height="56" rx="6" fill="#0B2847" />
          <rect x="46" y="22" width="28" height="38" rx="2" fill="#E6F5F4" />
          <rect x="54" y="32" width="12" height="12" fill="#0D7A78" />
          <circle cx="60" cy="65" r="2.5" fill="#FFFFFF" />
        </>
      )}
    </svg>
  );
}

export function VisualVocabGallery({ speechSpeed }: { speechSpeed: SpeechSpeed }) {
  const [filterCat, setFilterCat] = useState<'All' | VisualVocabCard['category']>('All');
  const shown =
    filterCat === 'All'
      ? VISUAL_VOCAB_ITEMS
      : VISUAL_VOCAB_ITEMS.filter((item) => item.category === filterCat);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
            ছবি দেখে শব্দ ও সহজ বাংলা উচ্চারণ শিখুন
          </p>
          <h2 className="font-display text-xl font-bold text-[#0B2239] dark:text-white">
            Visual Workplace Vocabulary (16 Cards)
          </h2>
        </div>

        <div
          role="group"
          aria-label="Filter visual vocabulary cards"
          className="flex flex-wrap gap-1.5 bg-[#E4ECF4] dark:bg-[#0D2138] p-1 rounded-lg"
        >
          {(['All', 'Safety & Electrical', 'Tools & Campus', 'Everyday Life'] as const).map(
            (cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCat(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  filterCat === cat
                    ? 'bg-white dark:bg-[#163252] text-[#0B2239] dark:text-white shadow-sm'
                    : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2239] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shown.map((card) => (
          <article
            key={card.id}
            className="studio-card rounded-xl p-4 flex flex-col justify-between gap-3"
          >
            <div className="space-y-3">
              <VocabIllustration id={card.id} />
              <div className="space-y-0.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-[#0B2239] dark:text-white">
                    {card.en}
                  </h3>
                  <button
                    type="button"
                    onClick={() => speakEnglish(`${card.en}. ${card.sentence}`, speechSpeed)}
                    aria-label={`Listen to ${card.en}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-white dark:bg-[#0E223A] text-[#0D7A78] dark:text-[#2DD4BF] hover:bg-[#E6F5F4] shrink-0 cursor-pointer"
                  >
                    <Volume2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="font-bangla text-xs font-semibold text-[#0D7A78] dark:text-[#2DD4BF]">
                  {card.pron} · {card.bn}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#4B637A] dark:text-[#9FB8D0] pt-2 border-t border-[#E4ECF4] dark:border-[#1B3552] leading-relaxed">
              {card.sentence}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
