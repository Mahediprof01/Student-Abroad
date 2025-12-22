import { HeroSection } from '@/components/home/hero-section';
import { LogoMarquee } from '@/components/home/logo-marquee';
import { HighlightsSection } from '@/components/home/highlights-section';
import { ServicesSection } from '@/components/home/services-section';
import { FeaturesSection } from '@/components/home/features-section';
import { CTASection } from '@/components/home/cta-section';
import { ConsultationForm } from '@/components/home/consultation-form';
import { DestinationsSection } from '@/components/home/destinations-section';
import { PopularCoursesSection } from '@/components/home/popular-courses-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { SuccessStoriesSection } from '@/components/home/success-stories-section';

import { IntroSection } from '@/components/home/intro-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ConsultationForm />
      <LogoMarquee />
      <IntroSection />
      <HighlightsSection />
      <ServicesSection />
      <PopularCoursesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SuccessStoriesSection />
      <CTASection />
    </div>
  );
}

