import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data/categories';

import logoColor from '../assets/logo.png';
import logoWhite from '../assets/logo2.png';

type NavLink = {
  name: string;
  to: string;
  type: 'route' | 'hash';
  hasDropdown?: boolean;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks: NavLink[] = [
    { name: 'Home', to: '/', type: 'route' },
    { name: 'About Us', to: '/about', type: 'route' },
    { name: 'Products', to: '#products', type: 'hash', hasDropdown: true },
    { name: 'Clients', to: '/clients', type: 'route' },
    { name: 'Testimonials', to: '#testimonials', type: 'hash' },
    { name: 'Enquiry', to: '/enquiry', type: 'route' },
    { name: 'Contact Us', to: '/contact-us', type: 'route' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const navBackground =
    isHomePage && !isScrolled
      ? 'bg-transparent border-transparent'
      : 'bg-white/80 backdrop-blur-md border-gray-100';

  const linkColor =
    isHomePage && !isScrolled
      ? 'text-white/90 hover:text-white'
      : 'text-gray-600 hover:text-black';

  const menuButtonColor =
    isHomePage && !isScrolled
      ? 'text-white hover:text-white/80'
      : 'text-gray-600 hover:text-black';

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isHomePage && !isScrolled ? logoWhite : logoColor}
              alt="Talmade Logo"
              className="h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.type === 'route' ? (
                  <Link
                    to={link.to}
                    className={`text-sm font-medium flex items-center gap-1 ${linkColor}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                ) : (
                  <a
                    href={link.to}
                    className={`text-sm font-medium flex items-center gap-1 ${linkColor}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                )}

                {/* Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black"
                          onClick={handleClose}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/enquiry"
              className={`hidden md:inline-flex px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                isHomePage && !isScrolled
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 ${menuButtonColor}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.type === 'route' ? (
                  <Link
                    to={link.to}
                    onClick={handleClose}
                    className="block text-base font-medium text-gray-600 hover:text-black py-2"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.to}
                    onClick={handleClose}
                    className="block text-base font-medium text-gray-600 hover:text-black py-2"
                  >
                    {link.name}
                  </a>
                )}

                {link.hasDropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        onClick={handleClose}
                        className="block text-sm text-gray-500 hover:text-black"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/enquiry"
              onClick={handleClose}
              className="inline-flex justify-center px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
