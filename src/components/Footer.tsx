import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full hover:bg-accent transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:example@email.com"
               className="p-2 rounded-full hover:bg-accent transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {t({
              uz: "Barcha huquqlar himoyalangan",
              en: "All rights reserved",
              ru: "Все права защищены"
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
