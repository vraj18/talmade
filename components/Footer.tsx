import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            
            <div>
                <h4 className="font-bold text-lg mb-6">Corporate Office</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li>2ND FLOOR Plot-E/4-5-6, Functional Industrial Estate,Subhashchandra Road, Near jalaram Way Bridge,Road No/8, Udhna, Surat Gujarat-394210 India.</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6">Quick Access</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                    <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6">Resources</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Fabric Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Sizing Chart</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li>
                        <a href="mailto:info.talmade@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-4 h-4" /> info.talmade@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:+918141510885" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-4 h-4" /> +91 81415 10885
                        </a>
                    </li>
                    <li className="flex gap-4 mt-6">
                        <a href="#" className="hover:text-white"><Instagram className="w-5 h-5"/></a>
                        <a href="#" className="hover:text-white"><Linkedin className="w-5 h-5"/></a>
                        <a href="#" className="hover:text-white"><Twitter className="w-5 h-5"/></a>
                        <a href="#" className="hover:text-white"><Facebook className="w-5 h-5"/></a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Big Footer Logo */}
        <div className="w-full overflow-hidden mb-8 opacity-20 hover:opacity-40 transition-opacity duration-700">
            <h1 className="text-[12vw] leading-none font-display font-bold text-center tracking-tighter uppercase select-none">
                Talmade
            </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 pt-8 border-t border-gray-900">
            <p>&copy; {currentYear} Talmade Uniforms. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
            </div>
        </div>
      </div>
    </footer>
  );
};