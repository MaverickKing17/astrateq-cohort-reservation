import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { FunnelMode } from '../types';

interface HeaderProps {
  mode: FunnelMode;
  onScrollToForm: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ mode, onScrollToForm, onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#D7E7F5] shadow-xs transition-all duration-200">
      {/* Top gradient accent line using primary CTA colors */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7]" />
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo and Tagline */}
        <div 
          className="flex cursor-pointer items-center" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          id="header-logo-container"
        >
          <img 
            src="https://i.ibb.co/zhgDcPJM/Astrateq.png" 
            alt="Astrateq Gadgets" 
            className="h-11 w-auto object-contain brightness-100 filter drop-shadow-xs"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6" id="header-nav-desktop">
          <button
            onClick={() => onScrollToSection('why-us')}
            className="text-xs font-bold tracking-widest uppercase text-[#475A70] hover:text-[#0B7CFF] transition-colors"
          >
            Technology
          </button>
          <button
            onClick={() => onScrollToSection('benefits')}
            className="text-xs font-bold tracking-widest uppercase text-[#475A70] hover:text-[#0B7CFF] transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => onScrollToSection('tiers')}
            className="text-xs font-bold tracking-widest uppercase text-[#475A70] hover:text-[#0B7CFF] transition-colors"
          >
            Tiers
          </button>
          <button
            onClick={() => onScrollToSection('trust')}
            className="text-xs font-bold tracking-widest uppercase text-[#475A70] hover:text-[#0B7CFF] transition-colors"
          >
            Trust
          </button>
          <button
            onClick={() => onScrollToSection('faq')}
            className="text-xs font-bold tracking-widest uppercase text-[#475A70] hover:text-[#0B7CFF] transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Action Button & Cohort Info */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#7B8CA3]">Canadian Driver Cohort</span>
            <div className="h-4 w-px bg-[#D7E7F5]"></div>
            <span className="text-[10px] font-extrabold text-[#0B7CFF] uppercase tracking-wider animate-pulse">Validation Open</span>
          </div>
          <button
            id="header-cta-btn"
            onClick={onScrollToForm}
            className="rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] hover:opacity-95 text-white font-bold px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-250 shadow-md shadow-blue-500/15 active:scale-95 cursor-pointer"
          >
            {mode === 'mode-b' ? 'Reserve Now' : 'Record Interest'}
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33] focus:outline-none"
            aria-expanded="false"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#D7E7F5] bg-[#FFFFFF]/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-lg" id="header-nav-mobile">
          <button
            onClick={() => {
              onScrollToSection('why-us');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-xl px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33]"
          >
            Technology
          </button>
          <button
            onClick={() => {
              onScrollToSection('benefits');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-xl px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33]"
          >
            Benefits
          </button>
          <button
            onClick={() => {
              onScrollToSection('tiers');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-xl px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33]"
          >
            Tiers
          </button>
          <button
            onClick={() => {
              onScrollToSection('trust');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-xl px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33]"
          >
            Trust & Security
          </button>
          <button
            onClick={() => {
              onScrollToSection('faq');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-xl px-3 py-2.5 text-xs font-bold tracking-widest uppercase text-[#475A70] hover:bg-[#EEF6FB] hover:text-[#081A33]"
          >
            FAQ
          </button>
          <div className="pt-4 border-t border-[#D7E7F5]">
            <button
               onClick={() => {
                onScrollToForm();
                setIsOpen(false);
              }}
              className="block w-full text-center rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md cursor-pointer"
            >
              {mode === 'mode-b' ? 'Reserve Now' : 'Record Interest'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
