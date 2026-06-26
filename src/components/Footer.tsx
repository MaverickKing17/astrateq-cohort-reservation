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
    <footer className="bg-white border-t border-[#D7E7F5]" id="footer-section">
      {/* Final CTA Banner (Selective Dark Navy Contrast) */}
      <div className="bg-gradient-to-b from-[#081A33] to-[#030B18] relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 text-center border-t border-b border-[#0B7CFF]/15" id="final-cta-panel">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-3xl relative z-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            Shape the Future of Canadian Driver Intelligence
          </h2>
          <p className="mx-auto max-w-xl text-xs text-slate-300 leading-relaxed mb-8">
            Join other forward-looking Canadian drivers in validating a software-led approach to driver readiness. No payment is required to record your early-access interest today.
          </p>

          <button
            onClick={handleCtaClick}
            id="footer-primary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] px-8 py-4 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer uppercase tracking-wider font-mono"
          >
            Record My Early-Access Interest
          </button>

          <p className="mt-4 text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
            No payment required during validation · Not a final product purchase · Canadian driver cohort
          </p>
        </div>
      </div>

      {/* Directory Links & Copyright */}
      <div className="bg-[#F8FBFF] border-t border-[#D7E7F5]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-[#475A70] text-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo Brand */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="https://i.ibb.co/zhgDcPJM/Astrateq.png" 
                  alt="Astrateq Gadgets" 
                  className="h-11 w-auto object-contain brightness-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] leading-relaxed text-[#475A70]">
                Developing privacy-first driver readiness intelligence optimized for Ontario corridors and broader Canadian environments.
              </p>
            </div>

            {/* Location / Context */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-[#081A33] text-xs uppercase tracking-wider">Validation Zone</h4>
              <ul className="space-y-2 text-[11px] text-[#475A70]">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-3.5 w-3.5 text-[#0B7CFF] shrink-0" />
                  <span>Ontario / GTA Corridor, Canada</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="h-3.5 w-3.5 text-[#0B7CFF] shrink-0" />
                  <span>East-Coast Logistics Sync</span>
                </li>
              </ul>
            </div>

            {/* Funnel Links */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-[#081A33] text-xs uppercase tracking-wider">Cohort Funnel</h4>
              <ul className="space-y-2 text-[11px] text-[#475A70]">
                <li>
                  <span className="hover:text-[#0B7CFF] hover:underline transition-all cursor-pointer">1. Lead Diagnostic Score</span>
                </li>
                <li>
                  <span className="hover:text-[#0B7CFF] hover:underline transition-all cursor-pointer">2. Cohort Classification</span>
                </li>
                <li>
                  <span className="font-bold text-[#0B7CFF] hover:underline transition-all cursor-pointer">3. Active Cohort Reservation</span>
                </li>
              </ul>
            </div>

            {/* Contact / Inquiries */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-[#081A33] text-xs uppercase tracking-wider">Validation Inquiry</h4>
              <ul className="space-y-2 text-[11px] text-[#475A70]">
                <li className="flex items-center space-x-2">
                  <Mail className="h-3.5 w-3.5 text-[#0B7CFF]" />
                  <span className="hover:text-[#0B7CFF] hover:underline transition-all cursor-pointer">Astrateq Cohort Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-3.5 w-3.5 text-[#0B7CFF]" />
                  <span className="hover:text-[#0B7CFF] hover:underline transition-all cursor-pointer">+1 (800) ASTRATEQ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="border-t border-[#D7E7F5] pt-8 text-[11px] text-[#7B8CA3] space-y-4 max-w-4xl">
            <p className="leading-relaxed">
              <strong className="text-[#475A70] uppercase tracking-wide block mb-1">Pre-Launch Legal Sandbox Disclaimer</strong>
              Astrateq Gadgets is currently in an early-stage consumer demand consumer validation phase. All graphics, product specifications, pricing estimates, and timelines depicted on this landing page are for validation testing and product market research purposes only. No actual hardware is commercially available, nor do we guarantee future market availability, manufacturing, or distribution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] pt-4 border-t border-[#D7E7F5]/40">
              <p>© 2026 Astrateq Gadgets Canada Inc. All rights reserved.</p>
              <div className="flex space-x-4">
                <span className="hover:text-[#0B7CFF] hover:underline transition-colors cursor-pointer">Privacy Charter</span>
                <span className="hover:text-[#0B7CFF] hover:underline transition-colors cursor-pointer">Reservation Policy</span>
                <span className="hover:text-[#0B7CFF] hover:underline transition-colors cursor-pointer">Validation Terms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
