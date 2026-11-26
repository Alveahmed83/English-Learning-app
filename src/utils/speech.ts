export type SpeechSpeed = 'slow' | 'normal';

const SPEED_RATE: Record<SpeechSpeed, number> = {
  slow: 0.72,
  normal: 0.95,
};

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function stopSpeaking(): void {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();
}

export function speakEnglish(
  text: string,
  speed: SpeechSpeed = 'normal',
  onEnd?: () => void
): void {
  if (!isSpeechSupported()) {
    onEnd?.();
    return;
  }

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = SPEED_RATE[speed];
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.lang === 'en-GB' || v.lang === 'en-US') ??
      voices.find((v) => v.lang.startsWith('en'));
    if (preferred) {
      utterance.voice = preferred;
    }

    utterance.onend = () => onEnd?.();
    utterance.onerror = () => onEnd?.();
    window.speechSynthesis.speak(utterance);
  } catch {
    onEnd?.();
  }
}
