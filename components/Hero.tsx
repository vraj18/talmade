import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Globe, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
          alt="Corporate Uniform Team"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center">
        <RevealOnScroll className="max-w-4xl">
          <div className="flex items-center gap-3 text-white/80 mb-6">
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
            DESIGN <br />
            BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              DELIVER.
            </span>
          </h1>

          <p className="max-w-xl text-lg text-gray-300 leading-relaxed mb-10 border-l-2 border-white/30 pl-6">
            Modern enterprises need an agile manufacturing partner. We design, build, and scale corporate uniform programs that drive brand clarity and employee pride.
          </p>
        </RevealOnScroll>


      </div>
    </section>
  );
};