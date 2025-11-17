import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2 } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="gradient-text">Portfolio</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium hover:text-primary transition-colors capitalize"
              >
                {t({
                  uz: item === 'home' ? 'Bosh sahifa' : item === 'projects' ? 'Loyihalar' : item === 'skills' ? 'Malakalar' : item === 'about' ? 'Men haqimda' : 'Aloqa',
                  en: item,
                  ru: item === 'home' ? 'Главная' : item === 'projects' ? 'Проекты' : item === 'skills' ? 'Навыки' : item === 'about' ? 'Обо мне' : 'Контакты'
                })}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
