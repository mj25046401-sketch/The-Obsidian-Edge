import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Sparkles, Copy, Check } from 'lucide-react';
import { STUDIO_INFO } from '../data/barberData';

interface LocationHoursSectionProps {
  onOpenBooking: () => void;
}

export function LocationHoursSection({ onOpenBooking }: LocationHoursSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STUDIO_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="location" 
      className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0D121B] to-[#0A0A0A] border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            <MapPin className="w-3.5 h-3.5 text-neutral-300" />
            Union County Flagship Studio
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
            Studio Location & Hours
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Conveniently positioned off Route 22 & Garden State Parkway with dedicated free parking. Designed as an unhurried, private luxury grooming enclave.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details, Hours, & Amenities */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#1F2937]/45 border border-neutral-800 shadow-xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-neutral-200" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                      Studio Address
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mt-0.5">
                      {STUDIO_INFO.address}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {STUDIO_INFO.cityStateZip}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  title="Copy full address"
                  className="p-2.5 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors flex items-center gap-1.5 text-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-neutral-800/80">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 border border-neutral-700/80 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-neutral-300" />
                  Directions
                </a>
                <a
                  href={`tel:${STUDIO_INFO.phoneFormatted}`}
                  className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2 border border-neutral-700/80 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-300" />
                  {STUDIO_INFO.phone}
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-2xl bg-[#1F2937]/45 border border-neutral-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-neutral-300" />
                  <h3 className="font-heading font-bold text-base uppercase text-white tracking-wide">
                    Hours of Operation
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open Today
                </span>
              </div>

              <div className="space-y-3">
                {STUDIO_INFO.hours.map((schedule, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-neutral-800/40 last:border-0">
                    <span className="text-neutral-300 font-medium">{schedule.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-mono">{schedule.time}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800">
                        {schedule.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Amenities */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-3">
                The Obsidian Studio Experience
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                {STUDIO_INFO.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Direct Booking Hook */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Interactive Embedded Google Map */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900 h-[380px] sm:h-[420px] w-full">
              <iframe
                title="The Obsidian Edge Barber Studio Location Map"
                src="https://maps.google.com/maps?q=1235+W+Chestnut+St,+Union,+NJ+07083&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 p-3.5 rounded-xl bg-neutral-950/90 border border-neutral-700 backdrop-blur-md shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  <span className="font-heading font-bold text-xs uppercase text-white tracking-wider">
                    The Obsidian Edge Studio
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  1235 W. Chestnut St, Union, NJ
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(STUDIO_INFO.fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-[10px] font-bold text-neutral-200 hover:text-white uppercase tracking-wider flex items-center gap-1"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Quick Map Action Footer */}
            <div className="p-4 rounded-xl bg-[#1F2937]/30 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Car className="w-4 h-4 text-neutral-300" />
                <span>Complimentary private parking directly in front of the studio.</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors"
              >
                Book Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
