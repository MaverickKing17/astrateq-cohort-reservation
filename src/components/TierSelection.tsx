import { Check, AlertCircle, Sparkles, ChevronRight, Info } from 'lucide-react';
import { FunnelMode, Tier } from '../types';

interface TierSelectionProps {
  mode: FunnelMode;
  score: number;
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function TierSelection({
  mode,
  score,
  selectedTierId,
  onSelectTier,
  onTriggerEvent,
}: TierSelectionProps) {
  
  const tiers: Tier[] = [
    {
      id: 'tier-1',
      name: 'Readiness Access',
      tagline: 'Pre-launch Validation Pathway',
      bestFor: 'Drivers who want updates and readiness insights before committing to deeper early-access interest.',
      includes: [
        'Diagnostic result record',
        'Pre-launch readiness updates',
        'Compatibility interest signal',
        'Privacy-first program updates',
      ],
      notGuaranteed: [
        'Hardware access',
        'Compatibility approval',
        'Launch timing',
        'Final pricing',
      ],
      depositAmount: 0,
    },
    {
      id: 'tier-2',
      name: 'Guardian Pro Interest',
      tagline: 'Founding Cohort Choice',
      bestFor: 'Drivers interested in future Astrateq hardware plus privacy-first readiness intelligence.',
      includes: [
        'Priority compatibility review',
        'Founding member pricing consideration',
        'Product feedback influence',
        'Early rollout notifications',
        'Future hardware interest signal',
      ],
      notGuaranteed: [
        'Hardware delivery',
        'Final product availability',
        'Guaranteed pricing',
        'Guaranteed compatibility',
      ],
      depositAmount: 49,
    },
    {
      id: 'tier-3',
      name: 'Founder Priority Allocation',
      tagline: 'Maximum Priority Signal',
      bestFor: 'High-intent users who want the strongest early-access consideration if the pilot moves forward.',
      includes: [
        'Highest early-access interest signal',
        'Priority validation review',
        'Private rollout updates',
        'Product direction feedback',
        'Early pricing consideration if rollout proceeds',
      ],
      notGuaranteed: [
        'Guaranteed access',
        'Guaranteed hardware',
        'Guaranteed pricing',
        'Confirmed delivery date',
        'Certified safety status',
      ],
      depositAmount: 99,
    },
  ];

  // Dynamic recommendation based on score
  const getRecommendedTierId = (s: number): string => {
    if (s >= 90) return 'tier-3';
    if (s >= 75) return 'tier-2';
    if (s >= 60) return 'tier-1';
    return ''; // Under 60 doesn't get a premium cohort recommendation
  };

  const recommendedTierId = getRecommendedTierId(score);

  const handleTierSelect = (tier: Tier) => {
    onSelectTier(tier.id);
    onTriggerEvent('tier_selected', { 
      tierId: tier.id, 
      tierName: tier.name, 
      mode, 
      depositAmount: mode === 'mode-b' ? tier.depositAmount : 0 
    });
  };

  return (
    <section className="bg-slate-950 py-16 border-b border-slate-900" id="tiers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase font-mono">
            Cohort Packaging
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose your founding cohort path
          </h2>
          <p className="mt-4 text-sm text-slate-300 leading-relaxed">
            Your readiness score helps recommend a cohort pathway, but you can choose the level of early-access interest that best reflects your intent. Each tier helps Astrateq Gadgets understand Canadian driver demand, compatibility priorities, and rollout planning.
          </p>
        </div>

        {/* Comparison Row (Section 5 requirement) */}
        <div className="mb-12 max-w-5xl mx-auto bg-slate-900/40 rounded-xl border border-slate-800 p-5 shadow-md">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3 text-center md:text-left">
            Cohort Path Quick Comparison
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-slate-950/40">
              <div className="w-2 h-2 rounded-full bg-slate-600 mt-1.5 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Readiness Access:</strong>
                <span className="text-slate-400">Best for staying informed and diagnostic records.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-slate-950/40">
              <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Guardian Pro Interest:</strong>
                <span className="text-slate-400">Best for drivers interested in future hardware and readiness intelligence.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-slate-950/40">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
              <div>
                <strong className="text-slate-200 block">Founder Priority Allocation:</strong>
                <span className="text-slate-400">Best for high-intent users who want strongest early-access consideration.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const isSelected = selectedTierId === tier.id;
            const isRecommended = recommendedTierId === tier.id;
            
            return (
              <div
                key={tier.id}
                onClick={() => handleTierSelect(tier)}
                className={`relative flex flex-col justify-between rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 group ${
                  isSelected
                    ? 'border-cyan-500 bg-cyan-950/20 shadow-lg shadow-cyan-950/20'
                    : isRecommended
                    ? 'border-cyan-500/30 bg-slate-900/40 shadow-md shadow-cyan-500/5 hover:border-cyan-500/60'
                    : 'border-slate-800 bg-slate-900/20 hover:border-slate-700 hover:bg-slate-900/30 shadow-sm'
                } ${isRecommended ? 'ring-2 ring-cyan-500/20' : ''}`}
                id={`tier-selection-${tier.id}`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <span className="absolute -top-3.5 left-6 inline-flex items-center space-x-1 rounded-full bg-cyan-950/90 border border-cyan-500 px-3 py-0.5 text-[9px] font-extrabold text-cyan-400 tracking-widest uppercase">
                    <Sparkles className="h-2.5 w-2.5 animate-pulse text-cyan-400" />
                    <span>Recommended based on your readiness result</span>
                  </span>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-display text-base font-bold transition-colors ${
                        isSelected ? 'text-cyan-300' : 'text-slate-100 group-hover:text-cyan-400'
                      }`}>
                        {tier.name}
                      </h3>
                      <p className={`text-[10px] font-mono tracking-wider uppercase ${
                        isSelected ? 'text-cyan-400' : 'text-slate-400'
                      }`}>
                        {tier.tagline}
                      </p>
                    </div>
                    {/* Circle selector */}
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'border-cyan-500 bg-cyan-500 text-slate-950' 
                        : isRecommended
                        ? 'border-cyan-500 group-hover:border-cyan-400 text-transparent'
                        : 'border-slate-700 group-hover:border-slate-600 text-transparent'
                    }`}>
                      {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Pricing / Mode Description */}
                  <div className={`my-5 py-3 border-y flex items-baseline justify-between ${
                    isSelected ? 'border-cyan-800/40' : 'border-slate-800/40'
                  }`}>
                    <div>
                      <span className="font-display text-2xl font-black text-white">
                        {mode === 'mode-b' ? (tier.depositAmount === 0 ? 'Free' : `$${tier.depositAmount}`) : '$0'}
                      </span>
                      <span className="text-[11px] text-slate-400 ml-1.5">
                        {mode === 'mode-b' 
                          ? (tier.depositAmount === 0 ? 'interest signal' : 'refundable deposit') 
                          : 'pre-launch validation'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {mode === 'mode-b' ? 'Refundable terms' : 'No payment today'}
                    </span>
                  </div>

                  {/* Best For */}
                  <p className="text-xs text-slate-300 mb-6 italic leading-relaxed">
                    "{tier.bestFor}"
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Included Options
                    </span>
                    <ul className="space-y-2 text-xs">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-300">
                          <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limits List (Pre-launch transparency) */}
                  <div className={`space-y-2 border-t pt-4 ${
                    isSelected ? 'border-cyan-800/40' : 'border-slate-800/40'
                  }`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> Note / Not Guaranteed
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-slate-400">
                      {tier.notGuaranteed.map((notg, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-slate-700 font-bold shrink-0">•</span>
                          <span>{notg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Select button */}
                <div className="mt-8">
                  <button
                    type="button"
                    className={`w-full py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md shadow-slate-950/10'
                        : isRecommended
                        ? 'bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-400 border border-cyan-800/50'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-350 border border-slate-800'
                    }`}
                  >
                    <span>
                      {isSelected 
                        ? 'Active Selection' 
                        : isRecommended 
                        ? 'Select Recommended Option' 
                        : `Select ${tier.name}`}
                    </span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
