import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

export const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from('messages').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      toast({
        title: t({
          uz: 'Xatolik yuz berdi',
          en: 'Something went wrong',
          ru: 'Произошла ошибка'
        }),
        description: error.message,
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: t({
        uz: "Xabar yuborildi!",
        en: "Message sent!",
        ru: "Сообщение отправлено!"
      }),
      description: t({
        uz: "Tez orada siz bilan bog'lanamiz.",
        en: "We'll get back to you soon.",
        ru: "Мы свяжемся с вами в ближайшее время."
      })
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t({
              uz: "Bog'lanish",
              en: "Get In Touch",
              ru: "Связаться"
            })}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t({
              uz: "Savol yoki loyiha haqida gaplashmoqchimisiz? Men bilan bog'laning!",
              en: "Have a question or want to discuss a project? Contact me!",
              ru: "Есть вопрос или хотите обсудить проект? Свяжитесь со мной!"
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">abbosbekomonov04@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t({ uz: "Telefon", en: "Phone", ru: "Телефон" })}
                  </h3>
                  <p className="text-sm text-muted-foreground">+998 99 4540104</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t({ uz: "Manzil", en: "Location", ru: "Адрес" })}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t({
                      uz: "Jizzax, O'zbekiston",
                      en: "Jizzakh Uzbekistan",
                      ru: "Jizzax, Узбекистан"
                    })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 hover-lift">
            <CardHeader>
              <CardTitle>
                {t({
                  uz: "Xabar Yuboring",
                  en: "Send Message",
                  ru: "Отправить Сообщение"
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t({ uz: "Ismingiz", en: "Your Name", ru: "Ваше Имя" })}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t({ uz: "Emailingiz", en: "Your Email", ru: "Ваш Email" })}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t({ uz: "Xabaringiz", en: "Your Message", ru: "Ваше Сообщение" })}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting
                    ? t({ uz: 'Yuborilmoqda...', en: 'Sending...', ru: 'Отправка...' })
                    : t({ uz: 'Yuborish', en: 'Send Message', ru: 'Отправить' })}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
