import React, { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'stagger';
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  threshold = 0.15,
}) => {
  const { ref, isRevealed } = useScrollReveal(threshold);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-left':
        return 'scroll-reveal-left';
      case 'fade-right':
        return 'scroll-reveal-right';
      case 'scale':
        return 'scroll-reveal-scale';
      case 'stagger':
        return 'stagger-children';
      case 'fade-up':
      default:
        return 'scroll-reveal';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
