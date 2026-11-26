import { BOOK_META } from '../data/stories';

interface CoverProps {
  compact?: boolean;
  className?: string;
}

/**
 * Faithful recreation of the user's exact Book Front Cover (Page 1 of uploaded PDF):
 * Deep Midnight Navy (#07203B), Teal geometric ribbons (#0E7C7B), constellation globe,
 * speech bubbles with ascending Gold (#F4B41A) & White arrows, bold white + gold title,
 * EDIFICE Consultants lockup, and gold-ruled bilingual footer.
 */
export function FrontCoverCard({ compact = false, className = '' }: CoverProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#07203B] text-white shadow-[0_24px_56px_-18px_rgba(7,32,59,0.55)] border border-[#1E4368]/60 select-none ${className}`}
    >
      {/* Authentic Geometric Vector Backdrop Matching Page 1 Cover */}
      <svg
        viewBox="0 0 600 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="navyBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#082442" />
            <stop offset="55%" stopColor="#07203B" />
            <stop offset="100%" stopColor="#041529" />
          </linearGradient>
          <linearGradient id="tealSlash" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D8584" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#085A63" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="goldArrow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E59A10" />
            <stop offset="100%" stopColor="#F9C73D" />
          </linearGradient>
          <pattern id="subtleGrid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path
              d="M 22 0 L 0 0 0 22"
              fill="none"
              stroke="#4CA8B8"
              strokeOpacity="0.11"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Deep Navy Base */}
        <rect width="600" height="800" fill="url(#navyBg)" />

        {/* Subtle Blueprint Grid Accents */}
        <rect x="340" y="0" width="260" height="290" fill="url(#subtleGrid)" />
        <rect x="0" y="510" width="250" height="240" fill="url(#subtleGrid)" />

        {/* Top-Right & Diagonal Teal Geometric Ribbons */}
        <polygon points="395,0 600,0 600,25 320,315 245,245" fill="url(#tealSlash)" opacity="0.65" />
        <path
          d="M 505 225 C 580 280, 610 355, 600 455 L 555 415 C 555 340, 520 290, 465 255 Z"
          fill="#0E7C7B"
          opacity="0.85"
        />

        {/* Lower-Left Teal Swooshes */}
        <path
          d="M 20 355 C 55 470, 140 535, 230 520 C 175 465, 115 410, 55 320 Z"
          fill="#0C7476"
          opacity="0.85"
        />
        <polygon points="0,585 205,400 240,430 0,655" fill="#0B5E6B" opacity="0.72" />
        <path
          d="M 480 615 C 550 620, 600 665, 600 735 L 490 735 C 495 690, 465 655, 425 640 Z"
          fill="#0C7476"
          opacity="0.82"
        />

        {/* Top-Left Gold Circuit Line */}
        <polyline
          points="0,120 75,52 130,52 175,0"
          fill="none"
          stroke="#F4B41A"
          strokeWidth="3.5"
        />
        {/* Right Gold Speed Streaks */}
        <polygon points="485,205 600,90 600,108 497,212" fill="#F4B41A" />
        <polygon points="512,235 600,150 600,162 522,240" fill="#E59A10" opacity="0.85" />
        {/* Lower-Left Gold Ascending Beams */}
        <polygon points="0,730 138,595 162,612 22,745" fill="#F4B41A" />
        <polygon points="0,670 90,582 104,592 0,692" fill="#E59A10" opacity="0.9" />
        <polygon points="158,690 218,632 232,646 172,704" fill="#F4B41A" />
        <polygon points="432,670 492,610 516,625 456,685" fill="#F4B41A" />
        <polygon points="246,568 275,540 304,568" fill="#F4B41A" />

        {/* Wireframe Network Globe (Lower Center-Right) */}
        <g transform="translate(385, 472)" opacity="0.58">
          <circle cx="0" cy="0" r="88" fill="none" stroke="#38BDF8" strokeWidth="1.2" />
          <ellipse cx="0" cy="0" rx="46" ry="88" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <ellipse cx="0" cy="0" rx="88" ry="38" fill="none" stroke="#38BDF8" strokeWidth="1" />
          <line x1="-88" y1="0" x2="88" y2="0" stroke="#38BDF8" strokeWidth="1" />
          <line x1="0" y1="-88" x2="0" y2="88" stroke="#38BDF8" strokeWidth="1" />
          <line x1="-62" y1="-62" x2="62" y2="62" stroke="#2DD4BF" strokeWidth="1" />
          <line x1="-62" y1="62" x2="62" y2="-62" stroke="#2DD4BF" strokeWidth="1" />
          <circle cx="-46" cy="-42" r="3.5" fill="#7DD3FC" />
          <circle cx="38" cy="-54" r="3.5" fill="#F4B41A" />
          <circle cx="62" cy="18" r="3.5" fill="#7DD3FC" />
          <circle cx="-28" cy="52" r="3.5" fill="#2DD4BF" />
          <circle cx="14" cy="64" r="3.5" fill="#F4B41A" />
        </g>

        {/* Ascending Speech Bubbles & Growth Arrows */}
        <g transform="translate(390, 355)">
          {/* Small white up-right arrow */}
          <path
            d="M 105 32 L 138 0 L 122 -2 L 154 -14 L 146 20 L 142 6 L 114 38 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
          {/* Main Gold Growth Arrow */}
          <path
            d="M 22 108 L 112 22 L 96 14 L 148 -4 L 134 50 L 124 34 L 40 122 Z"
            fill="url(#goldArrow)"
          />
          {/* Secondary White Arrow */}
          <path
            d="M 88 94 L 134 48 L 122 44 L 154 34 L 144 66 L 138 56 L 96 102 Z"
            fill="#FFFFFF"
          />
          {/* Teal Speech Bubble */}
          <rect x="26" y="18" width="90" height="54" rx="22" fill="#138A8A" stroke="#082442" strokeWidth="2.5" />
          <polygon points="46,69 36,86 64,71" fill="#138A8A" />
          {/* Gold Speech Bubble */}
          <rect x="6" y="68" width="76" height="46" rx="18" fill="#F4B41A" stroke="#082442" strokeWidth="2.5" />
          <polygon points="24,112 16,126 38,113" fill="#F4B41A" />
          {/* White Speech Bubble */}
          <rect x="66" y="88" width="60" height="38" rx="16" fill="#FFFFFF" stroke="#082442" strokeWidth="2.5" />
          <polygon points="104,124 114,136 92,125" fill="#FFFFFF" />
        </g>

        {/* Subtle Dark Band behind EDIFICE Consultants */}
        <rect x="148" y="656" width="304" height="46" rx="6" fill="#06192F" fillOpacity="0.88" />

        {/* Bottom Gold Rule & Navy Footer Strip */}
        <rect x="0" y="736" width="600" height="6" fill="#F4B41A" />
        <rect x="0" y="742" width="600" height="58" fill="#061A31" />
      </svg>

      {/* Crisp Overlay Typography Aligned to Page 1 Cover */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Top-Left Title Block */}
        <div className={compact ? 'px-6 pt-7 sm:px-7 sm:pt-8' : 'px-9 pt-10 sm:px-11 sm:pt-12'}>
          <h2
            className={`font-display font-extrabold tracking-tight leading-[1.03] ${
              compact ? 'text-[27px] sm:text-[31px]' : 'text-4xl sm:text-[46px]'
            }`}
          >
            <span className="block text-white">Practical</span>
            <span className="block text-white">English</span>
            <span className="block text-[#F4B41A]">for Skilled</span>
            <span className="block text-[#F4B41A]">Manpower</span>
          </h2>
          <p
            className={`mt-2.5 font-medium text-[#DCE9F5] ${
              compact ? 'text-xs sm:text-sm' : 'text-base sm:text-lg'
            }`}
          >
            By {BOOK_META.authorName}
          </p>
        </div>

        {/* Bottom Publisher Lockup + Bilingual Gold-Bordered Strip */}
        <div className="mt-auto">
          <div className={`text-center ${compact ? 'pb-4' : 'pb-6'}`}>
            <span
              className={`font-display font-semibold tracking-wide text-white ${
                compact ? 'text-sm sm:text-base' : 'text-xl sm:text-2xl'
              }`}
            >
              EDIFICE Consultants
            </span>
          </div>

          <div
            className={`flex items-center justify-between gap-2 border-t-[3px] border-[#F4B41A] bg-[#061A31]/95 ${
              compact ? 'px-3.5 py-2.5 text-[9.5px]' : 'px-6 py-3.5 text-xs'
            }`}
          >
            <span className="font-bangla text-[#F4B41A] font-medium whitespace-nowrap">
              দক্ষ জনশক্তির জন্য সহজ ইংরেজি
              {!compact && <span className="text-[#CBDCEB]"> • Bilingual Edition</span>}
            </span>
            <span className="text-[#DCE9F5] shrink-0 font-medium whitespace-nowrap">
              Author: <span className="text-[#F4B41A]">{BOOK_META.authorName}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Faithful recreation of the user's Page 25 Back Cover:
 * Deep Navy (#0B2847), Gold top stripe (#F4B41A), Vocational Series kicker,
 * Confident Voice tagline, Turquoise Bangla subtitle, 4 clean bullet points,
 * gold-edged About the Author card, and EDIFICE Consultants Dhaka footer.
 */
export function BackCoverCard({ compact = false, className = '' }: CoverProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0B2847] text-white shadow-[0_24px_56px_-18px_rgba(7,32,59,0.55)] border border-[#1E4368]/60 select-none flex flex-col ${className}`}
    >
      {/* Signature Gold Top Stripe matching Page 25 */}
      <div className="h-2 w-full bg-[#F4B41A] shrink-0" />

      <div
        className={`flex flex-1 flex-col justify-between ${
          compact ? 'p-4 sm:p-4.5 gap-2' : 'p-8 sm:p-10 gap-4'
        }`}
      >
        {/* Top Tagline & Mission */}
        <div className={`text-center ${compact ? 'space-y-1' : 'space-y-1.5'}`}>
          <p
            className={`font-semibold tracking-[0.14em] text-[#F4B41A] ${
              compact ? 'text-[7.5px]' : 'text-[11px]'
            }`}
          >
            VOCATIONAL SKILL &amp; COMMUNICATION SERIES • BILINGUAL EDITION
          </p>
          <h3
            className={`font-display font-bold text-white leading-tight ${
              compact ? 'text-[15px] sm:text-[17px]' : 'text-2xl sm:text-3xl'
            }`}
          >
            Give Your Skilled Hands a Confident Voice.
          </h3>
          <p
            className={`font-bangla font-semibold text-[#2DD4BF] ${
              compact ? 'text-[10.5px]' : 'text-sm sm:text-base'
            }`}
          >
            আপনার দক্ষ হাতকে দিন আত্মবিশ্বাসী কণ্ঠ!
          </p>
          {!compact && (
            <p className="text-[#D2E2F0] leading-relaxed mx-auto max-w-md pt-1 text-xs sm:text-sm">
              You do not need years of school grammar to speak clear, respectful English at work,
              in a job interview, or abroad. Designed especially for Bangla-speaking vocational
              learners starting from zero.
            </p>
          )}
        </div>

        {/* 4 Clean Content Highlights */}
        <ul
          className={`text-[#E5EFF8] ${
            compact ? 'space-y-1 text-[9.5px] leading-snug' : 'space-y-1.5 text-xs sm:text-[13px]'
          }`}
        >
          <li className="flex gap-1.5">
            <span className="text-[#F4B41A] font-bold">•</span>
            <span>
              <strong className="text-white">Zero-to-Start Bridge:</strong> 3-Box Switch &amp; 20
              Day-1 survival phrases in simple Bangla.
            </span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#F4B41A] font-bold">•</span>
            <span>
              <strong className="text-white">30 Core Rules &amp; 30 Structures:</strong> Ready-made
              patterns for daily life and workplace speaking.
            </span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#F4B41A] font-bold">•</span>
            <span>
              <strong className="text-white">300 Words + 100 Verbs (V1–V3):</strong> Complete
              present, past, and past participle guide.
            </span>
          </li>
          <li className="flex gap-1.5">
            <span className="text-[#F4B41A] font-bold">•</span>
            <span>
              <strong className="text-white">Stories &amp; 30-Day Tracker:</strong> Follow
              Karim&apos;s journey with interactive drills and progress ticks.
            </span>
          </li>
        </ul>

        {/* About the Author Box */}
        <div
          className={`rounded-lg bg-[#12365E] border border-[#244E7C] ${
            compact ? 'px-2.5 py-2' : 'p-4'
          }`}
        >
          <p
            className={`font-semibold text-[#F4B41A] text-center ${
              compact ? 'text-[9.5px]' : 'text-xs sm:text-sm'
            }`}
          >
            About the Author — {BOOK_META.authorName}
          </p>
          <p
            className={`text-[#D9E7F4] text-center mt-0.5 ${
              compact ? 'text-[8.5px] leading-snug' : 'text-xs leading-relaxed mt-1'
            }`}
          >
            {BOOK_META.authorName} is an Electrical Engineer at EDIFICE Consultants, Dhaka,
            dedicated to vocational empowerment and turning everyday learners into skilled manpower.
          </p>
        </div>

        {/* Bottom Imprint Bar */}
        <div
          className={`flex items-end justify-between gap-2 border-t border-[#20456E] ${
            compact ? 'pt-2 text-[8px] leading-tight' : 'pt-2.5 text-[11px]'
          }`}
        >
          <div>
            <p className="font-semibold text-white">EDIFICE Consultants</p>
            <p className="text-[#B8CFE4]">Vocational Training · Dhaka</p>
          </div>
          <div className="text-right">
            <p className="font-bangla font-semibold text-white">Bilingual Edition</p>
            <p className="text-[#B8CFE4]">{BOOK_META.authorWhatsApp}</p>
          </div>
        </div>
      </div>

      {/* Bottom Teal Accent Strip */}
      <div className="h-1.5 w-full bg-[#0E7C7B] shrink-0" />
    </div>
  );
}
