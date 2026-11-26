import { useState } from 'react';
import { BookOpen, Menu, Moon, Sun, X } from 'lucide-react';
import { AppTab, ThemeMode } from '../types/book';

interface TopBarProps {
  activeTab: AppTab;
  theme: ThemeMode;
  onSelectTab: (tab: AppTab) => void;
  onToggleTheme: () => void;
}

const NAV_ITEMS: { id: AppTab; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'rules', label: 'Lessons' },
  { id: 'structures', label: 'Structures' },
  { id: 'words', label: '300 Words' },
  { id: 'stories', label: 'Stories' },
];

export function TopBar({ activeTab, theme, onSelectTab, onToggleTheme }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: AppTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className="no-print sticky top-0 z-40 bg-white/88 dark:bg-[#081729]/92 backdrop-blur-md border-b border-[#D7E2EC] dark:border-[#1B3552]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 h-16">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-[#0B2847] dark:text-white whitespace-nowrap shrink-0 cursor-pointer"
        >
          EDIFICE <span className="text-[#0D7A78] dark:text-[#2DD4BF]">English</span>
        </button>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'text-[#0B2847] dark:text-[#2DD4BF] font-semibold'
                    : 'text-[#4B637A] dark:text-[#9FB8D0] hover:text-[#0B2847] dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[21px] h-[2.5px] rounded-full bg-[#0D7A78] dark:bg-[#2DD4BF]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle + Single Primary CTA + Mobile Drawer Trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] bg-[#F4F8FC] dark:bg-[#0E223A] text-[#0B2847] dark:text-[#F4B41A] hover:bg-[#E4ECF4] dark:hover:bg-[#163252] transition-colors cursor-pointer shrink-0"
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => handleNav('book')}
            className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
              activeTab === 'book'
                ? 'bg-[#0B2847] dark:bg-[#F4B41A] text-white dark:text-[#071526]'
                : 'bg-[#0D7A78] text-white hover:bg-[#0A6361]'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Full Book</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#C8D6E3] dark:border-[#244466] text-[#0B2847] dark:text-white hover:bg-[#E4ECF4] dark:hover:bg-[#163252]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#D7E2EC] dark:border-[#1B3552] bg-white dark:bg-[#0E223A] px-4 py-3"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E6F5F4] dark:bg-[#0F3A43] text-[#0D7A78] dark:text-[#2DD4BF] font-semibold'
                      : 'text-[#334B61] dark:text-[#C5D5E4] hover:bg-[#F4F8FC] dark:hover:bg-[#163252]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
