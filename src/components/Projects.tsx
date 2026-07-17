import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';

import logcrmImg from '@/assets/logcrm.png';
import autoImg from '@/assets/auto.png';
import logistcImg from '@/assets/logistc.png';
import admImg from '@/assets/adm.png';

const projects = [
  {
    id: 1,
    num: '01',
    category: { uz: 'Logistika va boshqaruv · Frontend', en: 'Logistics and management · Frontend', ru: 'Логистика и управление · Frontend' },
    title: { uz: 'TezYukUz', en: 'TezYukUz', ru: 'TezYukUz' },
    description: {
      uz: "Logistika va boshqaruv uchun onlayn platformasi",
      en: " Logistics and management for online platform",
      ru: "Логистика и управление для онлайн платформы"
    },
    features: [

      { uz: 'Markaz dashboardi', en: 'Center dashboard', ru: 'Дашборд центра' },
      { uz: 'CRM', en: 'CRM', ru: 'CRM' }
    ],
    tech: ['React', 'TypeScript', 'Tailwind', "Node.js"],
    image: logcrmImg,
    demo: 'https://github.com/uzb0104',
    code: 'https://github.com/uzb0104'
  },
  {
    id: 2,
    num: '02',
    category: { uz: ' Auto Marketplace · Frontend ', en: ' Auto Marketplace · Frontend ', ru: ' Авто Рынок · Frontend ' },
    title: { uz: 'Auto CRM', en: 'Auto CRM', ru: 'Авто CRM' },
    description: {
      uz: "Avto extiyoy qismlarni saqlash va sotish, sotib olish bo'yicha ombor platformasi",
      en: "Warehouse platform for storing and selling, buying auto parts",
      ru: "Платформа для храненsия и продажи, покупки автозапчастей."
    },
    features: [
      { uz: "Ombor", en: 'Warehouse', ru: 'Склад' },
      { uz: 'Qidiruv', en: 'Search', ru: 'Поиск' },
      { uz: 'Mobilga mos', en: 'Mobile ready', ru: 'Мобильная версия' }
    ],
    tech: ['React', 'JavaScript', 'REST APIs', " Supabase", 'Responsive UI'],
    image: autoImg,
    demo: 'https://github.com/uzb0104',
    code: 'https://github.com/uzb0104'
  },
  {
    id: 3,
    num: '03',
    category: { uz: 'Asoschi · Frontend', en: 'Founder · Frontend', ru: 'Основатель · Frontend' },
    title: { uz: 'FastLink Platform', en: 'FastLink Platform', ru: 'FastLink Platform' },
    description: {
      uz: "Haydovchilar uchun yuk olish hamda yuk beruvchilar uchun yuk joylash imkoniyatini beruvchi web sahifa",
      en: "Web page that allows drivers to find loads and shippers to post loads.",
      ru: "Веб страница для водителей, чтобы найти грузы и для грузоотправителей, чтобы разместить грузы."
    },
    features: [
      { uz: 'Yuk qidirish', en: 'Load search', ru: 'Поиск грузов' },
      { uz: 'Yuk berish', en: 'Load posting', ru: 'Размещение грузов' },
      { uz: 'Maosh vositalari', en: 'Salary tools', ru: 'Инструменты зарплаты' }
    ],
    tech: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Supabase'],
    image: logistcImg,
    demo: 'https://fastlink-hub.vercel.app/',
    code: 'https://github.com/uzb0104'
  },
  {
    id: 4,
    num: '04',
    category: { uz: 'ADM Xodimlar', en: 'ADM Xodimlar', ru: 'ADM Xodimlar' },
    title: { uz: 'ADM ', en: 'ADM', ru: 'ADM' },
    description: {
      uz: "ADM korxanasi uchun yangi xodimlarni sinov muddati nazorati va tekshirish uchun mo'ljallangan platforma",
      en: " ADM for testing new employees in the company and monitoring their performance and development, review and clean structure.",
      ru: " ADM для проверки новых сотрудников в компании и мониторинга их производительности и развития, обзора и чистой структуры."
    },
    features: [
      { uz: 'Sinov muddati', en: 'Trial period', ru: 'Испытательный срок' },
      { uz: 'Baholash tizimi', en: "Rating system", ru: 'Система оценок' },
      { uz: 'Xisobotlar va statistika', en: 'Reports and statistics', ru: 'Отчеты и статистика' }
    ],
    tech: ['React', ' TailwindCSS', 'TypeScript', 'Rest APIs', 'Supabase'],
    image: admImg,
    demo: ' https://adm-system-employee.vercel.app/',
    code: 'https://github.com/uzb0104'
  }
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="space-y-3 mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {t({
              uz: "Tanlangan ishlar",
              en: "Selected work",
              ru: "Избранные работы"
            })}
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            {t({
              uz: "Frontendni o'zim olib borgan mahsulot va platformalar — arxitekturadan ishga tushirishgacha.",
              en: "Products and platforms I led on the frontend — from architecture to deployment.",
              ru: "Продукты и платформы, которые я вёл с фронтенда — от архитектуры до запуска."
            })}
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col md:flex-row rounded-2xl overflow-hidden border border-border/70 bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image Side */}
              <div className="relative w-full md:w-[45%] flex-shrink-0 overflow-hidden min-h-[220px] md:min-h-[280px] bg-muted/20 flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={t(project.title)}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-md rounded-lg"
                />
                {/* Numbered badge */}
                <span className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs font-bold flex items-center justify-center">
                  {project.num}
                </span>
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-between gap-4 p-6 md:p-8 w-full">
                <div className="space-y-3">
                  {/* Category */}
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider">
                    {t(project.category)}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground leading-snug">
                    {t(project.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(project.description)}
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20"
                      >
                        {t(f)}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs text-foreground/70 bg-muted/50 border border-border/60"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-all"
                    >
                      {t({ uz: 'Saytni ochish', en: 'Open site', ru: 'Открыть сайт' })}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {t({ uz: 'Kod', en: 'Code', ru: 'Код' })}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
