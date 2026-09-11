import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ProjectsIcon, AboutIcon, SkillsIcon, ContactIcon, GithubIcon, LinkedinIcon, LeetCodeIcon } from './AppIcons';

interface HomeHeroProps {
  setPage: (page: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ setPage }) => {
  const navTiles = [
    { key: 'projects', label: 'My Projects', Icon: ProjectsIcon },
    { key: 'about', label: 'About me', Icon: AboutIcon },
    { key: 'skills', label: 'My Skills', Icon: SkillsIcon },
    { key: 'contact', label: 'Contact me', Icon: ContactIcon },
  ];

  const socialIcons: Record<string, React.ReactNode> = {
    linkedin: <LinkedinIcon size={24} />,
    github: <GithubIcon size={24} />,
    leetcode: <LeetCodeIcon size={24} />,
  };

  return (
    <div className="min-h-screen flex flex-col pt-10 md:pt-14 noise-bg relative overflow-x-hidden">
      {/* Drifting glowing ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="hero-orb w-96 h-96 bg-[var(--accent)]/5 top-12 -right-20 hidden md:block"
        />
        <div
          className="hero-orb w-64 h-64 bg-[var(--accent)]/4 bottom-24 -left-10 hidden md:block"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 flex-1 grid md:grid-cols-2 items-center max-w-5xl mx-auto w-full px-6 md:px-8 py-12 md:py-16 gap-10 md:gap-12 page-enter">
        
        {/* Left: Bio & Intro */}
        <div className="flex flex-col gap-5">
          <span className="font-heading font-semibold text-sm text-[var(--accent)] flex items-center gap-2 tracking-wide">
            {portfolioData.greeting}
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[var(--text)] tracking-tight">
            {portfolioData.tagline}
          </h1>
          <p className="text-[var(--text-dim)] text-[0.98rem] md:text-[1.05rem] leading-relaxed max-w-md font-normal">
            {portfolioData.bio}
          </p>
          <a
            href={portfolioData.resumeUrl}
            download
            className="inline-block bg-[var(--accent)] text-[#1a1a1a] font-heading font-bold text-sm px-7 py-3.5 rounded-xl w-fit hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[var(--accent)]/10"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Right: 4 Navigation Cards */}
        <div className="grid grid-cols-2 gap-4 card-stagger">
          {navTiles.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className="group bg-[var(--bg-card)] border border-[#323238] rounded-2xl p-7 sm:p-8 flex flex-col items-center justify-center gap-4 min-h-[135px] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center shadow-lg shadow-black/20"
            >
              <span className="text-[var(--text-dim)] group-hover:text-[var(--accent)] group-hover:scale-110 transition-all duration-200">
                <Icon size={28} />
              </span>
              <span className="font-heading font-semibold text-sm text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors duration-200">
                {label}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* Footer on Home Screen */}
      <footer className="border-t border-[#323238] py-6 flex justify-center gap-7 relative z-10">
        {portfolioData.socials.map((e) => (
          <a
            key={e.label}
            href={e.href}
            aria-label={e.label}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 font-heading font-bold text-sm p-1"
          >
            {socialIcons[e.icon]}
          </a>
        ))}
      </footer>
    </div>
  );
};
