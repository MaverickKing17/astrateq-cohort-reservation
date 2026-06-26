import { Sparkles, Calendar, BadgeDollarSign, Sliders, Mail, HelpCircle } from 'lucide-react';

export default function CohortBenefits() {
  const benefits = [
    {
      id: 1,
      title: 'Priority compatibility review',
      description: 'Your vehicle profile is considered earlier during validation planning.',
      detail: 'Our engineering team cross-references your vehicle make and year with Canadian telematics priorities.',
      icon: Sliders,
      accentColor: 'bg-[#00BFEF]',
      iconBg: 'bg-[#EAF7FF]',
      iconBorder: 'border-[#BFE7FA]',
      iconColor: 'text-[#00AEEF]',
    },
    {
      id: 2,
      title: 'Early-access consideration',
      description: 'Receive updates when pilot access or founding availability becomes available.',
      detail: 'Be first in queue for regional testing trials on Ontario Highway corridors or GTA commute trials.',
      icon: Calendar,
      accentColor: 'bg-[#00BFEF]',
      iconBg: 'bg-[#EAF7FF]',
      iconBorder: 'border-[#BFE7FA]',
      iconColor: 'text-[#00AEEF]',
    },
    {
      id: 3,
      title: 'Founding member pricing consideration',
      description: 'Eligible users may receive early pricing consideration if rollout moves forward.',
      detail: 'Astrateq prioritizes early-access supporters with locked pilot-tier consideration should production proceed.',
      icon: BadgeDollarSign,
      accentColor: 'bg-[#16B981]',
      iconBg: 'bg-[#EAFBF4]',
      iconBorder: 'border-emerald-100',
      iconColor: 'text-[#16B981]',
    },
    {
      id: 4,
      title: 'Product feedback influence',
      description: 'Your input helps shape features, readiness categories, and Canadian driver priorities.',
      detail: 'Collaborate directly with product design by participating in private surveys tailored for Canadian weather.',
      icon: Sparkles,
      accentColor: 'bg-purple-400',
      iconBg: 'bg-purple-50',
      iconBorder: 'border-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      id: 5,
      title: 'Private rollout updates',
      description: 'Receive clear updates as Astrateq validates demand, compatibility, and supplier readiness.',
      detail: 'Strictly zero marketing fluff. You will get transparent reports on supply lines and validation milestones.',
      icon: Mail,
      accentColor: 'bg-[#00BFEF]',
      iconBg: 'bg-[#EAF7FF]',
      iconBorder: 'border-[#BFE7FA]',
      iconColor: 'text-[#00AEEF]',
    },
  ];

  return (
    <section className="bg-white py-20 border-b border-[#D7E7F5]" id="benefits">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-[#EEF6FB] px-3 py-1 rounded-full border border-[#D7E7F5]">
            Cohort Priorities
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Founding Driver Cohort Benefits
          </h2>
          <p className="mt-4 text-sm text-[#475A70]">
            Astrateq Gadgets is currently in pre-launch validation. Our founding driver cohort helps shape privacy-first driver readiness intelligence for Canadian roads.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className="group flex flex-col justify-between rounded-3xl border border-[#CFE0EF] bg-white card-premium-gradient p-6 hover:shadow-[0_18px_45px_rgba(8,26,51,0.12)] hover:translate-y-[-2px] hover:border-[#A9D8F5] transition-all duration-300 shadow-[0_10px_28px_rgba(8,26,51,0.07)] relative overflow-hidden"
                id={`benefit-card-${benefit.id}`}
              >
                {/* Subtle top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[4px] ${benefit.accentColor}`} />
                
                <div>
                  {/* Larger icon badge */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border mb-5 ${benefit.iconBg} ${benefit.iconBorder} ${benefit.iconColor} shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-[#081A33] text-sm leading-snug mb-2 group-hover:text-[#0B7CFF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#475A70] leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D7E7F5]/60 mt-4 text-[10px] text-[#7B8CA3] leading-normal">
                  {benefit.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Overpromise Warning Box */}
        <div className="mt-12 rounded-2xl border border-[#D7E7F5] bg-[#F8FBFF] p-5 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-[#475A70]">
            <div className="p-1.5 rounded bg-[#EEF6FB] text-[#0B7CFF] shrink-0">
              <HelpCircle className="h-4 w-4" />
            </div>
            <div>
              <span className="font-display font-bold text-xs text-[#081A33] block">Pre-launch Validation Transparency</span>
              <span className="text-[11px] text-[#7B8CA3]">We prioritize transparency at every step. Please review what is not guaranteed.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[9px] font-bold text-[#7B8CA3] uppercase tracking-wider">
            <span className="px-2 py-1 rounded bg-white border border-[#D7E7F5]">No guaranteed launch</span>
            <span className="px-2 py-1 rounded bg-white border border-[#D7E7F5]">No guaranteed delivery</span>
            <span className="px-2 py-1 rounded bg-white border border-[#D7E7F5]">No guaranteed pricing</span>
          </div>
        </div>

      </div>
    </section>
  );
}
