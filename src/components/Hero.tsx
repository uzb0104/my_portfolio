import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto animate-fade-in">
          {/* Text Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                {t({
                  uz: "Salom, men",
                  en: "Hi, I'm",
                  ru: "Привет, я"
                })}{' '}
                <span className="gradient-text">
                  {t({
                    uz: "Frontend Dasturchi",
                    en: "Frontend Developer",
                    ru: "Frontend Разработчик"
                  })}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t({
                  uz: "Zamonaviy va interaktiv veb-ilovalar yarataman. React, TypeScript va zamonaviy texnologiyalar bilan ishlashni yaxshi ko'raman.",
                  en: "I create modern and interactive web applications. I love working with React, TypeScript and modern technologies.",
                  ru: "Я создаю современные и интерактивные веб-приложения. Люблю работать с React, TypeScript и современными технологиями."
                })}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" onClick={scrollToContact} className="gap-2 hover-lift">
                {t({
                  uz: "Men bilan bog'laning",
                  en: "Contact Me",
                  ru: "Связаться со мной"
                })}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover-lift">
                {t({
                  uz: "Loyihalarni ko'rish",
                  en: "View Projects",
                  ru: "Смотреть проекты"
                })}
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full border hover:bg-accent transition-colors hover-lift">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full border hover:bg-accent transition-colors hover-lift">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:example@email.com"
                 className="p-3 rounded-full border hover:bg-accent transition-colors hover-lift">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="relative rounded-2xl shadow-2xl w-full max-w-md hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
