import { HeroSection } from '@/sections/HeroSection';
import { LogoCloud } from '@/sections/LogoCloud';
import { FeaturesBento } from '@/sections/FeaturesBento';
import { ContentGeneration } from '@/sections/ContentGeneration';
import { CampaignAutomation } from '@/sections/CampaignAutomation';
import { Testimonials } from '@/sections/Testimonials';
import { FAQ } from '@/sections/FAQ';
import { CTABanner } from '@/sections/CTABanner';
import { Newsletter } from '@/sections/Newsletter';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesBento />
      <ContentGeneration />
      <CampaignAutomation />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Newsletter />
    </>
  );
}
