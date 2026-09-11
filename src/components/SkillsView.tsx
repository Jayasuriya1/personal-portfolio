import React from 'react';
import { portfolioData } from '../data/portfolio';
import { BackButton } from './BackButton';
import { SkillIcon } from './SkillIcons';

interface SkillsViewProps {
  setPage: (page: string) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ setPage }) => {
  const { skills } = portfolioData;

  const categorySubtitles: Record<string, string> = {
    Languages: "Core Syntax & Type Systems",
    Frontend: "UI Architecture & Client Performance",
    Backend: "API Design & Server Infrastructure",
    Database: "Relational Schema & NoSQL Data Storage",
  };

  return (
    <div className="min-h-screen pt-10 md:pt-14 noise-bg overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-14 page-enter">
        <BackButton setPage={setPage} />

        <p className="font-heading font-semibold text-xs text-[var(--accent)] uppercase tracking-widest mb-2">
          What I work with
        </p>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-10 accent-line">
          Technical Skills
        </h2>

        {/* Enhanced 2x2 Grid Layout for Skill Categories */}
        <div className="grid sm:grid-cols-2 gap-6 card-stagger">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-[var(--bg-card)] border border-[#323238] rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-black/20 group"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="w-12 h-12 bg-[var(--accent-dim)] rounded-xl flex items-center justify-center text-2xl border border-[var(--accent)]/30 group-hover:scale-105 transition-transform duration-200 shadow-inner">
                    {skillGroup.icon}
                  </div>
                  <span className="text-[0.72rem] font-mono text-[var(--accent)] bg-[var(--accent-dim)] px-3 py-1 rounded-full border border-[var(--accent)]/30 font-semibold">
                    {skillGroup.items.length} Tech
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                  {skillGroup.category}
                </h3>
                <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                  {categorySubtitles[skillGroup.category] || "Core Stack Capability"}
                </p>
              </div>

              {/* Skill Items with Brand Icons */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#323238]">
                {skillGroup.items.map((item) => (
                  <div
                    key={item.name}
                    className="skill-pill flex items-center gap-2.5 bg-[#161618] border border-[#323238] text-[var(--text-dim)] text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[#202025] hover:scale-[1.02] transition-all duration-200 cursor-default select-none group/pill shadow-sm"
                  >
                    <div className="p-1 rounded-lg bg-[#242429] group-hover/pill:bg-[#2e2e36] transition-colors flex items-center justify-center">
                      <SkillIcon name={item.name} size={18} />
                    </div>
                    <span className="font-semibold text-[0.88rem]">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
