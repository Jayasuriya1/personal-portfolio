import React from 'react';
import { portfolioData } from '../data/portfolio';
import { BackButton } from './BackButton';
import { ExternalLinkIcon } from './AppIcons';

interface AboutViewProps {
  setPage: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setPage }) => {
  const { about } = portfolioData;

  const stats = [
    { number: '7+', label: 'Projects Built', icon: '🚀' },
    { number: '10+', label: 'Tech Stack Skills', icon: '⚡' },
    { number: 'Full Stack', label: 'Architecture Focus', icon: '🛠️' },
    { number: 'Active', label: 'LeetCode Problem Solver', icon: '🧩' },
  ];

  const pillars = [
    {
      title: 'Full-Stack Architecture',
      desc: 'Building end-to-end type-safe applications with NestJS, Node.js, React, and REST APIs.',
      icon: '⚡',
    },
    {
      title: 'Database Engineering',
      desc: 'Designing relational schemas in PostgreSQL/TypeORM and document structures in MongoDB.',
      icon: '🗄️',
    },
    {
      title: 'Clean Code & Quality',
      desc: 'Enforcing modular software design, reusable components, and optimized performance.',
      icon: '🛡️',
    },
  ];

  const infoIcons: Record<string, string> = {
    Location: '📍',
    Role: '💼',
    Specialization: '⚡',
    Email: '✉️',
  };

  return (
    <div className="min-h-screen pt-10 md:pt-14 noise-bg overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-14 page-enter">
        <BackButton setPage={setPage} />

        <p className="font-heading font-semibold text-xs text-[var(--accent)] uppercase tracking-widest mb-2">
          Who I am
        </p>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-8 md:mb-10 accent-line">
          About Me
        </h2>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mb-10">
          {stats.map((st) => (
            <div
              key={st.label}
              className="bg-[var(--bg-card)] border border-[#323238] rounded-xl p-4 sm:p-4.5 flex flex-col gap-1 hover:border-[var(--accent)] transition-all duration-200 group shadow-md shadow-black/20"
            >
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-mono mb-1">
                <span>{st.icon}</span>
              </div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--accent)] group-hover:scale-105 transition-transform origin-left">
                {st.number}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-medium">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          
          {/* Left: Bio & Core Pillars */}
          <div className="flex flex-col justify-between gap-6 h-full">
            <div className="flex flex-col gap-4">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-[var(--text-dim)] text-[0.98rem] leading-[1.8] font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Engineering Pillars */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="font-heading font-bold text-base text-[var(--text)] uppercase tracking-wider text-xs text-[var(--accent)] mb-1">
                Core Focus Areas
              </h3>
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#1a1a1d] border border-[#323238] hover:border-[var(--accent)]/50 transition-colors duration-200"
                >
                  <span className="text-lg p-2 rounded-lg bg-[var(--accent-dim)] shrink-0 border border-[var(--accent)]/20">
                    {p.icon}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-heading font-semibold text-sm text-[var(--text)]">
                      {p.title}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {p.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Info Card & Action Links */}
          <div className="flex flex-col justify-between gap-6 bg-[var(--bg-card)] border border-[#323238] p-6 sm:p-7 rounded-2xl shadow-xl shadow-black/30 backdrop-blur-sm h-full">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#323238]">
                <h3 className="font-heading font-bold text-lg text-[var(--text)]">
                  Personal Details
                </h3>
                <span className="text-xs font-mono text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded-full border border-[var(--accent)]/30 font-medium">
                  Verified Engineer
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {about.info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent-dim)] border border-[var(--accent)]/20 flex items-center justify-center text-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
                      {infoIcons[item.label] || '⚡'}
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-[0.72rem] font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-heading font-semibold text-[0.95rem] text-[var(--text)] truncate">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons inside Info Card */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#323238]">
              <button
                onClick={() => setPage('contact')}
                className="flex-1 bg-[var(--accent)] text-[#1a1a1a] font-heading font-bold text-[0.88rem] px-5 py-3 rounded-xl hover:opacity-90 hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 text-center shadow-lg shadow-[var(--accent)]/15"
              >
                <span>Get In Touch</span>
                <span>→</span>
              </button>

              <a
                href="https://github.com/Jayasuriya1"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#1a1a1d] text-[var(--text)] font-heading font-semibold text-[0.88rem] px-5 py-3 rounded-xl border border-[#323238] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <span>GitHub Profile</span>
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

