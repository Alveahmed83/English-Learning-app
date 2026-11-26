import { useEffect, useState } from 'react';
import { AppTab, GrammarSubTab, LearnerProgress, ThemeMode } from './types/book';
import { BOOK_META } from './data/stories';
import {
  loadProgress,
  loadTheme,
  parseDeepLinkParams,
  saveProgress,
  saveTheme,
  toggleDailyTask,
  toggleNumberInList,
} from './utils/learningLogic';
import { SpeechSpeed, stopSpeaking } from './utils/speech';
import { TopBar } from './components/TopBar';
import { HomeHub } from './components/HomeHub';
import { RulesView } from './components/RulesView';
import { StructuresView } from './components/StructuresView';
import { WordsView } from './components/WordsView';
import { StoriesView } from './components/StoriesView';
import { FullBookPrintView } from './components/FullBookPrintView';

export default function App() {
  const initialRoute =
    typeof window !== 'undefined'
      ? parseDeepLinkParams(window.location.search)
      : { tab: 'home' as AppTab, sub: 'rules' as GrammarSubTab, id: undefined };

  const [activeTab, setActiveTab] = useState<AppTab>(initialRoute.tab);
  const [grammarSubTab, setGrammarSubTab] = useState<GrammarSubTab>(initialRoute.sub);
  const [focusId, setFocusId] = useState<number | undefined>(initialRoute.id);
  const [speechSpeed, setSpeechSpeed] = useState<SpeechSpeed>('slow');
  const [theme, setTheme] = useState<ThemeMode>(() => loadTheme());
  const [progress, setProgress] = useState<LearnerProgress>(() => loadProgress());

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    saveTheme(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectTab = (tab: AppTab, itemId?: number, subTab?: GrammarSubTab) => {
    stopSpeaking();
    setActiveTab(tab);
    setFocusId(itemId);
    if (subTab) {
      setGrammarSubTab(subTab);
    } else if (tab === 'rules' && itemId) {
      setGrammarSubTab('rules');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDailyTask = (
    day: number,
    task: 'rule' | 'structure' | 'words' | 'speaking'
  ) => {
    setProgress((prev) => toggleDailyTask(prev, day, task));
  };

  const handleToggleMasteredRule = (ruleId: number) => {
    setProgress((prev) => ({
      ...prev,
      masteredRules: toggleNumberInList(prev.masteredRules, ruleId),
    }));
  };

  const handleToggleMasteredStructure = (structureId: number) => {
    setProgress((prev) => ({
      ...prev,
      masteredStructures: toggleNumberInList(prev.masteredStructures, structureId),
    }));
  };

  const handleToggleLearnedWord = (wordId: number) => {
    setProgress((prev) => ({
      ...prev,
      learnedWords: toggleNumberInList(prev.learnedWords, wordId),
    }));
  };

  const handleToggleCompletedStory = (storyId: number) => {
    setProgress((prev) => ({
      ...prev,
      completedStories: toggleNumberInList(prev.completedStories, storyId),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col app-canvas-bg text-[#0B2239] dark:text-[#EEF5FB] transition-colors duration-200">
      <TopBar
        activeTab={activeTab}
        theme={theme}
        onSelectTab={(tab) => handleSelectTab(tab)}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1 mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        {activeTab === 'home' && (
          <HomeHub
            progress={progress}
            speechSpeed={speechSpeed}
            onChangeSpeechSpeed={setSpeechSpeed}
            onToggleDailyTask={handleToggleDailyTask}
            onNavigateTab={handleSelectTab}
          />
        )}

        {activeTab === 'rules' && (
          <RulesView
            masteredRules={progress.masteredRules}
            initialRuleId={focusId}
            initialSubTab={grammarSubTab}
            speechSpeed={speechSpeed}
            onToggleMastered={handleToggleMasteredRule}
          />
        )}

        {activeTab === 'structures' && (
          <StructuresView
            masteredStructures={progress.masteredStructures}
            initialStructureId={focusId}
            speechSpeed={speechSpeed}
            onToggleMastered={handleToggleMasteredStructure}
          />
        )}

        {activeTab === 'words' && (
          <WordsView
            learnedWords={progress.learnedWords}
            speechSpeed={speechSpeed}
            onToggleLearned={handleToggleLearnedWord}
          />
        )}

        {activeTab === 'stories' && (
          <StoriesView
            completedStories={progress.completedStories}
            initialStoryId={focusId}
            speechSpeed={speechSpeed}
            onToggleCompleted={handleToggleCompletedStory}
            onJumpToRule={(tab, ruleId) => handleSelectTab(tab, ruleId, 'rules')}
          />
        )}

        {activeTab === 'book' && (
          <FullBookPrintView
            onOpenAudioLesson={(tab, sub, id) => handleSelectTab(tab, id, sub)}
          />
        )}
      </main>

      <footer className="no-print border-t border-[#D7E2EC] dark:border-[#1B3552] bg-white/85 dark:bg-[#081729]/90 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#4B637A] dark:text-[#9FB8D0]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#0B2847] dark:text-white">
              {BOOK_META.publisherEn}
            </span>
            <span aria-hidden="true">·</span>
            <span>{BOOK_META.publisherLocation}</span>
            <span aria-hidden="true">·</span>
            <span>Author: {BOOK_META.authorName}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>{BOOK_META.authorEmail}</span>
            <span aria-hidden="true">·</span>
            <span>WhatsApp: {BOOK_META.authorWhatsApp}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
