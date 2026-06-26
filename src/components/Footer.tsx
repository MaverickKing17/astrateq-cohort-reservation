import { ShieldCheck, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { FunnelMode } from '../types';

interface FooterProps {
  mode: FunnelMode;
  onScrollToForm: () => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function Footer({ mode, onScrollToForm, onTriggerEvent }: FooterProps) {
  
  const handleCtaClick = () => {
    onTriggerEvent('final_cta_clicked', { mode });
    onScrollToForm();
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900" id="footer-section">
      {/* Final CTA Banner */}
      <div className="relative overflow-hidden border-b border-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 text-center" id="final-cta-panel">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-3xl relative z-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            Ready to record your founding cohort interest?
          </h2>
          <p className="mx-auto max-w-xl text-xs text-slate-300 leading-relaxed mb-8">
            Your readiness result suggests alignment with Astrateq Gadgets’ pre-launch validation priorities. Continue to record your early-access interest for the Canadian founding cohort.
          </p>

          <button
            onClick={handleCtaClick}
            id="footer-primary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-xs font-bold text-slate-950 shadow-xl hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            {mode === 'mode-b' ? 'Reserve My Founding Cohort Position' : 'Record My Early-Access Interest'}
          </button>

          <p className="mt-4 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
            No payment required during validation · Not a final product purchase · Canadian driver cohort
          </p>
        </div>
      </div>

      {/* Directory Links & Copyright */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-slate-400 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-cyan-500 to-sky-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-display font-extrabold text-white">Astrateq Gadgets</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Developing privacy-first driver readiness intelligence optimized for Ontario corridors and broader Canadian environments.
            </p>
          </div>

          {/* Location / Context */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 text-xs uppercase tracking-wider">Validation Zone</h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                <span>Ontario / GTA Corridor, Canada</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-3.5 w-3.5 text-cyan-500 shrink-0" />
                <span>East-Coast Logistics Sync</span>
              </li>
            </ul>
          </div>

          {/* Funnel Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 text-xs uppercase tracking-wider">Cohort Funnel</h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">1. Lead Diagnostic Score</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">2. Cohort Classification</span>
              </li>
              <li>
                <span className="font-bold text-cyan-400">3. Active Cohort Reservation</span>
              </li>
            </ul>
          </div>

          {/* Contact / Inquiries */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-200 text-xs uppercase tracking-wider">Validation Inquiry</h4>
            <ul className="space-y-2 text-[11px] text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-cyan-500" />
                <span>founding-cohort@astrateq.ca</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-cyan-500" />
                <span>+1 (800) ASTRATEQ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-slate-900 pt-8 text-[11px] text-slate-500 space-y-4 max-w-4xl">
          <p className="leading-relaxed">
            <strong className="text-slate-400 uppercase tracking-wide block mb-1">Pre-Launch Legal Sandbox Disclaimer</strong>
            Astrateq Gadgets is currently in an early-stage consumer demand validation phase. All graphics, product specifications, pricing estimates, and timelines depicted on this landing page are for validation testing and product market research purposes only. No actual hardware is commercially available, nor do we guarantee future market availability, manufacturing, or distribution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] pt-4 border-t border-slate-900/40">
            <p>© 2026 Astrateq Gadgets Canada Inc. All rights reserved.</p>
            <div className="flex space-x-4">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Charter</span>
              <span className="hover:text-white transition-colors cursor-pointer">Reservation Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Validation Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
