import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    title: { uz: "E-commerce Platformasi", en: "E-commerce Platform", ru: "E-commerce Платформа" },
    description: {
      uz: "To'liq funksional onlayn do'kon. Mahsulotlar katalogi, savatcha va to'lov tizimi bilan.",
      en: "Full-featured online store with product catalog, cart and payment system.",
      ru: "Полнофункциональный интернет-магазин с каталогом товаров, корзиной и системой оплаты."
    },
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop'
  },
  {
    id: 2,
    title: { uz: "Portfolio Website", en: "Portfolio Website", ru: "Портфолио сайт" },
    description: {
      uz: "Zamonaviy dizayndagi shaxsiy portfolio sayti. Animatsiyalar va responsive dizayn bilan.",
      en: "Modern personal portfolio website with animations and responsive design.",
      ru: "Современный личный сайт-портфолио с анимациями и адаптивным дизайном."
    },
    tech: ['React', 'Vite', 'CSS3', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
  },
  {
    id: 3,
    title: { uz: "Task Management App", en: "Task Management App", ru: "Приложение для задач" },
    description: {
      uz: "Vazifalarni boshqarish ilovasi. Drag & drop, filtrlash va real-time yangilanishlar.",
      en: "Task management app with drag & drop, filtering and real-time updates.",
      ru: "Приложение для управления задачами с drag & drop, фильтрацией и обновлениями в реальном времени."
    },
    tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
  }
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t({
              uz: "Mening Loyihalarim",
              en: "My Projects",
              ru: "Мои Проекты"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Men yaratgan va ustida ishlagan ba'zi loyihalar",
              en: "Some of the projects I've created and worked on",
              ru: "Некоторые из проектов, которые я создал и над которыми работал"
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-lift group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={t(project.title)}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{t(project.title)}</CardTitle>
                <CardDescription>{t(project.description)}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="gap-2 flex-1">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 flex-1">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
