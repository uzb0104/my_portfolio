import { useState, useEffect } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle header scrolled styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection based on viewport position
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = ['home', 'projects', 'skills', 'about', 'contact'] as const;

  const getLocalizedLabel = (item: typeof menuItems[number]) => {
    return t({
      uz: item === 'home' ? 'Bosh sahifa' : item === 'projects' ? 'Loyihalar' : item === 'skills' ? 'Malakalar' : item === 'about' ? 'Men haqimda' : 'Aloqa',
      en: item === 'home' ? 'Home' : item === 'projects' ? 'Projects' : item === 'skills' ? 'Skills' : item === 'about' ? 'About' : 'Contact',
      ru: item === 'home' ? 'Главная' : item === 'projects' ? 'Проекты' : item === 'skills' ? 'Навыки' : item === 'about' ? 'Обо мне' : 'Контакты'
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header scrolled py-2' : 'glass-header py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
              <Code2 className="h-6 w-6 text-primary" />
              <span className="gradient-text font-extrabold tracking-wider">PORTFOLIO</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-semibold transition-all duration-300 hover:text-primary capitalize py-1 ${activeSection === item ? 'nav-link-active font-bold' : 'text-muted-foreground'}`}
                >
                  {getLocalizedLabel(item)}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
              
              {/* Mobile Hamburger Trigger */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden ml-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Menu & Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`mobile-menu flex flex-col p-6 pt-24 ${isOpen ? 'open' : ''}`}>
        <nav className="flex flex-col gap-6 mb-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-left text-lg font-semibold transition-all duration-300 py-2 border-b border-border/40 capitalize ${activeSection === item ? 'text-primary pl-2 border-l-2 border-l-primary' : 'text-muted-foreground'}`}
            >
              {getLocalizedLabel(item)}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
