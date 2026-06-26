import { Check, Activity, Signal, Cpu } from 'lucide-react';

export default function WhatAstrateqIsValidatingFirst() {
  return (
    <section className="bg-white py-20 border-b border-[#D7E7F5]" id="what-we-validate">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Indicator */}
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#00BFEF] block mb-2.5 font-mono">
            Core Program Focus
          </span>
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-[#EEF6FB] px-3 py-1 rounded-full border border-[#D7E7F5] shadow-xs">
            Validation Strategy
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            What Astrateq is validating first
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#475A70]">
            Astrateq Gadgets is beginning with a software-led readiness intelligence experience before making future hardware rollout decisions. Your diagnostic result and cohort selection help validate what Canadian drivers actually want.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1: Software-led readiness intelligence */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#00BFEF]" />
            
            {/* Icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-6 text-[#00AEEF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Activity className="h-7 w-7 stroke-[2]" />
            </div>
            
            <h3 className="font-display font-extrabold text-[#081A33] text-base mb-3">
              Software-led readiness intelligence
            </h3>
            
            <p className="text-xs text-[#475A70] leading-relaxed mb-6">
              Astrateq is first validating whether Canadian drivers want clearer readiness scores, risk profiles, compatibility confidence, and privacy-first driving insights.
            </p>
            
            <div className="mt-auto pt-4 border-t border-[#CFE0EF]/60 w-full flex items-center space-x-1.5 text-[#00AEEF] font-bold text-[10px] uppercase tracking-wider font-mono">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#00BFEF]" />
              <span>Priority Validation</span>
            </div>
          </div>

          {/* Card 2: Driver demand and compatibility signals */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#00BFEF]" />
            
            {/* Icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-6 text-[#00AEEF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Signal className="h-7 w-7 stroke-[2]" />
            </div>
            
            <h3 className="font-display font-extrabold text-[#081A33] text-base mb-3">
              Driver demand & compatibility signals
            </h3>
            
            <p className="text-xs text-[#475A70] leading-relaxed mb-6">
              Your diagnostic result and cohort pathway help identify which vehicle types, driving patterns, and Canadian road conditions should be prioritized.
            </p>
            
            <div className="mt-auto pt-4 border-t border-[#CFE0EF]/60 w-full flex items-center space-x-1.5 text-[#00AEEF] font-bold text-[10px] uppercase tracking-wider font-mono">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#00BFEF]" />
              <span>Targeting Priorities</span>
            </div>
          </div>

          {/* Card 3: Future hardware direction */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0B7CFF]" />
            
            {/* Icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-6 text-[#0B7CFF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Cpu className="h-7 w-7 stroke-[2]" />
            </div>
            
            <h3 className="font-display font-extrabold text-[#081A33] text-base mb-3">
              Future hardware direction
            </h3>
            
            <p className="text-xs text-[#475A70] leading-relaxed mb-6">
              Optional hardware concepts may include an OBD-II intelligence adapter and driver-awareness module. Availability, compatibility, pricing, and timing depend on validation results.
            </p>
            
            <div className="mt-auto pt-4 border-t border-[#CFE0EF]/60 w-full flex items-center space-x-1.5 text-[#0B7CFF] font-bold text-[10px] uppercase tracking-wider font-mono">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#0B7CFF]" />
              <span>Future Road</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
