import { Shield, EyeOff, Ban, Map, Compass, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      title: 'Privacy by design',
      description: 'Astrateq Gadgets is being designed around privacy-first readiness intelligence.',
      detail: 'Core telemetry algorithms are computed locally on the hardware node itself. No continuous tracking coordinates are streamed.',
      icon: Shield,
      iconBg: 'bg-[#EAFBF4]',
      iconColor: 'text-[#16B981]',
      iconBorder: 'border-emerald-100',
      accentClass: 'border-t-3 border-t-[#16B981]',
    },
    {
      title: 'No data resale model',
      description: 'Your driving profile is not being built for advertising resale.',
      detail: 'Unlike mainstream driver trackers, Astrateq has zero advertising partnerships or third-party marketing brokers. Your telemetry is yours.',
      icon: EyeOff,
      iconBg: 'bg-[#EAFBF4]',
      iconColor: 'text-[#16B981]',
      iconBorder: 'border-emerald-100',
      accentClass: 'border-t-3 border-t-[#16B981]',
    },
    {
      title: 'Not an insurance tracker',
      description: 'Astrateq is not positioned as an insurer-style driver scoring app.',
      detail: 'We do not sell scores to insurance companies or brokers to adjust rates. Our rating exists purely to advise your own preventative readiness.',
      icon: Ban,
      iconBg: 'bg-[#EAFBF4]',
      iconColor: 'text-[#16B981]',
      iconBorder: 'border-emerald-100',
      accentClass: 'border-t-3 border-t-[#16B981]',
    },
    {
      title: 'Canada-focused validation',
      description: 'The program is designed around Ontario/GTA and broader Canadian driving conditions.',
      detail: 'Engineered specifically to accommodate extreme sub-zero batteries, GTA traffic clusters, highway corridors, and seasonal tire conversions.',
      icon: Map,
      iconBg: 'bg-[#EAF7FF]',
      iconColor: 'text-[#00AEEF]',
      iconBorder: 'border-[#BFE7FA]',
      accentClass: 'border-t-3 border-t-[#00BFEF]',
    },
    {
      title: 'Pre-launch transparency',
      description: 'Hardware availability, pricing, compatibility, and timing depend on validation results and future manufacturing decisions.',
      detail: 'We share engineering updates with early cohort registrants. We make no fake scarcity claims, empty promises, or shipping guarantees.',
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
            <span className="text-xs font-bold tracking-wider uppercase font-mono">Security Anchor</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Built for trust before rollout
          </h2>
          <p className="mt-4 text-sm text-[#475A70] leading-relaxed">
            Astrateq Gadgets prioritizes transparency, safety, and strict alignment with Canadian security principles. Read how we design privacy into the pre-launch validation program.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto items-stretch">
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
