import React from 'react';
import { portfolioData } from '../data/portfolio';
import { BackButton } from './BackButton';
import { ExternalLinkIcon, GithubCodeIcon } from './AppIcons';

interface ProjectsViewProps {
  setPage: (page: string) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ setPage }) => {
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen pt-10 md:pt-14 noise-bg overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 md:py-14 page-enter">
        <BackButton setPage={setPage} />

        <p className="font-heading font-semibold text-xs text-[var(--accent)] uppercase tracking-widest mb-2">
          What I've built
        </p>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[var(--text)] mb-10 accent-line">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 card-stagger">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--bg-card)] border border-[#323238] rounded-2xl p-6 flex flex-col gap-4 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 shadow-xl shadow-black/20 relative"
            >
              {/* Header Row: Icon + Category Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="w-12 h-12 bg-[var(--accent-dim)] rounded-xl flex items-center justify-center text-2xl border border-[var(--accent)]/20 group-hover:scale-105 transition-transform duration-200">
                  {project.icon}
                </div>
                <span className="text-[0.7rem] font-mono text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded-full border border-[var(--accent)]/30 font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="font-heading font-bold text-[1.12rem] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[0.88rem] text-[var(--text-muted)] leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/5 border border-[#323238] text-[var(--text-dim)] text-[0.7rem] font-mono px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-col gap-2 pt-3 border-t border-[#323238] mt-auto">
                {/* Live Demo Button */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-[#1a1a1a] font-heading font-bold text-xs py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md shadow-[var(--accent)]/10"
                  >
                    <ExternalLinkIcon size={14} />
                    <span>Live Demo</span>
                  </a>
                )}

                {/* Source Code Repositories */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.frontendCodeUrl && (
                    <a
                      href={project.frontendCodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-[#323238] text-[var(--text-dim)] font-heading font-semibold text-[0.75rem] py-1.5 px-2.5 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                    >
                      <GithubCodeIcon size={13} />
                      <span>Frontend</span>
                    </a>
                  )}

                  {project.backendCodeUrl && (
                    <a
                      href={project.backendCodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-[#323238] text-[var(--text-dim)] font-heading font-semibold text-[0.75rem] py-1.5 px-2.5 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                    >
                      <GithubCodeIcon size={13} />
                      <span>Backend</span>
                    </a>
                  )}

                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 border border-[#323238] text-[var(--text-dim)] font-heading font-semibold text-[0.75rem] py-1.5 px-2.5 rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                    >
                      <GithubCodeIcon size={13} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
