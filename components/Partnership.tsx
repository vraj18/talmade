import React, { useState } from 'react';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Check, ArrowUpRight, GraduationCap, Briefcase, FileText, ChevronDown } from 'lucide-react';

// data/images.ts
export const images = {
    founder1: new URL('../assets/founder1.png', import.meta.url).href,
    founder2: new URL('../assets/founder2.png', import.meta.url).href,
    brochure: new URL('../assets/brochure.pdf', import.meta.url).href,
};

export const Partnership: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const openBrochure = () => {
        const brochurePath = images.brochure;
        window.open(brochurePath, '_blank', 'noopener,noreferrer');
    };

    const faqs = [
        {
            question: 'What kind of machinery does Talmade use to manufacture uniforms?',
            answer: `Talmade operates a modern manufacturing facility equipped with advanced, industry-grade machinery to ensure precision, efficiency, and consistent quality. Our infrastructure includes high-speed, fully lubricated sewing machines that enhance productivity while maintaining uniform stitch accuracy at scale. Automated cutting machines are used to precisely cut fabrics and materials, significantly reducing wastage and ensuring uniform sizing. We also utilize computerized embroidery machines to deliver consistent stitch quality and maintain brand standards across large orders. Computer-Aided Design (CAD) technology supports our design and development process by enabling accurate visualization, fit analysis, and refinement of uniform designs before production.`
        },
        {
            question: 'Can Talmade customize uniforms with logos and branding?',
            answer: `Yes, Talmade specializes in fully customized uniforms tailored to reflect each client's brand identity. We offer logo placement, brand names, and custom design elements using advanced techniques such as computerized embroidery, screen printing, heat transfer, and digital printing. Our digital printing solutions ensure high-resolution output and long-lasting clarity of designs. During the customization process, we carefully evaluate the fabric type, design complexity, placement requirements, and order quantity to deliver uniforms that align perfectly with the institution's branding and functional needs.`
        },
        {
            question: 'How does Talmade ensure the quality of its uniforms?',
            answer: `Quality is a core priority at Talmade. We source premium-grade fabrics selected for durability, comfort, and performance. Comprehensive quality control checks are conducted at every stage of production—from raw material inspection to final product evaluation. Our skilled workforce adheres strictly to approved design specifications and measurements, ensuring consistency across all uniforms. By combining experienced craftsmanship with advanced machinery and reliable material suppliers, Talmade consistently delivers uniforms that meet high standards of quality, fit, and finish.`
        },
        {
            question: 'How long does it take for Talmade to manufacture and deliver uniforms?',
            answer: `For standard orders, the manufacturing and delivery timeline typically ranges between 15 to 30 days, depending on the design complexity, measurements, and order quantity. Customized uniforms may require additional time due to design approvals and specific branding requirements. Clear communication and timely approvals help streamline the process. Where required, Talmade can also offer expedited production options to reduce turnaround time and ensure timely delivery.`
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Main Content (unchanged) */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <RevealOnScroll className="max-w-3xl">
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-4">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-black leading-tight mb-6">
                            Talmade Apparels Private Limited
                        </h2>
                        <h3 className="text-xl text-gray-800 font-medium mb-4">
                            Founded on 6 July 2011 by Mr. Vijay Kumar Gupta under the name Gupta Silk Mills, the company was subsequently rebranded as Talmade Apparels on 9 July 2024.
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

                {/* Mission & Vision Section (unchanged) */}
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

                    {/* Founders Section (unchanged) */}
                    <RevealOnScroll delay={200}>
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase block mb-6">Founders</span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="group relative w-full">
                                <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={images.founder1}
                                        alt="Vijay Kumar Gupta"
                                        className="w-full h-auto object-contain max-w-full"
                                        style={{ maxHeight: 'none' }}
                                    />
                                </div>
                                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md shadow-xl pointer-events-auto">
                                            <h3 className="text-xl font-semibold mb-2">Mr. Vijay Kumar Gupta</h3>
                                            <p className="text-gray-600 mb-4">Founder & Chief Executive Officer</p>
                                            <div className="space-y-4 mb-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <GraduationCap className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Education</h4>
                                                        <p className="text-xs text-gray-600">B.Tech, M.Tech, LLB</p>
                                                        <p className="text-xs text-gray-600">JRF BARC(scientist) - 1 year</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Briefcase className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Experience</h4>
                                                        <p className="text-xs text-gray-600">CTL ENGINEERING INC. - 2.5 years</p>
                                                        <p className="text-xs text-gray-600">Garmenting Experience - 5 years</p>
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

                            <div className="group relative w-full">
                                <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={images.founder2}
                                        alt="Tejas Sarvaiya"
                                        className="w-full h-auto object-contain max-w-full"
                                        style={{ maxHeight: 'none' }}
                                    />
                                </div>
                                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none">
                                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md shadow-xl pointer-events-auto">
                                            <h3 className="text-xl font-semibold mb-2">Mr. Tejas Sarvaiya</h3>
                                            <p className="text-gray-600 mb-4">Co-founder & Chief Operations Officer</p>
                                            <div className="space-y-4 mb-4">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <GraduationCap className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Education</h4>
                                                        <p className="text-xs text-gray-600">Masters in Tailoring & Designing</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Briefcase className="w-3.5 h-3.5 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 text-sm">Experience</h4>
                                                        <p className="text-xs text-gray-600">Masters in Tailoring & Designing - 8 years</p>
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

                {/* Simplified FAQ Section */}
                <div className="mt-20">
                    <RevealOnScroll>
                        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl border transition-all duration-300 ${openFaq === index
                                            ? 'border-gray-300 shadow-md'
                                            : 'border-gray-100 hover:border-gray-300 hover:shadow-sm'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:rounded-xl"
                                    >
                                        <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[1000px]' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-6 pt-2">
                                            <div className="border-l-2 border-gray-300 pl-6">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};