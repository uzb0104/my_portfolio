import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden bg-background"
    >
      {/* Subtle background blob */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04] dark:opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent)' }}
      />

      <div className="container mx-auto max-w-6xl z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="space-y-7 order-2 md:order-1">

            {/* Top label */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {t({
                  uz: 'Freelance va product jamoalar uchun ochiqman',
                  en: 'Open for freelance and product teams',
                  ru: 'Открыт для фриланса и продуктовых команд'
                })}
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 text-primary bg-primary/5 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-primary" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {t({
                  uz: 'Ishga ochiqman · 24 soat ichida javob',
                  en: 'Available · reply within 24h',
                  ru: 'Доступен · отвечаю в течение 24 ч'
                })}
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.0] text-foreground">
                Abbosbek<br />Omonov
              </h1>

              {/* Role — primary */}
              <p className="text-xl md:text-2xl font-bold text-primary">
                {t({
                  uz: 'Frontend dasturchi',
                  en: 'Frontend Developer',
                  ru: 'Frontend разработчик'
                })}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2 max-w-md">
              <p className="text-base text-foreground leading-relaxed">
                {t({
                  uz: "Tez va ishonchli web mahsulotlar yarataman:",
                  en: "I build fast and reliable web products:",
                  ru: "Создаю быстрые и надёжные веб-продукты:"
                })}{' '}
                <strong>{t({ uz: 'React, TypeScript, ', en: 'React, TypeScript, Next.js', ru: 'React, TypeScript, Next.js' })}</strong>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t({
                  uz: "1+ yil davomida React, va TypeScript bilan production interfeyslar yaratganman — marketplace UI dan ichki biznes vositalarigacha.",
                  en: "1+ year building production interfaces with React, Next.js and TypeScript — from marketplace UIs to internal business tools.",
                  ru: "1+ год создаю production-интерфейсы на React, Next.js и TypeScript — от marketplace UI до внутренних бизнес-инструментов."
                })}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://drive.google.com/file/d/1rFi8DlQ4lsOgsgYoOF2DYHN3V_slJgOq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-primary/20">
                  <Download className="h-4 w-4" />
                  {t({ uz: 'CV yuklab olish', en: 'Download CV', ru: 'Скачать CV' })}
                </button>
              </a>

              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold border border-border/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary active:scale-95 text-foreground bg-transparent"
              >
                {t({ uz: "Loyihalarni ko'rish", en: 'View projects', ru: 'Смотреть проекты' })}
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── RIGHT: Photo card ── */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-[380px]">

              {/* Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/40"
                style={{ background: 'hsl(var(--card))' }}>
                <img
                  src={profilePhoto}
                  alt="Abbosbek Omonov"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '4/5' }}
                />

                {/* Bottom label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)'
                  }}>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                    {t({ uz: "O'ZBEKISTONDA", en: 'BASED IN UZBEKISTAN', ru: 'УЗБЕКИСТАН' })}
                  </p>
                  <p className="text-white text-base font-bold leading-snug">
                    {t({
                      uz: 'Ishga tayyor frontend dasturchi',
                      en: 'Frontend developer ready to work',
                      ru: 'Frontend разработчик, готов к работе'
                    })}
                  </p>
                </div>
              </div>

              {/* Decorative primary glow behind card */}
              <div className="absolute -z-10 inset-4 rounded-3xl blur-2xl opacity-30 bg-primary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};