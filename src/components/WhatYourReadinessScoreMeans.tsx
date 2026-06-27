import { CheckCircle2, ShieldAlert, Award } from 'lucide-react';

export default function WhatYourReadinessScoreMeans() {
  return (
    <section className="bg-white py-20 border-b border-[#D7E7F5]" id="readiness-score-meaning">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-[#EEF6FB] px-3 py-1 rounded-full border border-[#D7E7F5]">
            Score Interpretation
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            What your readiness score means
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#475A70]">
            Your Vehicle Readiness Score determines your access pathway within Astrateq’s driver intelligence validation system. This helps us understand driver readiness demand across Canadian driving conditions before future product direction is finalized.
          </p>
        </div>

        {/* 3 Columns/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1: Early Access Cohort */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#16B981]" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 mb-6 text-[#16B981]">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-2">
              Early Access Cohort
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              High score range (75–100). Assigned to drivers with optimal profile compatibility and winter road exposure alignment. Prioritized for early system iterations.
            </p>
          </div>

          {/* Card 2: Standard Validation Cohort */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0B7CFF]" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 mb-6 text-[#0B7CFF]">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-2">
              Standard Validation Cohort
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              Moderate score range (60–74). Assigned to typical Canadian driving profiles to test software compatibility and validation modeling parameters.
            </p>
          </div>

          {/* Card 3: Extended Evaluation Cohort */}
          <div className="rounded-3xl border border-[#CFE0EF] bg-[#F8FBFF] p-7 flex flex-col items-start text-left shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.10)] hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#F59E0B]" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-100 mb-6 text-[#F59E0B]">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-[#081A33] text-base mb-2">
              Extended Evaluation Cohort
            </h3>
            <p className="text-xs text-[#475A70] leading-relaxed">
              Queue range (under 60). Assigned to unique vehicle configurations requiring additional software tuning and extended safety/privacy modeling.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
