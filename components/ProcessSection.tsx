import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Star, Shirt, Handshake } from 'lucide-react';

export const ProcessSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Globe Effect (CSS Only approximation) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gray-200/50 blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                    <RevealOnScroll className="w-full lg:w-1/2">
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">Our Process</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-black leading-tight mb-6">
                            Engaged In The<br /> Entire Process
                        </h2>
                        <p className="text-xl text-gray-600 font-medium max-w-lg">
                            From selecting the right fabric to stitching the final button.
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200} className="w-full lg:w-1/2">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop"
                                alt="Fabric Cutting and Stitching Process"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Middle Text */}
                <RevealOnScroll className="text-center mb-16">
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-black tracking-tight">
                        Our service and support extends through this whole process
                    </h3>
                </RevealOnScroll>

                {/* Bottom Section */}
                <div className="space-y-12">
                    <RevealOnScroll>
                        <div className="text-center">
                            <h4 className="text-xl md:text-2xl text-gray-800 font-bold mb-6">
                                We Are The Best Choice If You Are Looking At
                            </h4>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Star,
                                title: "Re-branding",
                                subtitle: "your company."
                            },
                            {
                                icon: Shirt,
                                title: "Re-designing a new",
                                subtitle: "uniform for your company."
                            },
                            {
                                icon: Handshake,
                                title: "Changing supplier or",
                                subtitle: "service requirements."
                            }
                        ].map((item, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="bg-white p-10 py-12 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow">
                                    <div className="mb-6 bg-black text-white p-4 rounded-full">
                                        <item.icon className="w-8 h-8 stroke-[1.5]" />
                                    </div>
                                    <div className="text-lg">
                                        <span className="block font-bold text-black mb-1">{item.title}</span>
                                        <span className="block text-gray-600">{item.subtitle}</span>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
