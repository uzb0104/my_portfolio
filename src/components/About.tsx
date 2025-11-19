import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t({
              uz: "Men Haqimda",
              en: "About Me",
              ru: "Обо Мне"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Men Omonov Abbos Alisher o'g'li Frontend dasturchiman",
              en: "Passionate frontend developer focused on user experience",
              ru: "Увлеченный frontend разработчик, ориентированный на пользовательский опыт"
            })}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="prose prose-lg dark:prose-invert mx-auto text-center">
            <p className="text-muted-foreground">
              {t({
                uz: "Men Abbosbek Omonov — 1 yillik tajribaga ega frontend dasturchiman. React, TypeScript va zamonaviy web texnologiyalari bilan qulay, tezkor va ishonchli web ilovalar yarataman Toza kod, chiroyli UI/UX va barqaror arxitektura — mening ustuvor yo‘nalishim. Real loyihalarda sport platformalari, boshqaruv tizimlari va turli CRUD xizmatlarini ishlab chiqqanman. Texnologiyalar orqali real muammolarga yechim yaratish va doimiy rivojlanish — mening asosiy maqsadim.",
                en: "I'm a frontend developer with 1 years of experience. I love creating modern and user-friendly web applications. Working with React, TypeScript and modern technologies is my strong suit. I strive for innovation and excellence in every project.",
                ru: "Я frontend разработчик с более чем 1-летним опытом. Люблю создавать современные и удобные веб-приложения. Работа с React, TypeScript и современными технологиями — моя сильная сторона. Стремлюсь к инновациям и совершенству в каждом проекте."
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">1</h3>
                  <p className="text-muted-foreground">
                    {t({
                      uz: "Yillik Tajriba",
                      en: "Years Experience",
                      ru: "Лет Опыта"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">10</h3>
                  <p className="text-muted-foreground">
                    {t({
                      uz: "Tugallangan Loyihalar",
                      en: "Completed Projects",
                      ru: "Завершенных Проектов"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl">4</h3>
                  <p className="text-muted-foreground">
                    {t({
                      uz: "Sertifikatlar",
                      en: "Certificates",
                      ru: "Сертификатов"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
