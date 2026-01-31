import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const logos = [
  { name: 'Sequoia', icon: 'S' },
  { name: 'a16z', icon: 'a16' },
  { name: 'Accel', icon: 'Ac' },
  { name: 'Y Combinator', icon: 'YC' },
  { name: 'Bessemer', icon: 'Bv' },
];

export function LogoCloud() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-10">
          Trusted by founders who raised from top VCs
        </p>
        
        <StaggerContainer 
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
          staggerDelay={0.1}
        >
          {logos.map((logo) => (
            <StaggerItem key={logo.name}>
              <div className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-ice-100 flex items-center justify-center font-bold text-sm text-primary">
                  {logo.icon}
                </div>
                <span className="font-semibold text-sm">{logo.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
