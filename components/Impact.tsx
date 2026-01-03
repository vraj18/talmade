import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Lightbulb, Users, Target, BarChart } from 'lucide-react';

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
            <div className="flex-1 flex flex-col justify-center gap-12 lg:pr-12">
                <RevealOnScroll delay={100}>
                    <div className="flex gap-6 group">
                        <Lightbulb className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-2">1. Consultation First</h3>
                            <p className="text-gray-400 leading-relaxed">We go beyond surface-level requirements to deeply understand your work environment, constraints, and user needs.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={200}>
                    <div className="flex gap-6 group">
                        <Users className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-2">2. Collaborative Design</h3>
                            <p className="text-gray-400 leading-relaxed">We iterate on fabrics and fits with your team. Samples are produced and tested in real-world conditions.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={300}>
                    <div className="flex gap-6 group">
                        <Target className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-2">3. Flawless Execution</h3>
                            <p className="text-gray-400 leading-relaxed">Precision manufacturing ensures every stitch is perfect. We handle quality control and packaging.</p>
                        </div>
                    </div>
                </RevealOnScroll>
                 <div className="h-px bg-gray-800 w-full" />
                <RevealOnScroll delay={400}>
                    <div className="flex gap-6 group">
                        <BarChart className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
                        <div>
                            <h3 className="text-2xl font-display font-bold mb-2">4. Supply Chain Evolution</h3>
                            <p className="text-gray-400 leading-relaxed">We set up re-ordering systems that improve over time, ensuring you never run out of stock.</p>
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