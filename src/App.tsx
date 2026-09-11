import React, { useState, useEffect } from 'react';
import { HomeHero } from './components/HomeHero';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { SkillsView } from './components/SkillsView';
import { ContactView } from './components/ContactView';

const VALID_PAGES = ['home', 'about', 'projects', 'skills', 'contact'];

const getPageFromHash = (): string => {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  return VALID_PAGES.includes(hash) ? hash : 'home';
};

export const App: React.FC = () => {
  const [page, setPageState] = useState<string>(() => getPageFromHash());

  const setPage = (newPage: string) => {
    const valid = VALID_PAGES.includes(newPage) ? newPage : 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPageState(valid);

    if (valid === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = `#${valid}`;
    }
  };

  // Sync state with URL hash changes (Reload, Browser Back/Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const currentPage = getPageFromHash();
      setPageState(currentPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Global 'Escape' key navigation listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && page !== 'home') {
        setPage('home');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page]);

  const pages: Record<string, React.FC<{ setPage: (page: string) => void }>> = {
    home: HomeHero,
    about: AboutView,
    projects: ProjectsView,
    skills: SkillsView,
    contact: ContactView,
  };

  const CurrentView = pages[page] || HomeHero;

  return (
    <div className="w-full min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--accent)]/25 selection:text-[var(--accent)]">
      <main className="w-full overflow-x-hidden">
        <CurrentView setPage={setPage} />
      </main>
    </div>
  );
};

export default App;

