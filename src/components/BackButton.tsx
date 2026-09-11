import React from 'react';
import { BackArrowIcon } from './AppIcons';

interface BackButtonProps {
  setPage: (page: string) => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ setPage }) => {
  return (
    <button
      onClick={() => setPage('home')}
      aria-label="Back to home"
      className="flex items-center gap-2 mb-10 px-4 py-2 rounded-lg border border-[#333] text-[var(--text-dim)] font-syne font-semibold text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 w-fit cursor-pointer group"
    >
      <BackArrowIcon size={14} />
      <span>Back</span>
      <span className="hidden sm:inline-block ml-1 text-[10px] font-mono text-[var(--text-muted)] group-hover:text-[var(--accent)] px-1.5 py-0.5 rounded bg-white/5 border border-[#333]">
        Esc
      </span>
    </button>
  );
};
