import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export function ContactPage() {
    const branches = [
        {
            id: 1,
            name: "Kolkata Branch",
            address: "138, Canning Street, 4th Floor, Kolkata-700001 (IN)"
        },
        {
            id: 2,
            name: "Ankleswar Branch",
            address: "Shop no F3-4 A.A Arcade complex near Jamnagar transport GIDC, ANKLESWAR District Bharuch -393002 (India)"
        },
        {
            id: 3,
            name: "Chhatrapati Sambhajinagar Branch",
            address: "16,17 Yash Heights Second Floor Near Bhavani Nagar Chowk, Parijat Nagar, Sector N4, Cidco, Chhatrapati Sambhajinagar (Aurangabad) Maharashtra-431006"
        },
        {
            id: 4,
            name: "Mumbai Branch",
            address: "SHOP NO-1-2-3 6/8 Shri Narayan Niwas Ground Floor Vthoba Lane Vithalwadi, Kalbadevi Road, Kalbadevi, Mumbai-400002 Maharashtra."
        },
        {
            id: 5,
            name: "Bangalore Branch",
            address: "OLD no.12/9A, NEW no. 12/66, 1st Main Road New Kalappa Block, Srirampuram, Bangalore."
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Contact Us</h1>
                </RevealOnScroll>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Corporate Office */}
                    <RevealOnScroll>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold">Corporate Office</h2>
                            </div>
                            <div className="space-y-4 text-gray-600">
                                <p>2ND FLOOR Plot-E/4-5-6, Functional Industrial Estate,</p>
                                <p>Subhashchandra Road, Near jalaram Way Bridge,</p>
                                <p>Road No/8, Udhna, Surat Gujarat-394210 India.</p>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Phone className="w-5 h-5" />
                                    <a href="tel:+918141510885" className="hover:text-black transition-colors">+91 81415 10885</a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="w-5 h-5" />
                                    <div>
                                        <a href="mailto:info@talmade.com" className="block hover:text-black transition-colors">info@talmade.com</a>
                                        <a href="mailto:info.talmade@gmail.com" className="block hover:text-black transition-colors">info.talmade@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Globe className="w-5 h-5" />
                                    <a href="https://www.talmade.com" className="hover:text-black transition-colors">www.talmade.com</a>
                                </div>
                            </div>

                            <div className="mt-8 rounded-xl overflow-hidden h-64 border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=2ND%20FLOOR%20Plot-E/4-5-6,%20Functional%20Industrial%20Estate,%20Subhashchandra%20Road,%20Near%20jalaram%20Way%20Bridge,%20Road%20No/8,Udhna,Surat%20Gujarat-394210%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    title="Corporate Office Map"
                                ></iframe>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Branches */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-4 ml-2">Our Branches</h2>
                        {branches.map(branch => (
                            <RevealOnScroll key={branch.id}>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-lg mb-2">{branch.name}</h3>
                                    <p className="text-gray-600 text-sm">{branch.address}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
