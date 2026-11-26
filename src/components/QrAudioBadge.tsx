import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { ExternalLink, QrCode } from 'lucide-react';
import { AppTab, GrammarSubTab } from '../types/book';
import { buildAudioLessonUrl } from '../utils/learningLogic';

interface QrAudioBadgeProps {
  title: string;
  banglaCue: string;
  tab: AppTab;
  sub?: GrammarSubTab;
  id?: number;
  size?: number;
  darkSurface?: boolean;
  onOpenLesson?: (tab: AppTab, sub?: GrammarSubTab, id?: number) => void;
}

export function QrAudioBadge({
  title,
  banglaCue,
  tab,
  sub,
  id,
  size = 84,
  darkSurface = false,
  onOpenLesson,
}: QrAudioBadgeProps) {
  const [dataUrl, setDataUrl] = useState<string>('');
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : 'https://edifice-english.app';
  const lessonUrl = buildAudioLessonUrl(origin, { tab, sub, id });

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(lessonUrl, {
      width: size * 2,
      margin: 1,
      color: {
        dark: '#0F2421',
        light: '#FFFFFF',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setDataUrl('');
      });

    return () => {
      cancelled = true;
    };
  }, [lessonUrl, size]);

  return (
    <div
      className={`inline-flex items-center gap-3.5 rounded-xl border p-3 ${
        darkSurface
          ? 'border-[#DEC07D]/40 bg-[#08261D]/85 text-[#FAF7F0]'
          : 'border-[#DDE5E1] bg-[#F6F9F7] text-[#0F2421]'
      }`}
    >
      <div
        className="qr-white-frame shrink-0 rounded-lg bg-white p-1.5 border border-[#DDE5E1] flex items-center justify-center"
        style={{ width: size + 12, height: size + 12 }}
      >
        {dataUrl ? (
          <img
            src={dataUrl}
            alt={`Scannable Audio QR Code for ${title}`}
            width={size}
            height={size}
            className="block rounded-sm"
          />
        ) : (
          <QrCode className="h-10 w-10 text-[#0F2421]" aria-hidden="true" />
        )}
      </div>

      <div className="min-w-0 space-y-1">
        <p
          className={`text-[11px] font-semibold tracking-wide uppercase ${
            darkSurface ? 'text-[#E6CA8A]' : 'text-[#0B6E4F]'
          }`}
        >
          Audio Lesson QR
        </p>
        <p
          className={`text-xs sm:text-sm font-semibold leading-snug ${
            darkSurface ? 'text-[#FAF7F0]' : 'text-[#0F2421]'
          }`}
        >
          {title}
        </p>
        <p
          className={`font-bangla text-xs leading-snug ${
            darkSurface ? 'text-[#D8E5DF]' : 'text-[#4A615D]'
          }`}
        >
          {banglaCue}
        </p>
        {onOpenLesson && (
          <button
            type="button"
            onClick={() => onOpenLesson(tab, sub, id)}
            className={`no-print mt-1 inline-flex items-center gap-1 text-xs font-semibold hover:underline cursor-pointer ${
              darkSurface ? 'text-[#F4DDA5]' : 'text-[#0B6E4F]'
            }`}
          >
            <span>Open Audio Lesson</span>
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
