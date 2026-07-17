import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com/uzb0104" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/abbosbek-omonov/" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://t.me/abbosbekomonov" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors">
              <Send className="h-5 w-5" />
            </a>
            {/* <a href="https://www.instagram.com/omonov_abbosbek?igsh=MXByb3VuanhncmxscQ==" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a> */}
          </div>

          <p className="text-sm text-muted-foreground text-center">
            ©  {t({
              uz: " 2025 Barcha huquqlar himoyalangan",
              en: " 2025 All rights reserved",
              ru: " 2025 Все права защищены"
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};
