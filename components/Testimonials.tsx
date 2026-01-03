import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const testimonials = [
  {
    name: "Marvin McKinney",
    role: "Procurement Head",
    quote: "It's been a pleasure collaborating with the team on several initiatives. I confidently recommend them to anyone seeking a skilled agency to plan, design, and execute high-quality uniforms.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Brooklyn Simmons",
    role: "HR Director",
    quote: "I've worked with the team on multiple engagements and would gladly recommend them to organizations looking to create clear, effective brand experiences delivered with professionalism.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Kristin Watson",
    role: "Operations Manager",
    quote: "Their bulk manufacturing capability is unmatched. The delivery was on time, the quality was consistent across 2000 units, and the team was incredibly responsive throughout.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
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
                    <div className="flex items-center gap-4 mb-6">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-black">{t.name}</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</p>
                        </div>
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