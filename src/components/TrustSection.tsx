import { EyeOff, Compass, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      title: 'Fully transparent validation',
      description: 'Our pre-launch phase gathers early-access intent signals and diagnostic data to shape our digital product direction.',
      detail: 'There is no product sales funnel or active commercial transaction pipeline today.',
      icon: ShieldCheck,
      iconBg: 'bg-[#EAFBF4]',
      iconColor: 'text-[#16B981]',
      iconBorder: 'border-emerald-100',
      accentClass: 'border-t-3 border-t-[#16B981]',
    },
    {
      title: 'Privacy first, always',
      description: 'Your driving profile, vehicle details, and validation inputs are fully encrypted.',
      detail: 'We never sell your data to brokers, and we do not monitor your vehicle without your explicit consent.',
      icon: EyeOff,
      iconBg: 'bg-[#EAF7FF]',
      iconColor: 'text-[#00AEEF]',
      iconBorder: 'border-[#BFE7FA]',
      accentClass: 'border-t-3 border-t-[#00BFEF]',
    },
    {
      title: 'Speculative hardware direction',
      description: 'Optional hardware concepts—such as OBD-II adapters or camera units—are future explorations only.',
      detail: 'They are not active products, have no certified release timelines, and are not guaranteed to launch.',
      icon: Compass,
      iconBg: 'bg-[#FFF7E6]',
      iconColor: 'text-[#F59E0B]',
      iconBorder: 'border-amber-100',
      accentClass: 'border-t-3 border-t-[#F59E0B]',
    }
  ];

  return (
    <section className="bg-[#EEF6FB] py-20 border-b border-[#D7E7F5]" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-[#0B7CFF] bg-white border border-[#D7E7F5] px-3.5 py-1.5 rounded-full shadow-2xs mb-4">
            <ShieldCheck className="h-4 w-4 text-[#16B981]" />
            <span className="text-xs font-bold tracking-wider uppercase font-mono">Trust Framework</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Built for trust before rollout
          </h2>
          <p className="mt-4 text-sm text-[#475A70] leading-relaxed">
            Trust is built on absolute clarity. Astrateq Gadgets is currently validating software concepts only. Future hardware directions are speculative, depend on feasibility, and are not guaranteed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {trustCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`flex flex-col justify-between rounded-2xl border border-[#CFE0EF] bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-[0_10px_28px_rgba(8,26,51,0.07)] ${card.accentClass}`}
              >
                <div>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} border ${card.iconBorder} mb-5 shadow-2xs`}>
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display font-bold text-[#081A33] text-[15px] leading-snug mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#475A70] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F1FAFF] mt-4 text-[10px] text-[#7B8CA3] leading-relaxed">
                  {card.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
