import React, { useState, useEffect } from 'react';
import { Menu, X, Shirt, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data/categories';

import logoColor from '../assets/logo.png';
import logoWhite from '../assets/logo2.png';
// Since assets is in root and components is in root, it should be ../assets/logo.png if components is at root/components? 
// No, user said 'assets' folder where they will add images. 
// If components/Navbar.tsx is at root/components/Navbar.tsx, then ../assets/logo.png checks root/assets/logo.png.
// Vite usually requires assets to be inside src to be imported, or public.
// If outside src, it might fail. Let's try importing. If fails, I will move it.

// Actually, wait. The user created `assets` at `/Users/vrajborad/Desktop/talmade/assets`. 
// `Navbar.tsx` is at `/Users/vrajborad/Desktop/talmade/components/Navbar.tsx`.
// So `../assets/logo.png` is correct relative path.

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/#products', hasDropdown: true },
    { name: 'Clients', href: '/clients' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Enquiry', href: '/enquiry' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  // Dynamic classes based on state
  const navBackground = isHomePage && !isScrolled
    ? 'bg-transparent border-transparent'
    : 'bg-white/80 backdrop-blur-md border-gray-100';

  const linkColor = isHomePage && !isScrolled
    ? 'text-white/90 hover:text-white'
    : 'text-gray-600 hover:text-black';

  const menuButtonColor = isHomePage && !isScrolled
    ? 'text-white hover:text-white/80'
    : 'text-gray-600 hover:text-black';

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isHomePage && !isScrolled ? logoWhite : logoColor}
              alt="Talmade Logo"
              className="h-12 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu - Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${linkColor}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${linkColor}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden py-2">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                          onClick={() => setActiveDropdown(null)}
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

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/enquiry"
              className={`hidden md:inline-flex px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${isHomePage && !isScrolled
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-black text-white hover:bg-gray-800'
                }`}
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 transition-colors ${menuButtonColor}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <a
                    href={link.href}
                    onClick={!link.hasDropdown ? handleLinkClick : undefined}
                    className="text-base font-medium text-gray-600 hover:text-black py-2"
                  >
                    {link.name}
                  </a>
                  {link.hasDropdown && (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="p-2"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="pl-4 border-l border-gray-100 mt-2 space-y-2">
                    {PRODUCT_CATEGORIES.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-gray-500 hover:text-black"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/#contact"
              onClick={handleLinkClick}
              className="inline-flex justify-center px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}