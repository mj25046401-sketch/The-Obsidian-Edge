import { useState } from 'react';
import { X, Download, Copy, Check, FileCode, ExternalLink, Code } from 'lucide-react';

interface SingleHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SingleHtmlModal({ isOpen, onClose }: SingleHtmlModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Fetch the public standalone HTML file or trigger download
    const link = document.createElement('a');
    link.href = '/theobsidianedge.html';
    link.download = 'theobsidianedge.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyCode = async () => {
    try {
      const res = await fetch('/theobsidianedge.html');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div 
      id="html-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="html-modal-card"
        className="relative w-full max-w-2xl bg-[#0F141F] border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden my-6"
      >
        <div className="px-6 py-5 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded bg-neutral-900 border border-neutral-700 text-white">
              <FileCode className="w-5 h-5 text-neutral-300" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase">
                Standalone Executable HTML5 File
              </h3>
              <p className="text-xs text-neutral-400">
                Self-contained HTML file with Tailwind CDN & Vanilla JS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-2">
            <p className="font-semibold text-white flex items-center gap-1.5">
              <Code className="w-4 h-4 text-neutral-400" />
              What is included in <code className="text-neutral-200 bg-neutral-900 px-1 py-0.5 rounded">theobsidianedge.html</code>:
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>Complete HTML5 document with dark-mode obsidian branding</li>
              <li>Embedded Razor Blade SVG Logo with metallic chrome reflections</li>
              <li>Hero section with headline, badges, and featured services quick strip</li>
              <li>Filterable Barbering Services tabs with pricing, durations & techniques</li>
              <li>About Master Barber Alex Coutinho & texture philosophy</li>
              <li>Interactive Before/After Transformation flip viewer</li>
              <li>Studio Location in Union, NJ with interactive Google Maps & Hours</li>
              <li>Interactive Booking Modal popup written in pure Vanilla JavaScript</li>
              <li>Zero local build steps required—double-click to open in any web browser</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="w-full sm:w-1/2 py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download .HTML File</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="w-full sm:w-1/2 py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-all flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire HTML Code'}</span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href="/theobsidianedge.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white underline font-medium"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open standalone HTML in new tab directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
