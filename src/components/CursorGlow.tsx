import { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -400, y: -400 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion || ('ontouchstart' in window) || navigator.maxTouchPoints > 0) {
        setIsTouch(true);
        return;
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 ease-out dark:opacity-100 opacity-60"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--accent-glow), transparent 60%)`,
      }}
      aria-hidden="true"
    />
  );
};
