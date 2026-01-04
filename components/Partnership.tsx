import React from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Check, ArrowUpRight, GraduationCap, Briefcase, Award, Target, FileText } from 'lucide-react';

export const Partnership: React.FC = () => {
    // Function to open brochure in new tab
    const openBrochure = () => {
        // Make sure the path is correct relative to your public folder or assets
        const brochurePath = '/assets/brochure.pdf';
        window.open(brochurePath, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* MAIN SECTION - KEEPING AS IS */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <RevealOnScroll className="max-w-3xl">
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-black leading-tight mb-6">
                            Talmade Apparels Private Limited
                        </h2>
                        <h3 className="text-xl text-gray-800 font-medium mb-4">
                            Founded on 9th July 2024 by Mr. Vijay Kumar Gupta and Mr. Tejas Sarvaiya
                        </h3>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200} className="max-w-md md:mt-12">
                        <p className="text-gray-600 text-lg">
                            We are a uniform manufacturer, wholesaler, and supplier of an elite and diverse range of high-quality uniforms to industries such as education, security and defence, industrial, corporate, health and hospitality.
                        </p>
                    </RevealOnScroll>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <RevealOnScroll className="w-full lg:w-1/2">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                                alt="Talmade Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200} className="w-full lg:w-1/2">
                        <div className="space-y-8">
                            {[
                                "We understand the significance of uniforms in branding as experts. We are extremely passionate about our business and only provide high-quality materials for you to choose from. Our team works tirelessly to produce immaculate quality uniforms using innovative designs and techniques.",
                                "Our uniforms are created with high-quality fabrics sourced from reputable market vendors. Following stringent quality checks, we offer a high-quality collection that is well-known for its fine quality, durability, colorfastness, and proper fit. These uniforms are designed to meet the needs of clients in a variety of commercial sectors."
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <Check className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                    <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
                                </div>
                            ))}
                            
                            {/* Brochure Download Button */}
                            <div className="pt-4">
                                <button
                                    onClick={openBrochure}
                                    className="inline-flex items-center gap-3 bg-black text-white hover:bg-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200 group"
                                >
                                    <FileText className="w-5 h-5" />
                                    <span>View Our Company Brochure</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* MISSION & VISION SECTION */}
                <div className="mt-16 space-y-12">
                    <RevealOnScroll>
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">Mission & Vision</span>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to create a global brand in the uniform apparel business and to be the dominant manufacturer in the garments industry — slowly and gradually building trust through world-class people and service, and creating a loyal customer base across the country and overseas by consistently delivering world-class products.
                        </p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Our Vision</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To be recognised as a trusted, world-class uniform brand — known for superior quality, ethical manufacturing practices and long-term partnerships — empowering organisations to present their best, while expanding responsibly across domestic and international markets.
                        </p>
                    </RevealOnScroll>

                    {/* FOUNDERS SECTION - Using original image dimensions */}
                    <RevealOnScroll delay={200}>
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-6">Founders</span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Founder 1 - Mr. Vijay Kumar Gupta */}
                            <div className="group relative w-full">
                                {/* Image container that follows original dimensions */}
                                <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                                    <img 
                                        src="/assets/founder1.jpg" 
                                        alt="Vijay Kumar Gupta"
                                        className="w-full h-auto object-contain max-w-full"
                                        style={{ maxHeight: 'none' }}
                                    />
                                </div>
                                
                                {/* Hover info - positioned absolutely but relative to the image height */}
                                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md shadow-xl pointer-events-auto">
                                            <h3 className="text-xl font-semibold mb-2">Mr. Vijay Kumar Gupta</h3>
                                            <p className="text-gray-600 mb-4">Founder & Chief Executive Officer</p>
                                            
                                            <div className="space-y-4 mb-4">
                                                {/* Educational Qualification */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <GraduationCap className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Education</h4>
                                                        <p className="text-xs text-gray-600">B.Tech in Textile Engineering • Master's in Business Administration (MBA) in Operations</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Industry Experience */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Briefcase className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Experience</h4>
                                                        <p className="text-xs text-gray-600">18+ years in textile manufacturing and supply chain management</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Expertise */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Award className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Expertise</h4>
                                                        <p className="text-xs text-gray-600">Quality control, fabric sourcing, production optimization, strategic partnerships</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                                A visionary entrepreneur with deep expertise in garment manufacturing and quality control. Vijay drives the company's commitment to excellence and strong supplier relationships.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Founder 2 - Mr. Tejas Sarvaiya */}
                            <div className="group relative w-full">
                                {/* Image container that follows original dimensions */}
                                <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                                    <img 
                                        src="/assets/founder2.jpg" 
                                        alt="Tejas Sarvaiya"
                                        className="w-full h-auto object-contain max-w-full"
                                        style={{ maxHeight: 'none' }}
                                    />
                                </div>
                                
                                {/* Hover info */}
                                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md shadow-xl pointer-events-auto">
                                            <h3 className="text-xl font-semibold mb-2">Mr. Tejas Sarvaiya</h3>
                                            <p className="text-gray-600 mb-4">Co-founder & Chief Operations Officer</p>
                                            
                                            <div className="space-y-4 mb-4">
                                                {/* Educational Qualification */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <GraduationCap className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Education</h4>
                                                        <p className="text-xs text-gray-600">B.Sc. in Fashion Design • Diploma in Garment Manufacturing Technology</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Industry Experience */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Briefcase className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Experience</h4>
                                                        <p className="text-xs text-gray-600">15+ years in apparel design, production management, and operations</p>
                                                    </div>
                                                </div>
                                                
                                                {/* Expertise */}
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Target className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Expertise</h4>
                                                        <p className="text-xs text-gray-600">Product innovation, operational efficiency, client relations, design implementation</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                                Focused on operations, design and customer experience. Tejas leads product innovation and ensures our services consistently meet client expectations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};