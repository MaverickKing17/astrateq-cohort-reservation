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
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-lg shadow-slate-950/50 transition-all duration-200">
      {/* Top vibrant colorful gradient accent line to make the header pop on scroll */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500" />
      
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
            className="h-11 w-auto object-contain brightness-100"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6" id="header-nav-desktop">
          <button
            onClick={() => onScrollToSection('why-us')}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Technology
          </button>
          <button
            onClick={() => onScrollToSection('benefits')}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => onScrollToSection('tiers')}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Tiers
          </button>
          <button
            onClick={() => onScrollToSection('trust')}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Trust
          </button>
          <button
            onClick={() => onScrollToSection('faq')}
            className="text-xs font-bold tracking-widest uppercase text-slate-300 hover:text-cyan-400 transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* Action Button & Cohort Info */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Canadian Driver Cohort</span>
            <div className="h-4 w-px bg-slate-800"></div>
            <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider animate-pulse">Validation Open</span>
          </div>
          <button
            id="header-cta-btn"
            onClick={onScrollToForm}
            className="rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2.5 text-xs tracking-wider uppercase transition-all duration-250 shadow-md shadow-cyan-500/10 active:scale-95"
          >
            {mode === 'mode-b' ? 'Reserve Now' : 'Record Interest'}
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
            aria-expanded="false"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-xl" id="header-nav-mobile">
          <button
            onClick={() => {
              onScrollToSection('why-us');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Technology
          </button>
          <button
            onClick={() => {
              onScrollToSection('benefits');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Benefits
          </button>
          <button
            onClick={() => {
              onScrollToSection('tiers');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Tiers
          </button>
          <button
            onClick={() => {
              onScrollToSection('trust');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            Trust & Security
          </button>
          <button
            onClick={() => {
              onScrollToSection('faq');
              setIsOpen(false);
            }}
            className="block w-full text-left rounded-md px-3 py-2 text-xs font-bold tracking-widest uppercase text-slate-300 hover:bg-slate-900 hover:text-white"
          >
            FAQ
          </button>
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                onScrollToForm();
                setIsOpen(false);
              }}
              className="block w-full text-center rounded-md bg-cyan-500 hover:bg-cyan-400 py-3 text-xs font-bold uppercase tracking-wider text-slate-950"
            >
              {mode === 'mode-b' ? 'Reserve Now' : 'Record Interest'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
