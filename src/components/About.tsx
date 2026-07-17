import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Custom lightweight counter that animates numbers on viewport intersection
const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, isRevealed } = useScrollReveal(0.05);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isRevealed || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTimestamp: number | null = null;
    const duration = 1200; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isRevealed, end]);

  return (
    <span ref={ref} className="counter-value font-bold text-4xl md:text-5xl gradient-text">
      {count}{suffix}
    </span>
  );
};

const experiences = [
  {
    id: 1,
    year: { uz: "2025 — 2026", en: "2025 — 2026", ru: "2025 — 2026" },
    location: { uz: "O'zbekiston", en: "Uzbekistan", ru: "Узбекистан" },
    role: { uz: "HR da Raqamlashtirish bo'yicha mutaxassis", en: "HR digitalization specialist", ru: "Специалист по цифровизации кадров" },
    project: { uz: "ADM DigitalUz", en: "ADM DigitalUz", ru: "ADM DigitalUz" },
    link: "",
    hasArrow: true,
    desc: {
      uz: "Dasturiy tizimlar va malumotlar bazalarida yuzaga kelishi mumkin bo‘lgan texnik risklarni (nosozliklarni) tahlil qilish, ularni bartaraf etish bo‘yicha ichki yo‘riqnomalar, texnik hujjatlar va tahliliy hisobotlarni tayyorlash.",
      en: "Analysis of potential technical risks (malfunctions) that may arise in software systems and databases, and preparation of internal instructions, technical documents, and analytical reports on their elimination.",
      ru: "Анализ потенциальных технических рисков (неисправностей), которые могут возникнуть в программных системах и базах данных, а также подготовка внутренних инструкций, технических документов и аналитических отчетов по их устранению."
    }
  },
  {
    id: 2,
    year: { uz: "2024 - 2025", en: "2024 - 2025", ru: "2024 - 2025" },
    location: { uz: " Uzbekistan", en: " Uzbekistan", ru: "Узбекистан" },
    role: { uz: "Frontend dasturchi", en: "Frontend developer", ru: "Frontend разработчик" },
    project: { uz: "IT company", en: "IT company", ru: "IT company" },
    link: "",
    hasArrow: false,
    desc: {
      uz: "Narx hisoblash, material kuzatuvi va maosh hisoblash jarayonlari uchun frontend arxitektura. Qayta ishlatiladigan komponentlar, moslashuvchan ko'rinish va API integratsiya.",
      en: "Frontend architecture for price calculation, material tracking, and salary calculation processes. Reusable components, responsive layouts, and API integration.",
      ru: "Фронтенд архитектура для процессов расчета цен, отслеживания материалов и расчета заработной платы. Компоненты повторного использования, адаптивный вид и интеграция API."
    }
  },



];

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t({
              uz: "Men Haqimda",
              en: "About Me",
              ru: "Обо Мне"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Omonov Abbos Alisher o'g'li — Frontend dasturchi",
              en: "Abbos Omonov — Frontend Developer focused on modern technologies",
              ru: "Омонов Аббос Алишерович — Frontend разработчик"
            })}
          </p>
        </div>

        <div className="space-y-16">
          {/* Summary Section */}
          <div className="prose prose-lg dark:prose-invert mx-auto text-center max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t({
                uz: "Men Abbosbek Omonov — 1 yillik tajribaga ega frontend dasturchiman. React, TypeScript va zamonaviy web texnologiyalari bilan qulay, tezkor va ishonchli web ilovalar yarataman. Toza kod, chiroyli UI/UX va barqaror arxitektura — mening ustuvor yo‘nalishim. Real loyihalarda sport platformalari, boshqaruv tizimlari va turli CRUD xizmatlarini ishlab chiqqanman. Texnologiyalar orqali real muammolarga yechim yaratish va doimiy rivojlanish — mening asosiy maqsadim.",
                en: "I'm Abbosbek Omonov, a frontend developer with 1 year of professional experience. I create fast, reliable, and user-friendly web applications using React, TypeScript, and modern ecosystem tools. Clean code, beautiful UI/UX, and robust architecture are my key priorities. I have experience building sports platforms, management dashboards, and CRUD services.",
                ru: "Я Аббосбек Омонов — frontend разработчик с 1 годом опыта работы. Я создаю быстрые, надежные и удобные веб-приложения, используя React, TypeScript и современные инструменты экосистемы. Чистый код, красивый UI/UX и надежная архитектура — мои главные приоритеты."
              })}
            </p>
          </div>

          {/* Statistics Grid with Counter Animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover-lift border border-border/60 bg-card/50 backdrop-blur-md">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <div>
                    <Counter end={1} suffix="+" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {t({
                      uz: "Yillik Tajriba",
                      en: "Years Experience",
                      ru: "Лет Опыта"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border border-border/60 bg-card/50 backdrop-blur-md">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-1">
                  <div>
                    <Counter end={10} suffix="+" />
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {t({
                      uz: "Tugallangan Loyihalar",
                      en: "Completed Projects",
                      ru: "Завершенных Проектов"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift border border-border/60 bg-card/50 backdrop-blur-md">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <div>
                    <Counter end={4} />
                  </div>
                  <p className="text-muted-foreground font-medium">
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

          {/* Professional Timeline (Image Style) */}
          <div className="max-w-4xl mx-auto space-y-8 pt-8 text-left">
            <div className="space-y-2 border-l-4 border-primary pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {t({ uz: "JOURNEY", en: "JOURNEY", ru: "JOURNEY" })}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                {t({
                  uz: "Tajriba",
                  en: "Experience",
                  ru: "Опыт работы"
                })}
              </h3>

            </div>

            <div className="space-y-6 pt-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-card border border-border/80 dark:border-border/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-start transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
                >
                  {/* Left Column (Year & Location) */}
                  <div className="w-full md:w-1/4 flex-shrink-0">
                    <span className="block text-primary font-bold text-base md:text-lg mb-1">
                      {t(exp.year)}
                    </span>
                    <span className="block text-muted-foreground/80 text-sm font-medium">
                      {t(exp.location)}
                    </span>
                  </div>

                  {/* Right Column (Role, Project/Company & Desc) */}
                  <div className="w-full md:w-3/4 space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-foreground">
                      {t(exp.role)}
                    </h4>

                    <div>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-bold hover:underline transition-all"
                        >
                          {t(exp.project)} {exp.hasArrow && <span className="text-xs">↗</span>}
                        </a>
                      ) : (
                        <span className="text-primary font-bold">
                          {t(exp.project)}
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed pt-1">
                      {t(exp.desc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
