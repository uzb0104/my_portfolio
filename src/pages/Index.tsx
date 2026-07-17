import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ScrollReveal } from '@/components/ScrollReveal';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden bg-background">
        <Header />
        <main>
          <Hero />
          
          <ScrollReveal animation="fade-up">
            <Projects />
          </ScrollReveal>
          
          <Skills />
          
          <ScrollReveal animation="fade-up">
            <About />
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up">
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        
        {/* Floating Back to Top Button */}
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
