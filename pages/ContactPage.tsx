import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function ContactPage() {
    const cities = [
        "Kolkata",
        "Ankleswar",
        "Chhatrapati Sambhajinagar",
        "Bangalore",
        "Mumbai",
        "Surat"
    ];

    // Duplicate cities for seamless marquee
    const marqueeCities = [...cities, ...cities];

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Contact Us</h1>
                </RevealOnScroll>

                {/* Corporate Office Section - Horizontal Layout */}
                <div className="max-w-6xl mx-auto mb-16">
                    <RevealOnScroll>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex flex-col lg:flex-row min-h-[500px]">
                                {/* Left: Corporate Office Info */}
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Corporate Office</h2>
                                    </div>

                                    <div className="space-y-4 text-gray-600 mb-8">
                                        <p>2ND FLOOR Plot-E/4-5-6, Functional Industrial Estate,</p>
                                        <p>Subhashchandra Road, Near jalaram Way Bridge,</p>
                                        <p>Road No/8, Udhna, Surat Gujarat-394210 India.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-600">
                                            <Phone className="w-5 h-5" />
                                            <a href="tel:+918141510885" className="hover:text-black transition-colors">+91 81415 10885</a>
                                        </div>
                                        <div className="flex items-start gap-3 text-gray-600">
                                            <Mail className="w-5 h-5 mt-1" />
                                            <div className="space-y-1">
                                                <a href="mailto:info.talmade@gmail.com" className="block hover:text-black transition-colors">info.talmade@gmail.com</a>
                                                <a href="mailto:info@talmade.in" className="block hover:text-black transition-colors">info@talmade.in</a>
                                                <a href="mailto:Vijay@talmade.in" className="block hover:text-black transition-colors">Vijay@talmade.in</a>
                                                <a href="mailto:Accounts@talmade.in" className="block hover:text-black transition-colors">Accounts@talmade.in</a>
                                                <a href="mailto:Store@talmade.in" className="block hover:text-black transition-colors">Store@talmade.in</a>
                                                <a href="mailto:Sales@talmade.in" className="block hover:text-black transition-colors">Sales@talmade.in</a>
                                                <a href="mailto:Tejas@talmade.in" className="block hover:text-black transition-colors">Tejas@talmade.in</a>
                                                <a href="mailto:Pradeep@talmade.in" className="block hover:text-black transition-colors">Pradeep@talmade.in</a>
                                                <a href="mailto:Customer.support@talmade.in" className="block hover:text-black transition-colors">Customer.support@talmade.in</a>
                                                <a href="mailto:Plant.vapi@talmade.in" className="block hover:text-black transition-colors">Plant.vapi@talmade.in</a>
                                                <a href="mailto:Plant.Kolkata@talmade.in" className="block hover:text-black transition-colors">Plant.Kolkata@talmade.in</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Map in Curved Box */}
                                <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
                                    <div className="relative w-full max-w-md mx-auto">
                                        {/* Map Box with subtle shadow effect */}
                                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
                                            <div className="h-[350px] w-full">
                                                <iframe
                                                    width="100%"
                                                    height="100%"
                                                    id="gmap_canvas"
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9169835466986!2d72.8422467!3d21.1738289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fac5c149a93%3A0xb8137fe457cf747a!2sTALMADE%20APPREALS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                                                    frameBorder="0"
                                                    scrolling="no"
                                                    title="Corporate Office Map"
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                ></iframe>
                                            </div>

                                            {/* Map Label */}
                                            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1.5 rounded-full text-xs font-medium">
                                                Surat, Gujarat
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Cities Marquee Section */}
                <div className="max-w-6xl mx-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-center">Our Presence</h2>
                        <p className="text-gray-500 text-center mt-2">Serving clients across major cities in India</p>
                    </div>

                    <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100 py-6">
                        <div className="animate-marquee flex whitespace-nowrap">
                            {marqueeCities.map((city, index) => (
                                <div
                                    key={`${city}-${index}`}
                                    className="mx-8 flex items-center"
                                >
                                    <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                                    <span className="text-lg font-medium text-gray-800">{city}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}