import { Check, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';

export default function WhySeeingThis() {
  return (
    <section className="bg-[#EEF6FB] py-20 border-b border-[#D7E7F5]" id="why-us">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-white px-3 py-1 rounded-full border border-[#D7E7F5] shadow-xs">
            Direct Invitation Only
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Why you are seeing this page
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#475A70]">
            You completed the Astrateq Vehicle Readiness diagnostic and received a readiness classification. This page lets you record early-access interest for the founding cohort and helps Astrateq Gadgets understand which Canadian driver profiles, vehicle types, and readiness needs should be prioritized before future rollout decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#D7E7F5] bg-white p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6FB] border border-[#D7E7F5] mb-4 text-[#0B7CFF]">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-sm mb-2">
              Validate Demand
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              Your profile helps validate Canadian driver demand and localized interest for privacy-first assistance.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#0B7CFF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#0B7CFF]" />
              <span>Validates Canadian demand</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#D7E7F5] bg-white p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6FB] border border-[#D7E7F5] mb-4 text-[#0B7CFF]">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-sm mb-2">
              Inform Compatibility
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              Your vehicle type and OBD architecture help inform specific model compatibility and validation priorities.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#0B7CFF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#0B7CFF]" />
              <span>Informs vehicle priorities</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#D7E7F5] bg-white p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6FB] border border-[#D7E7F5] mb-4 text-[#0B7CFF]">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-sm mb-2">
              Guide Rollout Planning
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              Your reservation signal acts as a critical planning anchor guiding future hardware and logistics rollouts.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-[#0B7CFF] font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-[#0B7CFF]" />
              <span>Guides rollout planning</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
