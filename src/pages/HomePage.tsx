import { HeroSection } from '@/sections/HeroSection';
import { LogoStrip } from '@/sections/LogoStrip';
import { FeaturesSplit } from '@/sections/FeaturesSplit';
import { WhyChoose } from '@/sections/WhyChoose';
import { StatsSection } from '@/sections/StatsSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { TrustedBy } from '@/sections/TrustedBy';
import { InsightsSection } from '@/sections/InsightsSection';
import { Testimonials } from '@/sections/Testimonials';
import { BottomCTA } from '@/sections/BottomCTA';
import { StickyCTABar } from '@/components/StickyCTABar';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <FeaturesSplit />
      <WhyChoose />
      <StatsSection />
      <ProcessSection />
      <TrustedBy />
      <InsightsSection />
      <Testimonials />
      <BottomCTA />
      <StickyCTABar />
    </>
  );
}
