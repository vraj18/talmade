import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Procurement Head",
    quote: "Working with Talmade has been seamless. Their attention to detail and commitment to quality make them our trusted partner for supplying uniforms across multiple branches. I highly recommend them for any organization seeking premium, durable uniforms.",
  },
  {
    name: "Priya Sharma",
    role: "HR Director",
    quote: "The Talmade team is professional, responsive, and extremely knowledgeable. From design selection to final delivery, every step was handled efficiently. Our staff uniforms now reflect the brand image perfectly.",
  },
  {
    name: "Rohit Kulkarni",
    role: "Operations Manager",
    quote: "We ordered uniforms for our industrial and security teams, and Talmade exceeded our expectations. The fabrics are high-quality, stitching is flawless, and delivery was prompt. Truly a reliable partner for large-scale uniform requirements.",
  }
];


export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Globe Effect (CSS Only approximation) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gray-200/50 blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <RevealOnScroll>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-black max-w-3xl mx-auto leading-tight">
              Partner with us to scale quality across your organization
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-6">
                <h4 className="font-bold text-black">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{t.quote}"
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};