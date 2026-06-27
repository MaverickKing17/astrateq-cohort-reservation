import { Check, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';

export default function WhySeeingThis() {
  return (
    <section className="bg-[#EEF6FB] py-20 border-b border-[#D7E7F5]" id="why-us">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Step Label */}
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#00BFEF] block mb-2.5 font-mono">
            Step 2: Why You Qualify
          </span>
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-white px-3 py-1 rounded-full border border-[#D7E7F5] shadow-xs">
            Direct Invitation Only
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Why you are seeing this page
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#475A70]">
            You completed the Astrateq Driver Readiness assessment and received a readiness score and cohort signal. This page lets you record early-access interest for the founding cohort pathway, helping Astrateq Gadgets understand which Canadian driver profiles, vehicle types, and readiness needs should be prioritized before future product direction decisions are made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1 */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-white p-7 flex flex-col items-center text-center shadow-[0_10px_28px_rgba(8,26,51,0.07)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.12)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#00BFEF]" />
            
            {/* Larger icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-5 text-[#00AEEF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <HeartHandshake className="h-7 w-7" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-3">
              Validate Demand
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed mb-4">
              Your profile helps validate Canadian driver demand and localized interest for privacy-first assistance.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#00AEEF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#00BFEF]" />
              <span>Validates Canadian demand</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-white p-7 flex flex-col items-center text-center shadow-[0_10px_28px_rgba(8,26,51,0.07)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.12)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#00BFEF]" />
            
            {/* Larger icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-5 text-[#00AEEF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <Cpu className="h-7 w-7" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-3">
              Inform Compatibility
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed mb-4">
              Your vehicle type and driving context parameters help inform compatibility confidence and validation priorities.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#00BFEF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#00BFEF]" />
              <span>Informs compatibility</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-white p-7 flex flex-col items-center text-center shadow-[0_10px_28px_rgba(8,26,51,0.07)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.12)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 relative overflow-hidden group">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#00BFEF]" />
            
            {/* Larger icon badge */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF7FF] border border-[#BFE7FA] mb-5 text-[#00AEEF] transition-transform duration-300 group-hover:scale-105 shadow-xs">
              <ShieldAlert className="h-7 w-7" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-3">
              Guide Rollout Planning
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed mb-4">
              Your cohort path selection acts as a critical planning anchor guiding future product direction and software program rollouts.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#00BFEF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#00BFEF]" />
              <span>Guides software planning</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
