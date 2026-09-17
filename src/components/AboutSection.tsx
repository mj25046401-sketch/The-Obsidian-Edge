import { Scissors, Award, Sparkles, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/barberData';

export function AboutSection() {
  const corePillars = [
    {
      title: 'Texture & Hair Density Diagnostics',
      desc: 'No two heads of hair are alike. Alex inspects hair growth angles, cowlicks, density, and natural wave patterns before scissors ever touch your hair.'
    },
    {
      title: 'Japanese Shear & Point-Cutting Artistry',
      desc: 'Beyond standard clippers, Alex specializes in precision dry-cutting shears to remove heavy bulk without causing frizz, creating weightless flow.'
    },
    {
      title: 'Low-Maintenance Perms & Waves',
      desc: 'Specialized modern perms formulated to give pin-straight or lifeless hair effortless wake-up-and-go volume and textured fringe.'
    },
    {
      title: 'Straight Razor Mastery & Hot Towels',
      desc: 'Traditional barbering honor meets modern luxury with hot lather, botanical eucalyptus steam towels, and razor-sharp edge definition.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 bg-gradient-to-b from-[#0A0A0A] via-[#0E131F] to-[#0A0A0A] border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Stylized Portrait & Barber Aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80"
                alt="Alex Coutinho - NJ Master Barber & Texture Specialist"
                className="w-full h-[450px] sm:h-[520px] object-cover object-top filter contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-neutral-950/90 border border-neutral-800 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-black text-xl text-white tracking-wide">
                      ALEX COUTINHO
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Founder & Master Barber • The Obsidian Edge
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white">
                    <Scissors className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-300">
                  <span>Union, New Jersey</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting New Clients
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 p-4 rounded-xl bg-neutral-900 border border-neutral-700 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-white">
                  <Award className="w-6 h-6 text-neutral-200" />
                </div>
                <div>
                  <p className="font-heading font-black text-2xl text-white leading-none">12+</p>
                  <p className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mt-0.5">
                    Years Precision Barbering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-300 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
              The Artisan Behind The Blade
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight leading-tight">
              Elevating Personal Style Through Precision Texture & Form
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded by Master Barber <strong>Alex Coutinho</strong>, <em>The Obsidian Edge</em> was built on a simple conviction: a great haircut isn't just about cutting hair short—it is an architectural craft tailored to your head shape, facial structure, and hair behavior.
              </p>
              <p>
                Alex has earned reputation as Northern New Jersey's go-to texture specialist. Whether re-engineering unruly straight Asian hair, sculpting defined curly perms, or tapering tight fades with surgical straight-razor lines, Alex treats every cut as an individualized transformation.
              </p>
            </div>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#1F2937]/35 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-neutral-300 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div className="text-center sm:text-left">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white">4,800+</span>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">Cuts Perfected</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white">5.0 ★</span>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">Google & Booksy</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="font-heading font-black text-2xl sm:text-3xl text-white">1-on-1</span>
                <p className="text-[11px] text-neutral-400 uppercase tracking-wider mt-1">VIP Private Studio</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
