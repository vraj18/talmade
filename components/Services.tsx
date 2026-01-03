import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { PenTool, Factory, Truck, Shirt, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'We shape clear brand aesthetics. From fabric selection to silhouette design, we ensure your uniforms align with your brand vision before mass production.',
  },
  {
    icon: Factory,
    title: 'Bulk Manufacturing',
    description: 'Our large-scale facilities ensure consistent quality and timely delivery for orders ranging from 50 to 50,000 units. No complex processes, just results.',
  },
  {
    icon: Shirt,
    title: 'Custom Branding',
    description: 'High-quality embroidery, heat transfer, and screen printing. We treat your logo with the respect it deserves, ensuring visibility and durability.',
  },
  {
    icon: Truck,
    title: 'Logistics & Distribution',
    description: 'We build scalable distribution systems. Whether shipping to a single HQ or 100 branches, we handle the logistics so you can focus on business.',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-20 gap-10">
          <RevealOnScroll>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">Services</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-black mb-6">
              What we do
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200} className="max-w-md">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We partner with brands to design, build, and scale uniform programs that drive professionalism, comfort, and long-term value.
            </p>
            <a href="#contact" className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group cursor-pointer">
                <div className="mb-6 inline-block p-3 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase tracking-tight mb-4 group-hover:text-gray-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};