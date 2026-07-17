import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Custom inline SVG logos for technology icons to look premium and authentic
const getIcon = (name: string) => {
  const iconProps = { className: "h-6 w-6 text-primary flex-shrink-0" };
  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" {...iconProps}>
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 100 100" {...iconProps}>
          <rect width="100" height="100" fill="currentColor" rx="15" />
          <text x="32" y="70" fill="var(--background)" fontSize="48" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 100 100" {...iconProps}>
          <rect width="100" height="100" fill="currentColor" rx="15" />
          <text x="36" y="70" fill="var(--background)" fontSize="48" fontWeight="bold" fontFamily="sans-serif">JS</text>
        </svg>
      );
    case 'tailwind css':
      return (
        <svg viewBox="0 0 100 100" {...iconProps}>
          <path d="M50 30c-5.5 0-9.2 2.8-11 8.2 2.8-2.7 6.4-3.7 11-2.8 5.5.9 9.2 4.6 11 11-2.8 2.7-6.4 3.7-11 2.8-5.5-.9-9.2-4.6-11-11 2.8-2.7 6.4-3.7 11-2.8 5.5.9 9.2 4.6 11 11-2.8 2.7-6.4 3.7-11 2.8z" fill="currentColor" transform="scale(1.5) translate(-17, -15)" />
        </svg>
      );
    case 'html/css':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'next.js':
      return (
        <svg viewBox="0 0 100 100" {...iconProps}>
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" />
          <path d="M35 70V30l30 40V30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'redux':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...iconProps}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-1-4c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v3.5c0 .6-.4 1-1 1z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 15V9a4 4 0 0 0-4-4H9" />
          <line x1="6" y1="9" x2="6" y2="15" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...iconProps}>
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          <circle cx="15.5" cy="12.5" r="3.5" />
        </svg>
      );
    case 'responsive design':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
};

const skills = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 98, category: 'frontend' },
  { name: 'Next.js', level: 35, category: 'frontend' },
  { name: 'Redux', level: 75, category: 'frontend' },
  { name: 'Git', level: 80, category: 'tools' },
  { name: 'Figma', level: 85, category: 'design' },
  { name: 'Responsive Design', level: 95, category: 'design' },
];

export const Skills = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'frontend' | 'tools' | 'design'>('all');
  const { ref, isRevealed } = useScrollReveal(0.1);

  const filteredSkills = skills.filter(
    (skill) => filter === 'all' || skill.category === filter
  );

  return (
    <section id="skills" className="py-24 px-4 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t({
              uz: "Malakalar & Texnologiyalar",
              en: "Skills & Technologies",
              ru: "Навыки и Технологии"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Men ish olib boradigan texnologiyalar va dizayn vositalari",
              en: "Technologies and design tools I work with",
              ru: "Технологии и инструменты дизайна, с которыми я работаю"
            })}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(['all', 'frontend', 'tools', 'design'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn capitalize ${filter === cat ? 'active' : 'text-muted-foreground bg-background'}`}
            >
              {t({
                uz: cat === 'all' ? 'Barchasi' : cat === 'frontend' ? 'Frontend' : cat === 'tools' ? 'Instrument' : 'Dizayn',
                en: cat === 'all' ? 'All' : cat === 'frontend' ? 'Frontend' : cat === 'tools' ? 'Tools' : 'Design',
                ru: cat === 'all' ? 'Все' : cat === 'frontend' ? 'Фронтенд' : cat === 'tools' ? 'Инструменты' : 'Дизайн'
              })}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children revealed"
        >
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="hover-lift overflow-hidden border border-border/60 bg-card/65 backdrop-blur-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/5 text-primary">
                      {getIcon(skill.name)}
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>

                {/* Custom animated progress bar */}
                <div className="h-2.5 bg-secondary rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out absolute left-0 top-0"
                    style={{ width: isRevealed ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
