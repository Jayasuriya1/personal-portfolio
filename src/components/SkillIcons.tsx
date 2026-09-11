import React from 'react';

interface SkillIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, size = 20, className = '' }) => {
  const key = name.toLowerCase().trim();

  switch (key) {
    case 'javascript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7.5 17.5c.8 1.1 2 1.5 3.3 1.5 2 0 3.2-1 3.2-2.5 0-3.2-4.5-2.2-4.5-4.5 0-1.2 1-2 2.5-2 1.2 0 2.2.4 2.9 1.4" stroke="#000" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M16.5 10v6.5c0 1.5-.8 2.5-2.2 2.5-.8 0-1.5-.3-2-.8" stroke="#000" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );

    case 'typescript':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 9h-5M9 9v9M13 17.5c.8.8 1.8 1.2 2.8 1.2 1.8 0 2.7-.9 2.7-2.1 0-2.8-4-1.8-4-3.9 0-1.1.9-1.8 2.2-1.8 1 0 1.9.4 2.5 1.1" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );

    case 'sql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E38C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 12 12)" />
        </svg>
      );

    case 'html':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v15.5l5.2-1.6 1.1-12.4H12z" fill="#EF652A" />
          <path d="M8 8.5h8M8.3 12h7.2M12 16.5l3.5-1 .3-3.5" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'css':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v15.5l5.2-1.6 1.1-12.4H12z" fill="#33A9DC" />
          <path d="M16 8.5H8.3l.3 3.5H16l-.5 5-3.5 1-3.5-1-.2-2" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M12 2.5L3.5 7.5v9l8.5 5 8.5-5v-9L12 2.5z" fill="#339933" />
          <path d="M12 7L6.5 10v4l5.5 3 5.5-3v-4L12 7z" fill="#FFF" opacity="0.9" />
          <path d="M12 10.5v3.5" stroke="#339933" strokeWidth="1.5" />
        </svg>
      );

    case 'nestjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2z" fill="#E0234E" />
          <path d="M8.5 8.5l3.5 4 3.5-4v7M12 12.5v3" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <rect width="24" height="24" rx="4" fill="#2D2D32" stroke="#444" strokeWidth="1" />
          <text x="12" y="15" fill="#F5E6A3" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">ex</text>
        </svg>
      );

    case 'rest apis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#00D26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${className}`}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M7 12h3M14 12h3M12 9v6" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M12 3C7.5 3 4 6.2 4 10.5c0 4.2 3.5 8 8 10.5 4.5-2.5 8-6.3 8-10.5C20 6.2 16.5 3 12 3z" fill="#336791" />
          <circle cx="9.5" cy="9.5" r="1.5" fill="#FFF" />
          <path d="M12 13.5c1.5 1 3 1 4.5 0" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'typeorm':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" fill="#FE0803" />
          <path d="M12 7.5l5 2.8v3.4l-5 2.8-5-2.8v-3.4l5-2.8z" fill="#FFF" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`shrink-0 ${className}`}>
          <path d="M12 2s-5.5 6.5-5.5 12c0 3 2.5 5 5.5 5s5.5-2 5.5-5c0-5.5-5.5-12-5.5-12z" fill="#47A248" />
          <path d="M12 2v18" stroke="#2D662E" strokeWidth="1.5" />
        </svg>
      );

    default:
      return <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />;
  }
};
