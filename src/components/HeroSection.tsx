import { CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Gauge, Cpu, MapPin, AlertTriangle } from 'lucide-react';
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
  const { score, classification, confidence, riskProfile, region, vehicleType } = diagnostic;

  // Circle path mathematics for score ring
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const handleCtaClick = () => {
    onTriggerEvent('primary_cta_clicked', { mode, score, classification });
    onScrollToForm();
  };

  // Color mappings based on score classification
  const getScoreColor = () => {
    if (score >= 90) return 'text-emerald-400 stroke-emerald-400';
    if (score >= 70) return 'text-cyan-400 stroke-cyan-400';
    return 'text-amber-400 stroke-amber-400';
  };

  const getConfidenceBadge = () => {
    switch (confidence) {
      case 'High':
        return <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded text-[11px] font-semibold">High</span>;
      case 'Moderate':
        return <span className="text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-[11px] font-semibold">Moderate</span>;
      default:
        return <span className="text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded text-[11px] font-semibold">Needs Review</span>;
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-12 pb-20 border-b border-slate-900" id="hero">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Response Core */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left" id="hero-left">
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center space-x-2 self-start rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-400 shadow-sm shadow-cyan-500/5">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="tracking-wider uppercase">DIAGNOSTIC COMPLETE</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight mb-4">
              Your Founding Cohort <br/>
              <span className="text-cyan-400">Pathway Is Open</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-xl">
              Your readiness result suggests alignment with Astrateq Gadgets’ Canadian pre-launch validation priorities. Continue to record interest and shape privacy-first intelligence for Canadian roads.
            </p>

            {/* Core Funnel Form Link */}
            <div className="space-y-4 mb-4">
              <button
                id="hero-primary-cta"
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-cyan-500 text-slate-950 font-bold px-8 py-4 text-sm tracking-wider uppercase shadow-xl shadow-cyan-500/10 transition-all duration-200 hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] group cursor-pointer"
              >
                <span>
                  {mode === 'mode-b'
                    ? 'Reserve My Founding Cohort Position'
                    : 'Record My Early-Access Interest'}
                </span>
                <ArrowRight className="h-4 w-4 text-slate-950 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust line under CTA */}
            <p className="text-xs text-slate-400 flex flex-wrap items-center gap-1.5 font-medium border-l-2 border-cyan-500/50 pl-3">
              <span>No payment required during validation</span>
              <span className="text-slate-600">•</span>
              <span>Early-access interest only</span>
              <span className="text-slate-600">•</span>
              <span>Canadian driver cohort</span>
            </p>
          </div>

          {/* Center Column: Diagnostic Carryover Summary Card */}
          <div className="lg:col-span-4 flex flex-col justify-stretch" id="hero-diagnostic-card">
            <div className="flex flex-col justify-between h-full bg-slate-900 border border-cyan-500/30 rounded-xl p-6 shadow-2xl shadow-cyan-500/10 relative overflow-hidden group transition-all">
              
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Your Readiness Result Summary</h3>
                  <span className="px-2 py-1 bg-cyan-500 text-slate-950 text-[10px] font-black rounded uppercase shrink-0">
                    {confidence} Confidence
                  </span>
                </div>

                {/* Score Circular Visualizer */}
                <div className="flex items-center justify-center py-5 border-b border-slate-800/40 mb-5 bg-slate-950/40 rounded-xl">
                  <div className="relative flex items-center justify-center">
                    <svg className="h-20 w-20 transform -rotate-90">
                      {/* Grey background ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className="stroke-slate-800 fill-none"
                        strokeWidth="5"
                      />
                      {/* Active colored ring */}
                      <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        className={`fill-none transition-all duration-1000 ${getScoreColor()}`}
                        strokeWidth="6"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Central Text */}
                    <div className="absolute text-center">
                      <span className="font-display text-xl font-black text-white">{score}</span>
                      <span className="text-[10px] text-slate-500 block font-semibold leading-none">/100</span>
                    </div>
                  </div>
                  <div className="ml-4 text-left">
                    <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase block">Active Rating</span>
                    <h3 className="font-display text-sm font-bold text-white">Vehicle Readiness</h3>
                    <p className="text-[11px] text-slate-400">{score >= 80 ? 'Optimal GTA Calibration' : 'Queue tier'}</p>
                  </div>
                </div>

                {/* Parameters list */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Readiness Score</p>
                    <p className="text-2xl font-mono font-bold text-white">{score}/100</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Classification</p>
                    <p className="text-sm font-semibold text-white truncate">{classification.replace(' Cohort', '')}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Risk Profile</p>
                    <p className="text-sm font-semibold text-white">{riskProfile}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Region Context</p>
                    <p className="text-sm font-semibold text-white">{region}</p>
                  </div>
                </div>
              </div>

              {/* Supporting Copy */}
              <div className="mt-auto pt-4 border-t border-slate-800">
                <p className="text-[10px] leading-relaxed text-slate-400">
                  GTA testing suggests compatible hardware setup for {vehicleType || 'standard vehicles'}. No direct cost for recording cohort placement.
                </p>
                
                {/* Visual Safeguard Badges */}
                <div className="grid grid-cols-3 gap-1 mt-3 text-[8px] font-medium text-slate-500 tracking-tight text-center">
                  <div className="px-1 py-0.5 rounded bg-slate-950/30 border border-slate-800/30">No Guaranteed Acceptance</div>
                  <div className="px-1 py-0.5 rounded bg-slate-950/30 border border-slate-800/30">No Compatibility Guarantee</div>
                  <div className="px-1 py-0.5 rounded bg-slate-950/30 border border-slate-800/30">Hardware Not Guaranteed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Canadian Context Card */}
          <div className="lg:col-span-3 flex flex-col justify-stretch animate-fade-in-up" id="hero-image-card">
            <div className="h-full rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden flex flex-col justify-between relative group shadow-xl">
              {/* Image Container with Gradients */}
              <div className="relative flex-1 min-h-[220px] overflow-hidden">
                <img
                  src="/src/assets/images/canadian_suv_hero_1782491247177.jpg"
                  alt="Astrateq Canadian Driver Intelligence Silver SUV on road"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Ambient vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                <div className="absolute inset-0 bg-slate-950/10" />

                {/* Local Climate Overlays */}
                <div className="absolute top-4 right-4 flex flex-col items-end space-y-1">
                  <span className="text-[10px] bg-slate-950/85 text-slate-200 border border-slate-800/60 font-mono px-2 py-0.5 rounded backdrop-blur-xs shadow-sm">
                    GTA Corridor Tested
                  </span>
                  <span className="text-[10px] bg-sky-950/85 text-cyan-300 border border-cyan-800/40 font-mono px-2 py-0.5 rounded backdrop-blur-xs shadow-sm">
                    Winter-Proof Ready
                  </span>
                </div>
              </div>

              {/* Text Context Content */}
              <div className="p-5 bg-slate-950 relative border-t border-slate-900">
                <h3 className="font-display font-bold text-white text-sm mb-1 leading-snug">
                  Intelligent Protection.<br />Seamless Integration.
                </h3>
                <p className="text-[11px] text-slate-400 mb-4 leading-normal">
                  Advanced vehicle intelligence designed for Ontario highway speeds and Canadian winter roads.
                </p>

                <div className="flex items-center space-x-2 border border-cyan-500/20 rounded-lg p-2.5 bg-cyan-950/20">
                  <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-cyan-300 leading-tight">
                    Engineered for Canadian drivers and real-world conditions.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
