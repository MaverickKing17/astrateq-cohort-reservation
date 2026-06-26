import { CheckCircle2, ShieldCheck, ArrowRight, Gauge, Cpu, MapPin, AlertTriangle, Sparkles } from 'lucide-react';
import { FunnelMode, DiagnosticResult } from '../types';

interface HeroSectionProps {
  mode: FunnelMode;
  diagnostic: DiagnosticResult;
  onScrollToForm: () => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function HeroSection({
  mode,
  diagnostic,
  onScrollToForm,
  onTriggerEvent,
}: HeroSectionProps) {
  const { score, region, vehicleType } = diagnostic;

  // Dynamic Score Range logic based on user guidelines and Light theme colors
  const getScoreAttributes = (s: number) => {
    if (s >= 90) {
      return {
        scoreLabel: 'Exceptional Readiness',
        recommendedTier: 'Founder Priority Review',
        confidence: 'Very High',
        riskProfile: 'Low-to-Moderate Seasonal Risk',
        badgeColor: 'bg-emerald-50 text-[#16B981] border border-emerald-100',
        ringColor: 'text-[#16B981] stroke-[#16B981]',
      };
    } else if (s >= 75) {
      return {
        scoreLabel: 'High Readiness',
        recommendedTier: 'Guardian Readiness Pro',
        confidence: 'High',
        riskProfile: 'Highway / Seasonal Considerations',
        badgeColor: 'bg-[#EEF6FB] text-[#0B7CFF] border border-[#D7E7F5]',
        ringColor: 'text-[#0B7CFF] stroke-[#0B7CFF]',
      };
    } else if (s >= 60) {
      return {
        scoreLabel: 'Moderate Readiness',
        recommendedTier: 'Readiness Access',
        confidence: 'Moderate',
        riskProfile: 'Mixed Driving Readiness Review',
        badgeColor: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
        ringColor: 'text-indigo-500 stroke-indigo-500',
      };
    } else {
      return {
        scoreLabel: 'Needs Attention',
        recommendedTier: 'Standard Validation Queue',
        confidence: 'Needs Review',
        riskProfile: 'Elevated Readiness Concerns',
        badgeColor: 'bg-amber-50 text-[#F59E0B] border border-amber-100',
        ringColor: 'text-[#F59E0B] stroke-[#F59E0B]',
      };
    }
  };

  const attributes = getScoreAttributes(score);

  // Circle path mathematics for score ring
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const handleCtaClick = () => {
    onTriggerEvent('primary_cta_clicked', { mode, score, classification: attributes.recommendedTier });
    onScrollToForm();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FC] to-[#EEF6FB] pt-16 pb-24 border-b border-[#D7E7F5]" id="hero">
      {/* Background ambient glows - refined for a light, soft look */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-cyan-200/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-blue-200/15 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Response Core */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left" id="hero-left">
            {/* Step Label */}
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#00BFEF] block mb-2.5 font-mono">
              Step 1: Your Result
            </span>

            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center space-x-2 self-start rounded-full border border-[#D7E7F5] bg-white px-3.5 py-1 text-xs font-semibold text-[#0B7CFF] shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-[#16B981] shrink-0" />
              <span className="tracking-wider uppercase text-[10px] font-bold">Diagnostic Complete</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl font-bold tracking-tight text-[#081A33] sm:text-5xl leading-tight mb-4">
              Your Founding Cohort <br/>
              <span className="bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] bg-clip-text text-transparent">Pathway Is Open</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm leading-relaxed text-[#475A70] mb-8 max-w-xl">
              Your readiness result suggests alignment with Astrateq Gadgets’ Canadian pre-launch validation priorities. Record your early-access interest in a software-led driver readiness intelligence experience built for Canadian roads.
            </p>

            {/* Core Funnel Form Link */}
            <div className="space-y-4 mb-5">
              <button
                id="hero-primary-cta"
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] text-white font-bold px-8 py-4 text-sm tracking-wider uppercase shadow-lg shadow-blue-500/20 hover:opacity-95 hover:scale-[1.01] hover:shadow-xl transition-all duration-200 active:scale-[0.99] group cursor-pointer"
              >
                <span>Record My Early-Access Interest</span>
                <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust line under CTA */}
            <div className="border-l-2 border-[#00BFEF] pl-4 py-0.5">
              <p className="text-xs text-[#7B8CA3] font-medium leading-relaxed">
                No payment required during validation · Not a final product purchase · Canadian driver cohort
              </p>
            </div>
          </div>

          {/* Center Column: Diagnostic Carryover Summary Card */}
          <div className="lg:col-span-4 flex flex-col justify-stretch" id="hero-diagnostic-card">
            <div className="flex flex-col justify-between h-full bg-white card-premium-gradient border border-[#A9D8F5] rounded-3xl p-7 shadow-[0_18px_50px_rgba(8,26,51,0.10)] relative overflow-hidden group transition-all duration-300">
              
              {/* Decorative top accent line for premium look */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7]" />
              
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-5 border-b border-[#D7E7F5] pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16B981] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#16B981] bg-[#EAFBF4] px-2.5 py-1 rounded-full border border-emerald-100/60">
                      Readiness Verified
                    </span>
                  </div>
                  <span className={`px-2.5 py-1 text-[10px] font-black rounded uppercase shrink-0 transition-all duration-300 ${attributes.badgeColor}`}>
                    {attributes.confidence} Confidence
                  </span>
                </div>

                {/* Score Circular Visualizer */}
                <div className="flex items-center justify-center py-6 border border-[#CFE0EF] mb-6 bg-gradient-to-r from-[#F8FBFF] to-[#F1F7FC] rounded-2xl shadow-xs">
                  <div className="relative flex items-center justify-center">
                    <svg className="h-20 w-20 transform -rotate-90">
                      {/* Grey background ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="stroke-[#EAF2FA] fill-none"
                        strokeWidth="5"
                      />
                      {/* Active colored ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className={`fill-none transition-all duration-500 ${attributes.ringColor}`}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Central Text */}
                    <div className="absolute text-center">
                      <span className="font-display text-2xl font-black text-[#081A33]">{score}</span>
                      <span className="text-[10px] text-[#7B8CA3] block font-bold leading-none">/100</span>
                    </div>
                  </div>
                  <div className="ml-4 text-left">
                    <span className="text-[9px] text-[#7B8CA3] font-mono tracking-wider uppercase block font-bold">Active Rating</span>
                    <h3 className="font-display text-sm font-bold text-[#081A33] transition-colors duration-300">
                      {attributes.scoreLabel}
                    </h3>
                    <p className="text-[11px] text-[#475A70]">
                      {score >= 75 ? 'Optimal GTA Calibration' : 'Validation Queue Tier'}
                    </p>
                  </div>
                </div>

                {/* Parameters list */}
                <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-2">
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#7B8CA3] uppercase font-bold tracking-wider">Readiness Score</p>
                    <p className="text-2xl font-mono font-bold text-[#081A33]">{score}/100</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#7B8CA3] uppercase font-bold tracking-wider">Recommended Cohort</p>
                    <p className="text-xs font-bold text-[#081A33] leading-tight mt-0.5">{attributes.recommendedTier}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#7B8CA3] uppercase font-bold tracking-wider">Risk Profile</p>
                    <p className="text-xs font-semibold text-[#475A70] leading-tight mt-0.5">{attributes.riskProfile}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-[#7B8CA3] uppercase font-bold tracking-wider">Region Context</p>
                    <p className="text-xs font-semibold text-[#475A70] leading-tight mt-0.5">{region}</p>
                  </div>
                </div>
              </div>

              {/* Supporting Copy */}
              <div className="mt-auto pt-4 border-t border-[#D7E7F5]">
                <p className="text-[10px] leading-relaxed text-[#475A70]">
                  GTA testing suggests compatible hardware setup for {vehicleType || 'standard vehicles'}. No direct cost for recording cohort placement.
                </p>
                
                {/* Visual Safeguard Badges */}
                <div className="grid grid-cols-3 gap-1.5 mt-3 text-[8px] font-bold text-[#7B8CA3] tracking-tight text-center">
                  <div className="px-1 py-1.5 rounded-lg bg-[#F8FBFF] border border-[#CFE0EF]">No Guaranteed Acceptance</div>
                  <div className="px-1 py-1.5 rounded-lg bg-[#F8FBFF] border border-[#CFE0EF]">No Compatibility Guarantee</div>
                  <div className="px-1 py-1.5 rounded-lg bg-[#F8FBFF] border border-[#CFE0EF]">Hardware Not Guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Canadian Context Card */}
          <div className="lg:col-span-3 flex flex-col justify-stretch animate-fade-in-up" id="hero-image-card">
            <div className="h-full rounded-3xl border border-[#CFE0EF] bg-white overflow-hidden flex flex-col justify-between relative group shadow-[0_10px_28px_rgba(8,26,51,0.07)] card-hover-effect transition-all duration-300">
              {/* Image Container with Gradients */}
              <div className="relative flex-1 min-h-[220px] overflow-hidden">
                <img
                  src="/src/assets/images/canadian_suv_hero_1782491247177.jpg"
                  alt="Astrateq Canadian Driver Intelligence Silver SUV on road"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                
                {/* Absolute overlay tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs border border-[#CFE0EF] rounded-lg px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold text-[#0B7CFF] flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16B981] animate-pulse" />
                  <span>Validation active</span>
                </div>
              </div>
              
              {/* Small info box at bottom */}
              <div className="p-5 bg-gradient-to-b from-[#FFFFFF] to-[#F8FBFF] border-t border-[#CFE0EF]">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#081A33]">
                  <span>Ontario Regional Sandbox</span>
                  <span className="text-[10px] text-[#00BFEF] font-bold tracking-wider">ACTIVE</span>
                </div>
                <p className="text-[10px] text-[#475A70] mt-1.5 leading-relaxed">
                  Testing vehicle CAN network signals in winter conditions to validate localized telemetry algorithms.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
