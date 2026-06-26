import { Check, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';

export default function WhySeeingThis() {
  return (
    <section className="bg-slate-900/40 py-16 border-b border-slate-900" id="why-us">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase font-mono">
            Direct Invitation Only
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why you are seeing this page
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            You completed the Astrateq Vehicle Readiness diagnostic and received a readiness classification. This page lets you record early-access interest for the founding cohort and helps Astrateq Gadgets understand which Canadian driver profiles, vehicle types, and readiness needs should be prioritized before future rollout decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col items-center text-center shadow-lg hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-950/80 border border-sky-800/40 mb-4">
              <HeartHandshake className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="font-display font-bold text-slate-100 text-sm mb-2">
              Validate Demand
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your profile helps validate Canadian driver demand and localized interest for privacy-first assistance.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-cyan-400 font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
              <span>Validates Canadian demand</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col items-center text-center shadow-lg hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-800/40 mb-4">
              <Cpu className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="font-display font-bold text-slate-100 text-sm mb-2">
              Inform Compatibility
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your vehicle type and OBD architecture help inform specific model compatibility and validation priorities.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-cyan-400 font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
              <span>Informs vehicle priorities</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col items-center text-center shadow-lg hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-950/80 border border-indigo-800/40 mb-4">
              <ShieldAlert className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="font-display font-bold text-slate-100 text-sm mb-2">
              Guide Rollout Planning
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your reservation signal acts as a critical planning anchor guiding future hardware and logistics rollouts.
            </p>
            <div className="mt-auto pt-4 flex items-center space-x-1.5 text-cyan-400 font-bold text-[11px]">
              <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
              <span>Guides rollout planning</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
