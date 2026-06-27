import { ArrowRight, FileText, Signal, Cpu, Star } from 'lucide-react';

export default function WhatHappensAfterYouSubmit() {
  const steps = [
    {
      num: '1',
      title: 'Receive your score',
      description: 'Your inputs generate an active Vehicle Readiness Score calculating winter driving compatibility and confidence markers.',
      icon: FileText,
    },
    {
      num: '2',
      title: 'Cohort signal assignment',
      description: 'Based on your readiness score and vehicle parameters, you are allocated an early-access validation pathway cohort.',
      icon: Signal,
    },
    {
      num: '3',
      title: 'Validation modeling entry',
      description: 'Your profile is used anonymously to test and refine Astrateq’s software-led localized road risk algorithms.',
      icon: Cpu,
    },
    {
      num: '4',
      title: 'Priority access pathway',
      description: 'Eligible drivers in top cohorts receive first invitations to future software programs and priority rollout news.',
      icon: Star,
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-[#D7E7F5]" id="after-submission-steps">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-[#EEF6FB] px-3 py-1 rounded-full border border-[#D7E7F5]">
            Post-Submission Pipeline
          </span>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-[#081A33] sm:text-3xl">
            What happens after you submit
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-[#475A70]">
            Understand exactly how your early-access profile moves through our pre-launch validation model. No commitment, fees, or hardware connection is required.
          </p>
        </div>

        {/* 4 Steps Horizontal / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-[#F8FBFF] border border-[#CFE0EF] rounded-2xl p-6 relative group hover:border-[#00BFEF]/40 transition-all duration-300 shadow-xs"
              >
                {/* Step number badge */}
                <div className="absolute top-4 right-4 text-3xl font-mono font-black text-[#0B7CFF]/10 select-none">
                  0{step.num}
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#D7E7F5] mb-4 text-[#0B7CFF] shadow-xs">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display font-bold text-[#081A33] text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#475A70] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
