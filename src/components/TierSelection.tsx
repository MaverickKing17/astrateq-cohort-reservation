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
    <section className="bg-[#F5F9FC] py-20 border-b border-[#D7E7F5]" id="tiers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0B7CFF] uppercase font-mono bg-white px-3 py-1 rounded-full border border-[#D7E7F5]">
            Cohort Packaging
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#081A33] sm:text-4xl">
            Choose your founding cohort path
          </h2>
          <p className="mt-4 text-sm text-[#475A70] leading-relaxed">
            Your readiness score helps recommend a cohort pathway, but you can choose the level of early-access interest that best reflects your intent. Each tier helps Astrateq Gadgets understand Canadian driver demand, compatibility priorities, and rollout planning.
          </p>
        </div>

        {/* Comparison Row (Section 5 requirement) */}
        <div className="mb-12 max-w-5xl mx-auto bg-white rounded-2xl border border-[#D7E7F5] p-5 shadow-sm">
          <span className="text-[10px] font-bold text-[#7B8CA3] uppercase tracking-wider block mb-3 text-center md:text-left">
            Cohort Path Quick Comparison
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#F8FBFF]">
              <div className="w-2 h-2 rounded-full bg-[#7B8CA3] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#081A33] block">Readiness Access:</strong>
                <span className="text-[#475A70]">Best for staying informed and diagnostic records.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#F8FBFF]">
              <div className="w-2 h-2 rounded-full bg-[#00BFEF] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#081A33] block">Guardian Pro Interest:</strong>
                <span className="text-[#475A70]">Best for drivers interested in future hardware and readiness intelligence.</span>
              </div>
            </div>
            <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#F8FBFF]">
              <div className="w-2 h-2 rounded-full bg-[#0B7CFF] mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#081A33] block">Founder Priority Allocation:</strong>
                <span className="text-[#475A70]">Best for high-intent users who want strongest early-access consideration.</span>
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
                    ? 'border-[#0B7CFF] bg-[#EEF6FB] shadow-lg shadow-blue-500/5'
                    : isRecommended
                    ? 'border-[#00BFEF] bg-[#F8FCFF] shadow-md shadow-blue-500/5 hover:border-[#0B7CFF]/50'
                    : 'border-[#D7E7F5] bg-white hover:border-[#0B7CFF]/40 shadow-sm'
                }`}
                id={`tier-selection-${tier.id}`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <span className="absolute -top-3.5 left-6 inline-flex items-center space-x-1 rounded-full bg-[#0B7CFF] border border-blue-600 px-3 py-0.5 text-[9px] font-extrabold text-white tracking-widest uppercase">
                    <Sparkles className="h-2.5 w-2.5 animate-pulse text-white" />
                    <span>Recommended Cohort Path</span>
                  </span>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-display text-base font-bold transition-colors ${
                        isSelected ? 'text-[#0B7CFF]' : 'text-[#081A33] group-hover:text-[#0B7CFF]'
                      }`}>
                        {tier.name}
                      </h3>
                      <p className={`text-[10px] font-mono tracking-wider uppercase ${
                        isSelected ? 'text-[#0B7CFF]' : 'text-[#7B8CA3]'
                      }`}>
                        {tier.tagline}
                      </p>
                    </div>
                    {/* Circle selector */}
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'border-[#0B7CFF] bg-[#0B7CFF] text-white' 
                        : isRecommended
                        ? 'border-[#00BFEF] group-hover:border-[#0B7CFF] text-transparent'
                        : 'border-[#D7E7F5] group-hover:border-[#7B8CA3] text-transparent'
                    }`}>
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Pricing / Mode Description */}
                  <div className={`my-5 py-3 border-y flex items-baseline justify-between ${
                    isSelected ? 'border-[#0B7CFF]/20' : 'border-[#D7E7F5]'
                  }`}>
                    <div>
                      <span className="font-display text-2xl font-black text-[#081A33]">
                        {mode === 'mode-b' ? (tier.depositAmount === 0 ? 'Free' : `$${tier.depositAmount}`) : '$0'}
                      </span>
                      <span className="text-[11px] text-[#475A70] ml-1.5 font-medium">
                        {mode === 'mode-b' 
                          ? (tier.depositAmount === 0 ? 'interest signal' : 'refundable deposit') 
                          : 'pre-launch validation'}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#7B8CA3] font-bold">
                      {mode === 'mode-b' ? 'Refundable terms' : 'No payment today'}
                    </span>
                  </div>

                  {/* Best For */}
                  <p className="text-xs text-[#475A70] mb-6 italic leading-relaxed">
                    "{tier.bestFor}"
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold text-[#7B8CA3] uppercase tracking-wider block">
                      Included Options
                    </span>
                    <ul className="space-y-2 text-xs">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2 text-[#475A70]">
                          <Check className="h-4 w-4 text-[#16B981] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limits List (Pre-launch transparency) */}
                  <div className={`space-y-2 border-t pt-4 ${
                    isSelected ? 'border-[#0B7CFF]/20' : 'border-[#D7E7F5]'
                  }`}>
                    <span className="text-[10px] font-bold text-[#7B8CA3] uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 text-[#F59E0B]" /> Note / Not Guaranteed
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-[#7B8CA3]">
                      {tier.notGuaranteed.map((notg, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-[#D7E7F5] font-bold shrink-0">•</span>
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
                        ? 'bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] text-white shadow-md shadow-blue-500/15'
                        : isRecommended
                        ? 'bg-[#EEF6FB] hover:bg-[#EEF6FB]/80 text-[#0B7CFF] border border-[#D7E7F5]'
                        : 'bg-white hover:bg-slate-50 text-[#475A70] border border-[#D7E7F5]'
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
