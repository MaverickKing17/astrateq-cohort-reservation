import { Sparkles, Calendar, BadgeDollarSign, Sliders, Mail, HelpCircle } from 'lucide-react';

export default function CohortBenefits() {
  const benefits = [
    {
      id: 1,
      title: 'Priority compatibility review',
      description: 'Your vehicle profile is considered earlier during validation planning.',
      detail: 'Our engineering team cross-references your vehicle make and year with Canadian telematics priorities.',
      icon: Sliders,
      color: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    },
    {
      id: 2,
      title: 'Early-access consideration',
      description: 'Receive updates when pilot access or founding availability becomes available.',
      detail: 'Be first in queue for regional testing trials on Ontario Highway corridors or GTA commute trials.',
      icon: Calendar,
      color: 'text-sky-400 bg-sky-950/60 border-sky-800/40',
    },
    {
      id: 3,
      title: 'Founding member pricing consideration',
      description: 'Eligible users may receive early pricing consideration if rollout moves forward.',
      detail: 'Astrateq prioritizes early-access supporters with locked pilot-tier consideration should production proceed.',
      icon: BadgeDollarSign,
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
    },
    {
      id: 4,
      title: 'Product feedback influence',
      description: 'Your input helps shape features, readiness categories, and Canadian driver priorities.',
      detail: 'Collaborate directly with product design by participating in private surveys tailored for Canadian weather.',
      icon: Sparkles,
      color: 'text-purple-400 bg-purple-950/60 border-purple-800/40',
    },
    {
      id: 5,
      title: 'Private rollout updates',
      description: 'Receive clear updates as Astrateq validates demand, compatibility, and supplier readiness.',
      detail: 'Strictly zero marketing fluff. You will get transparent reports on supply lines and validation milestones.',
      icon: Mail,
      color: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/40',
    },
  ];

  return (
    <section className="bg-slate-950 py-16 border-b border-slate-900" id="benefits">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase font-mono">
            Cohorts Priorities
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Founding Driver Cohort Benefits
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Astrateq Gadgets is currently in pre-launch validation. Our founding driver cohort helps shapes privacy-first driver readiness intelligence for Canadian roads.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className="group flex flex-col justify-between rounded-xl border border-slate-800/60 bg-slate-900/20 p-5 hover:border-slate-700/80 hover:bg-slate-900/30 transition-all duration-200 shadow-md"
                id={`benefit-card-${benefit.id}`}
              >
                <div>
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border mb-4 ${benefit.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-100 text-sm leading-snug mb-2 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {benefit.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/40 mt-4 text-[10px] text-slate-500 leading-normal">
                  {benefit.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Overpromise Warning Box */}
        <div className="mt-12 rounded-xl border border-slate-800/80 bg-slate-900/40 p-5 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-slate-300">
            <div className="p-1.5 rounded bg-slate-800 text-slate-400 shrink-0">
              <HelpCircle className="h-4 w-4" />
            </div>
            <div>
              <span className="font-display font-semibold text-xs text-white block">Pre-launch Validation Transparency</span>
              <span className="text-[11px] text-slate-400">We prioritize transparency at every step. Please review what is not guaranteed.</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[9px] font-medium text-slate-400 uppercase tracking-wider">
            <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800/50">No guaranteed launch</span>
            <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800/50">No guaranteed delivery</span>
            <span className="px-2 py-1 rounded bg-slate-950 border border-slate-800/50">No guaranteed pricing</span>
          </div>
        </div>

      </div>
    </section>
  );
}
