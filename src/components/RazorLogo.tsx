export function RazorBladeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 120 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Razor Blade Icon"
    >
      <defs>
        <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#D1D5DB" />
          <stop offset="50%" stopColor="#9CA3AF" />
          <stop offset="75%" stopColor="#E5E7EB" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        <linearGradient id="metallicSheen" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#4B5563" />
          <stop offset="50%" stopColor="#F3F4F6" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
      
      {/* Outer Razor Blade Body */}
      <rect 
        x="6" 
        y="8" 
        width="108" 
        height="44" 
        rx="4" 
        fill="url(#chromeGradient)" 
        stroke="#E5E7EB" 
        strokeWidth="1.5"
      />
      
      {/* Outer Razor Edge Bevel Highlights */}
      <line x1="8" y1="11" x2="112" y2="11" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.8" />
      <line x1="8" y1="49" x2="112" y2="49" stroke="#111827" strokeWidth="1" strokeOpacity="0.9" />
      
      {/* Corner Notches */}
      <path d="M 6 18 L 12 18 L 12 42 L 6 42" fill="#0A0A0A" />
      <path d="M 114 18 L 108 18 L 108 42 L 114 42" fill="#0A0A0A" />
      
      {/* Center Razor Slot Cutout with Heart/Diamond Notch */}
      {/* Outer center slot */}
      <rect x="24" y="27" width="72" height="6" rx="3" fill="#0A0A0A" />
      
      {/* Left Circle Hole */}
      <circle cx="34" cy="30" r="4" fill="#0A0A0A" />
      
      {/* Center Stylized Heart/Diamond Cutout as seen in the Obsidian Edge logo */}
      <path 
        d="M 60 36 C 58 36 54 32 54 28 C 54 25 56.5 23 59 25 C 60 26 60 26 60 26 C 60 26 60 26 61 25 C 63.5 23 66 25 66 28 C 66 32 62 36 60 36 Z" 
        fill="#0A0A0A"
      />
      
      {/* Right Circle Hole */}
      <circle cx="86" cy="30" r="4" fill="#0A0A0A" />
      
      {/* Subtle rivet holes */}
      <circle cx="20" cy="30" r="1.5" fill="#4B5563" />
      <circle cx="100" cy="30" r="1.5" fill="#4B5563" />
    </svg>
  );
}

export function BrandLogo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      id="brand-logo"
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      <div className="relative p-1 rounded transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
        <RazorBladeIcon className="w-12 h-6 sm:w-14 sm:h-7" />
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-black tracking-wider text-lg sm:text-xl text-white group-hover:text-neutral-200 transition-colors">
          THE OBSIDIAN EDGE
        </span>
        <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-neutral-400 uppercase -mt-0.5">
          Alex Coutinho • Barber & Texture
        </span>
      </div>
    </div>
  );
}
