import { Shield, EyeOff, Ban, Map, Compass, ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      title: 'Privacy by design',
      description: 'Astrateq Gadgets is being designed around privacy-first readiness intelligence.',
      detail: 'Core telemetry algorithms are computed locally on the hardware node itself. No continuous tracking coordinates are streamed.',
      icon: Shield,
    },
    {
      title: 'No data resale model',
      description: 'Your driving profile is not being built for advertising resale.',
      detail: 'Unlike mainstream driver trackers, Astrateq has zero advertising partnerships or third-party marketing brokers. Your telemetry is yours.',
      icon: EyeOff,
    },
    {
      title: 'Not an insurance tracker',
      description: 'Astrateq is not positioned as an insurer-style driver scoring app.',
      detail: 'We do not sell scores to insurance companies or brokers to adjust rates. Our rating exists purely to advise your own preventative readiness.',
      icon: Ban,
    },
    {
      title: 'Canada-focused validation',
      description: 'The program is designed around Ontario/GTA and broader Canadian driving conditions.',
      detail: 'Engineered specifically to accommodate extreme sub-zero batteries, GTA traffic clusters, highway corridors, and seasonal tire conversions.',
      icon: Map,
    },
    {
      title: 'Pre-launch transparency',
      description: 'Hardware availability, pricing, compatibility, and timing depend on validation results and future manufacturing decisions.',
      detail: 'We share engineering updates with early cohort registrants. We make no fake scarcity claims, empty promises, or shipping guarantees.',
      icon: Compass,
    }
  ];

  return (
    <section className="bg-slate-900/40 py-16 border-b border-slate-900" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-cyan-400 mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider uppercase font-mono">Security Anchor</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built for trust before rollout
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Astrateq Gadgets prioritizes transparency, safety, and strict alignment with Canadian security principles. Read how we design privacy into the pre-launch validation program.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {trustCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 transition-all duration-200 hover:bg-slate-900/80 hover:border-slate-700 hover:shadow-lg shadow-md"
              >
                <div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-cyan-400 border border-slate-800 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-slate-100 text-sm leading-snug mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {card.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/40 mt-4 text-[10px] text-slate-500 leading-normal">
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
