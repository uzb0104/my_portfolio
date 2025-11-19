import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

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

  return (
    <section id="skills" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t({
              uz: "Malakalar & Texnologiyalar",
              en: "Skills & Technologies",
              ru: "Навыки и Технологии"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Men ish olib boradigan texnologiyalar va vositalar",
              en: "Technologies and tools I work with",
              ru: "Технологии и инструменты, с которыми я работаю"
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="hover-lift">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
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
