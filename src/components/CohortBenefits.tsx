import { Sparkles, Calendar, BadgeDollarSign, Sliders, Mail, HelpCircle } from 'lucide-react';

export default function CohortBenefits() {
  const benefits = [
    {
      id: 1,
      title: 'Priority compatibility review',
      description: 'Your vehicle profile is considered earlier during validation planning.',
      detail: 'Our engineering team cross-references your vehicle make and year with Canadian telematics priorities.',
      icon: Sliders,
      color: 'text-[#0B7CFF] bg-[#EEF6FB] border-[#D7E7F5]',
    },
    {
      id: 2,
      title: 'Early-access consideration',
      description: 'Receive updates when pilot access or founding availability becomes available.',
      detail: 'Be first in queue for regional testing trials on Ontario Highway corridors or GTA commute trials.',
      icon: Calendar,
      color: 'text-[#00BFEF] bg-[#F5F9FC] border-[#D7E7F5]',
    },
    {
      id: 3,
      title: 'Founding member pricing consideration',
      description: 'Eligible users may receive early pricing consideration if rollout moves forward.',
      detail: 'Astrateq prioritizes early-access supporters with locked pilot-tier consideration should production proceed.',
      icon: BadgeDollarSign,
      color: 'text-[#16B981] bg-emerald-50 border-emerald-100',
    },
    {
      id: 4,
      title: 'Product feedback influence',
      description: 'Your input helps shape features, readiness categories, and Canadian driver priorities.',
      detail: 'Collaborate directly with product design by participating in private surveys tailored for Canadian weather.',
      icon: Sparkles,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
    {
      id: 5,
      title: 'Private rollout updates',
      description: 'Receive clear updates as Astrateq validates demand, compatibility, and supplier readiness.',
      detail: 'Strictly zero marketing fluff. You will get transparent reports on supply lines and validation milestones.',
      icon: Mail,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
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
                className="group flex flex-col justify-between rounded-2xl border border-[#D7E7F5] bg-white p-5 hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 shadow-xs"
                id={`benefit-card-${benefit.id}`}
              >
                <div>
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${benefit.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-[#081A33] text-sm leading-snug mb-2 group-hover:text-[#0B7CFF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#475A70] leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D7E7F5] mt-4 text-[10px] text-[#7B8CA3] leading-normal">
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
