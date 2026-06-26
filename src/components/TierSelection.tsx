import { Check, AlertCircle, Sparkles, ChevronRight } from 'lucide-react';
import { FunnelMode, Tier } from '../types';

interface TierSelectionProps {
  mode: FunnelMode;
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function TierSelection({
  mode,
  selectedTierId,
  onSelectTier,
  onTriggerEvent,
}: TierSelectionProps) {
  
  const tiers: Tier[] = [
    {
      id: 'tier-1',
      name: 'Readiness Access',
      tagline: 'Basic Validation Queue',
      bestFor: 'Drivers who want updates and readiness insights.',
      includes: [
        'Diagnostic result record',
        'Early-access updates',
        'Compatibility interest signal',
      ],
      notGuaranteed: [
        'No priority queue slot',
        'No hardware allocation reserved',
        'Launch is pending validation',
      ],
      depositAmount: 0,
    },
    {
      id: 'tier-2',
      name: 'Guardian Pro Interest',
      tagline: 'Founding Cohort Choice',
      bestFor: 'Drivers interested in future hardware + readiness intelligence.',
      includes: [
        'Priority compatibility review',
        'Founding member pricing consideration',
        'Product feedback influence',
        'Early rollout notifications',
      ],
      notGuaranteed: [
        'Hardware availability pending rollout',
        'Pricing is subject to final production cost',
        'Compatibility depends on final OBD validation',
      ],
      depositAmount: 49,
    },
    {
      id: 'tier-3',
      name: 'Founder Priority Allocation',
      tagline: 'Maximum Priority Signal',
      bestFor: 'High-intent users who want strongest early-access consideration.',
      includes: [
        'Priority validation review',
        'Private rollout updates',
        'Highest early-access interest signal',
        'Product direction feedback',
      ],
      notGuaranteed: [
        'Supplier logistics timing is not guaranteed',
        'No guaranteed delivery dates',
        'Rollout depends on full cohort sign-up goals',
      ],
      depositAmount: 99,
    },
  ];

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
    <section className="bg-slate-50 py-16 border-b border-slate-200" id="tiers">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-cyan-700 uppercase font-mono">
            Cohort Packaging
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pre-Launch Cohort Options
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Astrateq Gadgets provides clear, transparent pathways depending on your early-access preferences. Select a validation tier below to customize your reservation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier) => {
            const isSelected = selectedTierId === tier.id;
            const isRecommended = tier.id === 'tier-2';
            
            return (
              <div
                key={tier.id}
                onClick={() => handleTierSelect(tier)}
                className={`relative flex flex-col justify-between rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 group ${
                  isSelected
                    ? 'border-cyan-600 bg-cyan-50/50 shadow-lg shadow-cyan-100'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 shadow-sm'
                }`}
                id={`tier-selection-${tier.id}`}
              >
                {/* Popular Badge */}
                {isRecommended && (
                  <span className="absolute -top-3 right-6 inline-flex items-center space-x-1 rounded-full bg-cyan-600 px-3 py-0.5 text-[10px] font-extrabold text-white tracking-wider uppercase">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    <span>Highly Requested</span>
                  </span>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-display text-base font-bold transition-colors ${
                        isSelected ? 'text-cyan-800' : 'text-slate-900 group-hover:text-cyan-700'
                      }`}>
                        {tier.name}
                      </h3>
                      <p className={`text-[10px] font-mono tracking-wider uppercase ${
                        isSelected ? 'text-cyan-700' : 'text-slate-500'
                      }`}>
                        {tier.tagline}
                      </p>
                    </div>
                    {/* Circle selector */}
                    <div className={`h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'border-cyan-600 bg-cyan-600 text-white' 
                        : 'border-slate-300 group-hover:border-slate-400 text-transparent'
                    }`}>
                      {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  {/* Pricing / Mode Description */}
                  <div className={`my-5 py-3 border-y flex items-baseline justify-between ${
                    isSelected ? 'border-cyan-200/60' : 'border-slate-100'
                  }`}>
                    <div>
                      <span className="font-display text-2xl font-black text-slate-900">
                        {mode === 'mode-b' ? (tier.depositAmount === 0 ? 'Free' : `$${tier.depositAmount}`) : '$0'}
                      </span>
                      <span className="text-[11px] text-slate-500 ml-1.5">
                        {mode === 'mode-b' 
                          ? (tier.depositAmount === 0 ? 'interest signal' : 'refundable deposit') 
                          : 'pre-launch validation'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {mode === 'mode-b' ? 'Refundable terms' : 'No payment today'}
                    </span>
                  </div>

                  {/* Best For */}
                  <p className="text-xs text-slate-600 mb-6 italic leading-relaxed">
                    "{tier.bestFor}"
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Included Options
                    </span>
                    <ul className="space-y-2 text-xs">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2 text-slate-700">
                          <Check className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limits List (Pre-launch transparency) */}
                  <div className={`space-y-2 border-t pt-4 ${
                    isSelected ? 'border-cyan-200' : 'border-slate-100'
                  }`}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> Note / Not Guaranteed
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-slate-500">
                      {tier.notGuaranteed.map((notg, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-slate-300 font-bold shrink-0">•</span>
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
                        ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span>{isSelected ? 'Active Selection' : 'Choose This Cohort'}</span>
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
