import { useState } from 'react';
import { Clock, Scissors, Check, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { ServiceCategory, BarberService } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceId: string) => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');

  const categories: { id: ServiceCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Services', icon: '⚡' },
    { id: 'cuts-fades', label: 'Precision Cut & Fade', icon: '✂️' },
    { id: 'texture-perms', label: 'Texture Styling & Perms', icon: '🌊' },
    { id: 'beard-lineup', label: 'Beard Sculpt & Razor Line', icon: '🪒' },
    { id: 'vip-grooming', label: 'Complete VIP Grooming', icon: '👑' },
  ];

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section 
      id="services" 
      className="py-20 md:py-28 bg-[#0A0A0A] border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
            Barber Menu & Craftsmanship
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Specialized Barbering Services
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every appointment begins with a personal texture diagnostic and cranial mapping to ensure your fade, weight line, and texture flow effortlessly.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 sm:gap-3">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`services-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-neutral-100 text-neutral-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                    : 'bg-[#1F2937]/50 text-neutral-300 hover:text-white hover:bg-[#1F2937] border border-neutral-800'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-item-${service.id}`}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#1F2937]/40 hover:bg-[#1F2937]/75 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 backdrop-blur-md shadow-xl hover:shadow-2xl group"
            >
              {/* Popular / VIP Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-400 text-black text-[10px] font-black uppercase tracking-widest shadow-md">
                  Signature
                </div>
              )}

              <div>
                {/* Header: Title, Price, Duration */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-neutral-100 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-500" />
                        {service.durationMinutes} Minutes
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-black text-2xl text-white">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Technique Highlights Chips */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                    Technique Highlights:
                  </p>
                  <ul className="space-y-1.5">
                    {service.techniqueHighlights.map((tech, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <button
                  id={`btn-book-${service.id}`}
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-widest text-white bg-neutral-900 group-hover:bg-white group-hover:text-black border border-neutral-700/80 group-hover:border-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation Guarantee Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                Need a Custom Hair Transformation Consultation?
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm mt-0.5">
                Unsure if a perm, taper, or shear texture cut suits your hair density? Alex provides a free 5-minute pre-cut diagnostic.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('texture-styling')}
            className="whitespace-nowrap px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-neutral-200 hover:bg-white transition-colors"
          >
            Consult with Alex
          </button>
        </div>

      </div>
    </section>
  );
}
