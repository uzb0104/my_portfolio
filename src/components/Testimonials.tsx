import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: {
      uz: "Jasur Karimov",
      en: "Jasur Karimov",
      ru: "Жасур Каримов"
    },
    role: {
      uz: "Loyiha Menejeri",
      en: "Project Manager",
      ru: "Менеджер Проекта"
    },
    company: "Tech Solutions",
    rating: 5,
    text: {
      uz: "Ajoyib ishchi! Loyihani vaqtida va yuqori sifatda tayyorlab berdi. Professional yondashuv va ajoyib muloqot.",
      en: "Excellent work! Delivered the project on time with high quality. Professional approach and great communication.",
      ru: "Отличная работа! Проект был выполнен вовремя и качественно. Профессиональный подход и отличная коммуникация."
    },
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    name: {
      uz: "Malika Rashidova",
      en: "Malika Rashidova",
      ru: "Малика Рашидова"
    },
    role: {
      uz: "CEO",
      en: "CEO",
      ru: "Генеральный Директор"
    },
    company: "StartupHub",
    rating: 5,
    text: {
      uz: "Bizning startup uchun mukammal veb-sayt yaratdi. Zamonaviy dizayn va tez ishlash. Tavsiya qilaman!",
      en: "Created a perfect website for our startup. Modern design and fast performance. Highly recommend!",
      ru: "Создал идеальный сайт для нашего стартапа. Современный дизайн и быстрая работа. Очень рекомендую!"
    },
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: {
      uz: "Akmal Tursunov",
      en: "Akmal Tursunov",
      ru: "Акмал Турсунов"
    },
    role: {
      uz: "Marketing Direktori",
      en: "Marketing Director",
      ru: "Директор по Маркетингу"
    },
    company: "Digital Agency",
    rating: 5,
    text: {
      uz: "Bizning mijozlar uchun bir nechta loyihalarni muvaffaqiyatli amalga oshirdi. Har doim innovatsion yechimlar taklif qiladi.",
      en: "Successfully completed several projects for our clients. Always offers innovative solutions.",
      ru: "Успешно завершил несколько проектов для наших клиентов. Всегда предлагает инновационные решения."
    },
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    name: {
      uz: "Sevara Alimova",
      en: "Sevara Alimova",
      ru: "Севара Алимова"
    },
    role: {
      uz: "Mahsulot Menejeri",
      en: "Product Manager",
      ru: "Продакт-Менеджер"
    },
    company: "E-commerce Plus",
    rating: 5,
    text: {
      uz: "E-commerce platformamizni zamonaviy texnologiyalar bilan yaratdi. Foydalanuvchilar juda mamnun!",
      en: "Built our e-commerce platform with modern technologies. Users are very satisfied!",
      ru: "Создал нашу платформу электронной коммерции с современными технологиями. Пользователи очень довольны!"
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  }
];

export const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        {/* <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            {t({
              uz: "Mijozlar Fikrlari",
              en: "Client Testimonials",
              ru: "Отзывы Клиентов"
            })}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Mijozlarimning fikrlari va baholari",
              en: "What my clients say about working with me",
              ru: "Что говорят мои клиенты о работе со мной"
            })}
          </p>
        </div> */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                {/* <div className="p-1">
                  <Card className="h-full hover-lift">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground italic">
                        "{t(testimonial.text)}"
                      </p>
                      
                      <div className="flex items-center gap-4 pt-4 border-t">
                        <img
                          src={testimonial.image}
                          alt={t(testimonial.name)}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{t(testimonial.name)}</p>
                          <p className="text-sm text-muted-foreground">
                            {t(testimonial.role)} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
