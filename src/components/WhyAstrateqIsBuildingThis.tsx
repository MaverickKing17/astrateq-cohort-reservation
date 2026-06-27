import { HelpCircle, Check, ShieldCheck, Eye, Compass, Heart } from 'lucide-react';

export default function WhyAstrateqIsBuildingThis() {
  const points = [
    {
      title: 'Clearer readiness scoring',
      description: 'Replacing complex dashboards with simple, intuitive indices designed for seasonal readiness.',
      icon: Compass,
    },
    {
      title: 'Driving risk intelligence',
      description: 'Understanding localized risk exposure due to winter weather and seasonal highway commuting.',
      icon: ShieldCheck,
    },
    {
      title: 'Compatibility confidence insights',
      description: 'Providing drivers with transparent compatibility signals before any integration step.',
      icon: Eye,
    },
    {
      title: 'Privacy-first driver profiling',
      description: 'Ensuring your driver data is strictly kept local and never sold or shared with third parties.',
      icon: Heart,
    },
  ];

  return (
    <section className="bg-[#EEF6FB] py-20 border-b border-[#D7E7F5]" id="why-building-this">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-white px-3 py-1 rounded-full border border-[#D7E7F5]">
              Our Vision & Context
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
              Why Astrateq is building this
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#475A70]">
              Astrateq Gadgets is building a software-led driver intelligence system designed for Canadian roads, where seasonal conditions, commuting patterns, and privacy expectations vary significantly.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#475A70]">
              This validation system operates transparently to help us evaluate driver appetite for proactive, modern road safety software solutions before future product decisions are finalized.
            </p>
          </div>

          {/* Right Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-[#CFE0EF] p-6 shadow-[0_10px_28px_rgba(8,26,51,0.05)] hover:shadow-[0_18px_45px_rgba(8,26,51,0.08)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF7FF] border border-[#BFE7FA] mb-4 text-[#00AEEF]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-[#081A33] text-sm mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs text-[#475A70] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
