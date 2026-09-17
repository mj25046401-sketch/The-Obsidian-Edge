import { useState } from 'react';
import { Sparkles, ArrowRight, Eye, RefreshCw } from 'lucide-react';
import { TRANSFORMATIONS } from '../data/barberData';
import { TransformationItem } from '../types';

interface TransformationsGalleryProps {
  onOpenBooking: () => void;
}

export function TransformationsGallery({ onOpenBooking }: TransformationsGalleryProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  // Track which transformation card is showing "Before" or "After"
  const [viewState, setViewState] = useState<Record<string, 'after' | 'before'>>({});

  const tags = ['All', 'Texture Styling', 'Precision Fade', 'Beard Sculpting'];

  const filteredItems = selectedTag === 'All'
    ? TRANSFORMATIONS
    : TRANSFORMATIONS.filter(item => item.category === selectedTag);

  const toggleView = (id: string) => {
    setViewState(prev => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section 
      id="transformations" 
      className="py-20 md:py-28 bg-[#0A0A0A] border-t border-neutral-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
              Real Client Results
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              Hair Transformation Gallery
            </h2>
            <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-xl">
              Witness the power of precision shears, texture weight removal, and razor-sharp detailing. Click on any card to toggle between Before and After.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {tags.map((tag) => (
              <button
                key={tag}
                id={`filter-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedTag(tag)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-[#1F2937]/60 text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const currentView = viewState[item.id] || 'after';
            const displayImage = currentView === 'before' ? item.beforeImage : item.afterImage;

            return (
              <div 
                key={item.id}
                id={`trans-card-${item.id}`}
                className="group rounded-2xl bg-[#1F2937]/35 border border-neutral-800/90 overflow-hidden hover:border-neutral-600 transition-all duration-300 shadow-xl flex flex-col"
              >
                {/* Image Container with Interactive Before/After Toggle */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={displayImage}
                    alt={`${item.title} - ${currentView}`}
                    className="w-full h-full object-cover object-center filter contrast-105 transition-all duration-500 group-hover:scale-103"
                  />
                  
                  {/* Status Pill Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg ${
                      currentView === 'after' 
                        ? 'bg-neutral-100 text-neutral-950 border border-white' 
                        : 'bg-neutral-900/90 text-neutral-300 border border-neutral-700'
                    }`}>
                      {currentView === 'after' ? '✨ After • Cut & Styled' : '📷 Before • Consultation'}
                    </span>
                  </div>

                  {/* Toggle Button */}
                  <button
                    id={`toggle-btn-${item.id}`}
                    onClick={() => toggleView(item.id)}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-neutral-700 flex items-center gap-1.5 transition-all shadow-lg active:scale-95"
                    title="Click to toggle between Before and After"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-neutral-300 animate-spin-hover" />
                    <span>Flip to {currentView === 'after' ? 'Before' : 'After'}</span>
                  </button>

                  {/* Technique Tag at bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-neutral-200 border border-neutral-800 text-[11px] font-medium">
                      {item.technique}
                    </span>
                    <span className="text-[11px] text-neutral-400 bg-black/60 px-2 py-0.5 rounded">
                      @theobsidianedge
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => toggleView(item.id)}
                      className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Toggle View
                    </button>
                    <button
                      id={`book-trans-${item.id}`}
                      onClick={onOpenBooking}
                      className="text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white flex items-center gap-1.5 group/btn"
                    >
                      <span>Get This Cut</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-white" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transformation Banner CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#1F2937]/70 via-[#1F2937]/40 to-[#0A0A0A] border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-bold text-xl text-white">
              Ready to redefine your silhouette?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Slots fill up 1–2 weeks in advance. Book early to secure your preferred day and time.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap px-7 py-3.5 rounded-lg text-xs uppercase font-bold tracking-widest text-black bg-white hover:bg-neutral-200 transition-colors shadow-lg"
          >
            Claim Your Spot
          </button>
        </div>

      </div>
    </section>
  );
}
