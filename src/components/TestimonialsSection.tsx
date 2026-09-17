import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/barberData';

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#0A0A0A] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Verified Client Impressions
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-1">
              Precision That Speaks
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-neutral-200">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <span className="text-xs font-bold text-white">5.0 Star Average</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#1F2937]/35 border border-neutral-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-white">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">{t.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-neutral-400">{t.location} • {t.service}</p>
                </div>
                <span className="p-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
