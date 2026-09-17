import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp, Scissors } from 'lucide-react';
import { STUDIO_INFO } from '../data/barberData';
import { BrandLogo, RazorBladeIcon } from './RazorLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenHtmlModal: () => void;
}

export function Footer({ onOpenBooking, onOpenHtmlModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black text-white border-t border-neutral-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo onClick={scrollToTop} />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Union, NJ's premier texture specialist and luxury barber studio. Master Barber Alex Coutinho delivers precision skin tapers, scissor flow cuts, and beard sculpts.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @theobsidianedge"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Obsidianedgenj"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenHtmlModal}
                className="text-[11px] font-mono px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
              >
                Download HTML
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Alex</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">Transformations</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Studio & Hours</a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-white hover:underline font-bold text-left">
                  Book Slot Online
                </button>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
              Specialties
            </span>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Precision Skin Fade & Low Tapers</li>
              <li>Korean & Curly Texture Perms</li>
              <li>Asian Hair Bulk Deconstructing</li>
              <li>Hot Lather Straight Razor Lineups</li>
              <li>Beard Sculpting & Hot Steam Towels</li>
            </ul>
          </div>

          {/* Studio Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block">
              Studio Location
            </span>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href={`tel:${STUDIO_INFO.phoneFormatted}`} className="hover:text-white">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{STUDIO_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-lg bg-neutral-100 hover:bg-white text-black font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Schedule Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} The Obsidian Edge. All Rights Reserved. Master Barber Alex Coutinho.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-neutral-600">Union, NJ 07083</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
