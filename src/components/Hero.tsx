import { MouseEvent } from 'react';
import { Scissors, MapPin, Sparkles, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/barberData';
import { BarberService } from '../types';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onSelectService: (service: BarberService) => void;
}

export function Hero({ onOpenBooking, onSelectService }: HeroProps) {
  const featuredServices = SERVICES.filter(s => s.featuredInHero).slice(0, 4);

  const handleExploreServices = (e: MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('services');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0D1117] to-[#0A0A0A]"
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-neutral-700/10 via-neutral-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-neutral-800/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-900/90 text-neutral-200 border border-neutral-700/70 shadow-sm backdrop-blur-sm">
                <Scissors className="w-3.5 h-3.5 text-neutral-300" />
                Texture Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-900/90 text-neutral-200 border border-neutral-700/70 shadow-sm backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                Union, NJ
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-neutral-900/70 text-neutral-400 border border-neutral-800">
                <Sparkles className="w-3 h-3 text-neutral-400" />
                Master Barber Alex Coutinho
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-white uppercase">
                TRANSFORM YOUR LOOK.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                  MASTER PRECISION.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Union, NJ's premier texture specialist and barber <strong className="text-white font-semibold">Alex Coutinho</strong>. Crafting sharp fades, custom texture, and precision beard sculpts.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-book-slot-btn"
                onClick={() => onOpenBooking()}
                className="relative group px-8 py-4 rounded-md font-heading font-bold text-sm sm:text-base uppercase tracking-widest text-black bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-300 hover:from-white hover:to-neutral-100 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                <span>Book Your Slot</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={handleExploreServices}
                className="px-7 py-4 rounded-md font-heading font-semibold text-sm sm:text-base uppercase tracking-widest text-neutral-200 hover:text-white bg-[#1F2937]/80 hover:bg-[#1F2937] border border-neutral-700/80 hover:border-neutral-500 shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-2 flex items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-sm">4.9★</span>
                <span>(380+ Verified Reviews)</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-neutral-700" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-neutral-300" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Master Barber in Action Visual & Precision Tools */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85"
                  alt="Master Barber Alex Coutinho precision haircut and texture styling in Union NJ"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Gradient overlays for edgy contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-black/30" />

                {/* Barber Identity Badge overlay inside card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-700/70 shadow-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Master Barber</p>
                    <p className="text-base font-bold text-white tracking-wide">Alex Coutinho</p>
                    <p className="text-[11px] text-neutral-300">Texture Specialist • Union, NJ</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700 text-[11px] font-semibold text-neutral-200">
                      Private Studio
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 100% Guaranteed Services Badge (Matching Screenshot) */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 p-3 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 text-black shadow-[0_10px_25px_rgba(0,0,0,0.6)] border-2 border-white/40 flex items-center gap-2 transform -rotate-6 hover:rotate-0 transition-transform">
                <ShieldCheck className="w-5 h-5 text-black" />
                <div className="text-[10px] leading-tight font-black uppercase tracking-wider text-black">
                  100% Guaranteed<br />Precision
                </div>
              </div>

              {/* Floating Straight Razor & Shears Graphic Badge (Top-Right) */}
              <div className="hidden sm:flex absolute -top-3 -right-4 p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md shadow-xl items-center gap-2.5 text-xs text-neutral-300">
                <Scissors className="w-4 h-4 text-white" />
                <span className="font-semibold tracking-wide">Japanese Cobalt Shears</span>
              </div>

            </div>
          </div>

        </div>

        {/* Featured Services Strip (Matching screenshot layout directly under hero) */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Featured Services
            </h2>
            <a 
              href="https://instagram.com/theobsidianedge" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors"
            >
              {STUDIO_INFO.instagram}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                id={`featured-card-${service.id}`}
                onClick={() => {
                  onSelectService(service);
                  onOpenBooking(service.id);
                }}
                className="group cursor-pointer p-4 rounded-xl bg-[#1F2937]/50 hover:bg-[#1F2937]/90 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 backdrop-blur-sm shadow-md hover:shadow-xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-white group-hover:text-neutral-200 transition-colors">
                      {service.title}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-neutral-900 px-2 py-0.5 rounded border border-neutral-700">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                  <span>{service.durationMinutes} mins</span>
                  <span className="flex items-center gap-1 font-semibold text-neutral-200 group-hover:translate-x-0.5 transition-transform">
                    Book Now <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
