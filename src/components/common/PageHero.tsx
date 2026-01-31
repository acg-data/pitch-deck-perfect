import { FadeIn } from '@/components/animations/FadeIn';

interface PageHeroProps {
  title: string;
  highlight: string;
  description: string;
}

export function PageHero({ title, highlight, description }: PageHeroProps) {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {title}
                <span className="text-accent block">{highlight}</span>
              </h1>
              <p className="text-white/70 text-lg mb-8">{description}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
