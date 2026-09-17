import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, Calendar, Phone, FileCode, MapPin } from 'lucide-react';
import { BrandLogo } from './RazorLogo';
import { STUDIO_INFO } from '../data/barberData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenHtmlModal: () => void;
}

export function Navbar({ onOpenBooking, onOpenHtmlModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT ALEX', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'TRANSFORMATIONS', href: '#transformations' },
    { name: 'STUDIO LOCATION', href: '#location' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs tracking-widest font-semibold text-neutral-300 hover:text-white transition-colors duration-200 relative group py-1 uppercase"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Standalone HTML File preview button */}
          <button
            id="nav-export-html-btn"
            onClick={onOpenHtmlModal}
            title="View or download standalone single-file HTML code"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-medium tracking-wider text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 rounded-md transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-neutral-400" />
            <span>Single HTML</span>
          </button>

          {/* Book Appointment CTA Button */}
          <button
            id="nav-book-appointment-btn"
            onClick={onOpenBooking}
            className="relative group overflow-hidden px-5 py-2.5 rounded-md font-heading font-bold text-xs uppercase tracking-widest text-neutral-950 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 hover:from-white hover:to-neutral-200 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-neutral-900" />
              Book Appointment
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            id="mobile-quick-book-btn"
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider text-black bg-neutral-100"
          >
            Book
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0A0A0A]/98 border-b border-neutral-800 px-6 py-6 shadow-2xl backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 pb-2 border-b border-neutral-800">
              <MapPin className="w-3.5 h-3.5 text-neutral-300" />
              <span>{STUDIO_INFO.fullAddress}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold tracking-wider text-neutral-200 hover:text-white py-2 border-b border-neutral-900"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-neutral-200 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment Now
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phoneFormatted}`}
                  className="py-2.5 px-3 rounded text-center text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  Call Studio
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenHtmlModal();
                  }}
                  className="py-2.5 px-3 rounded text-center text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 flex items-center justify-center gap-1.5"
                >
                  <FileCode className="w-3.5 h-3.5 text-neutral-400" />
                  HTML File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
