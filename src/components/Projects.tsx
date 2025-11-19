import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const projects = [
  {
    id: 1,
    title: { uz: "Watch shopping", en: "Watch shopping", ru: "Watch shopping Платформа" },
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
    title: { uz: "Netflix clone", en: "Netflix clone", ru: "Netflix clone" },
    description: {
      uz: "Netflix clone ilovasi. Drag & drop, filtrlash va real-time yangilanishlar.",
      en: "Task management app with drag & drop, filtering and real-time updates.",
      ru: "Приложение для управления задачами с drag & drop, фильтрацией и обновлениями в реальном времени."
    },
    tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
  },
  {
    id: 4,
    title: { uz: "Social Media Dashboard", en: "Social Media Dashboard", ru: "Панель социальных сетей" },
    description: {
      uz: "Ijtimoiy tarmoqlar uchun boshqaruv paneli. Statistika, post rejalashtirish va analytics.",
      en: "Social media management dashboard with statistics, post scheduling and analytics.",
      ru: "Панель управления социальными сетями со статистикой, планированием постов и аналитикой."
    },
    tech: ['', 'TypeScript', 'React.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop'
  },
  {
    id: 5,
    title: { uz: "Weather App", en: "Weather App", ru: "Погодное приложение" },
    description: {
      uz: "Real-time ob-havo ma'lumotlari. 7 kunlik prognoz va joylashuv bo'yicha qidiruv.",
      en: "Real-time weather data with 7-day forecast and location search.",
      ru: "Данные о погоде в реальном времени с 7-дневным прогнозом и поиском по местоположению."
    },
    tech: ['React', 'OpenWeather API', 'Geolocation', 'CSS'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop'
  },
  {
    id: 6,
    title: { uz: "ShareWisdom", en: "ShareWisdom Platform", ru: "ShareWisdom Платформа" },
    description: {
      uz: "Blog yozish va boshqarish platformasi. Markdown editor va ko'p foydalanuvchi.",
      en: "Blog writing and management platform with markdown editor and multi-user support.",
      ru: "Платформа для написания и управления блогами с markdown редактором и многопользовательской поддержкой."
    },
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop'
  },
  {
    id: 7,
    title: { uz: "Gofit", en: "Gofit", ru: "Gofit" },
    description: {
      uz: "Jismoniy mashqlarni kuzatish ilovasi. Mashqlar rejasi va progress monitoring.",
      en: "Fitness tracking app with workout plans and progress monitoring.",
      ru: "Приложение для отслеживания фитнеса с планами тренировок и мониторингом прогресса."
    },
    tech: ['React', 'Type Script', 'Firebase', 'Redux', 'Charts'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop'
  },
  {
    id: 8,
    title: { uz: "Chat Application", en: "Chat Application", ru: "Чат Приложение" },
    description: {
      uz: "Real-time chat ilovasi. Guruh xabarlari, file sharing va video qo'ng'iroqlar.",
      en: "Real-time chat app with group messaging, file sharing and video calls.",
      ru: "Чат-приложение в реальном времени с групповыми сообщениями, обменом файлами и видеозвонками."
    },
    tech: ['React', 'Socket.io', 'WebRTC', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop'
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

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover-lift group h-full">
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
                        <a href="https://github.com/uzb0104?tab=overview&from=2025-09-01&to=2025-09-30">

                          <Button variant="outline" size="sm" className="gap-2">
                            <Github className="h-4 w-4" />
                            {t({ uz: "Kod", en: "Code", ru: "Код" })}
                          </Button>
                        </a>
                        <a href="https://gofit-khaki.vercel.app/adminprofile">

                          <Button size="sm" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            {t({ uz: "Demo", en: "Demo", ru: "Демо" })}
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
