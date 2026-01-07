import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Lightbulb, Users, Target, BarChart, Scissors, Factory, PenTool, Package, CheckCircle } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-4">Process</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
              How we create impact
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              The genius of the Talmade process is that it delivers powerful apparel solutions in a simple manner, creating a common language for your brand's visual identity.
            </p>
          </RevealOnScroll>
        </div>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full">
            {/* Steps List */}
            <div className="flex-1 flex flex-col justify-center gap-6 lg:pr-12 h-[600px]">
                <RevealOnScroll delay={100}>
                    <div className="flex gap-6 group">
                        <Lightbulb className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">1. Consultation First</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={200}>
                    <div className="flex gap-6 group">
                        <Users className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">2. Collaborative Design</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={300}>
                    <div className="flex gap-6 group">
                        <Scissors className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">3. Sampling</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={350}>
                    <div className="flex gap-6 group">
                        <Factory className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">4. Production</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={400}>
                    <div className="flex gap-6 group">
                        <PenTool className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">5. Branding</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={450}>
                    <div className="flex gap-6 group">
                        <Package className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">6. Finishing</h3>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={500}>
                    <div className="flex gap-6 group">
                        <CheckCircle className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-display font-bold">7. Quality Assurance</h3>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Visual Cards - mimicking the reference image vertical strips */}
            <div className="flex-1 hidden lg:flex gap-4 h-[600px]">
                <RevealOnScroll delay={200} className="w-1/3 h-full">
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500" />
                </RevealOnScroll>
                <RevealOnScroll delay={300} className="w-full h-full">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Team Discussion" className="w-full h-full object-cover rounded-lg hover:scale-[1.02] transition-transform duration-500" />
                </RevealOnScroll>
                <RevealOnScroll delay={400} className="w-1/3 h-full">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop" alt="Strategy" className="w-full h-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-500" />
                </RevealOnScroll>
            </div>
        </div>
      </div>
    </section>
  );
};