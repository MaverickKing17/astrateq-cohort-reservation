import { useState, useRef, FormEvent } from 'react';
import { ShieldCheck, Info, CreditCard, Lock, Sparkles, CheckCircle2, FileText, HelpCircle } from 'lucide-react';
import { FunnelMode, DiagnosticResult, Reservation } from '../types';

interface ReservationFormProps {
  mode: FunnelMode;
  diagnostic: DiagnosticResult;
  selectedTierId: string;
  onReservationComplete: (reservation: Reservation) => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function ReservationForm({
  mode,
  diagnostic,
  selectedTierId,
  onReservationComplete,
  onTriggerEvent,
}: ReservationFormProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [vehicle, setVehicle] = useState(`${diagnostic.vehicleYear} ${diagnostic.vehicleType}`);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Stripe Card Mock States
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  // Get active tier details for display
  const getTierDetails = () => {
    switch (selectedTierId) {
      case 'tier-1':
        return { name: 'Readiness Access', price: 0, deposit: 'No Payment Needed' };
      case 'tier-2':
        return { name: 'Guardian Pro Interest', price: 49, deposit: '$49 Refundable Deposit' };
      case 'tier-3':
        return { name: 'Founder Priority Allocation', price: 99, deposit: '$99 Refundable Deposit' };
      default:
        return { name: 'Guardian Pro Interest', price: 49, deposit: '$49 Refundable Deposit' };
    }
  };

  const activeTier = getTierDetails();

  const handleFocus = (field: string) => {
    onTriggerEvent('reservation_started', { field, selectedTierId, mode });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !fullName.trim()) {
      setErrorMessage('Please fill in your full name and email address.');
      return;
    }

    if (mode === 'mode-b' && (cardNumber.length < 16 || cardExpiry.length < 4 || cardCvc.length < 3)) {
      setErrorMessage('Please complete all simulated payment fields for testing.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('Please accept the pre-launch validation parameters.');
      return;
    }

    setIsSubmitting(true);
    onTriggerEvent('checkout_started_if_applicable', { 
      mode, 
      tier: activeTier.name, 
      email, 
      price: mode === 'mode-b' ? activeTier.price : 0 
    });

    // Simulate pre-launch submission delay
    setTimeout(() => {
      const reservation: Reservation = {
        id: 'AST-' + Math.floor(Math.random() * 90000 + 10000),
        email,
        tierId: selectedTierId,
        score: diagnostic.score,
        classification: diagnostic.classification,
        mode,
        timestamp: new Date().toISOString(),
        vehicleType: vehicle,
        region: diagnostic.region,
      };

      setIsSubmitting(false);
      onTriggerEvent('reservation_completed', { 
        id: reservation.id, 
        email, 
        tier: activeTier.name, 
        mode 
      });
      onReservationComplete(reservation);
    }, 1500);
  };

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-900" id="reservation-section">
      <div className="mx-auto max-w-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 h-40 w-40 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

        {/* Card Frame */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 shadow-xl relative z-10 text-slate-100" id="reservation-card">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 border border-cyan-850 px-3 py-1 rounded-full">
              Cohort Validation Portal
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
              Reserve Your Founding Cohort Position
            </h2>
            <p className="mt-2 text-xs text-slate-400 max-w-lg mx-auto">
              You are recording early-access interest in Astrateq Gadgets’ Canadian pre-launch validation program. This helps validate demand before future hardware allocation, compatibility review, and rollout decisions.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6" id="reservation-html-form">
            
            {/* Dynamic Active Selection Indicator */}
            <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">Selected Tier</span>
                  <span className="font-display font-bold text-sm text-slate-200">{activeTier.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">Pricing Terms</span>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {mode === 'mode-b' ? activeTier.deposit : 'No Payment Required'}
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-850 pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono uppercase text-[9px] text-slate-500">Validation Status</span>
                <span className="font-semibold text-emerald-400">
                  Early-access interest recorded. No payment required during validation.
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-lg bg-rose-950/50 border border-rose-900/50 p-3.5 text-xs text-rose-300 flex items-start space-x-2.5 animate-fade-in-up">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Input fields */}
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Liam MacDonald"
                  value={fullName}
                  onFocus={() => handleFocus('fullName')}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. liam@gmail.ca"
                  value={email}
                  onFocus={() => handleFocus('email')}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    onTriggerEvent('email_submitted', { email: e.target.value });
                  }}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                />
                <span className="text-[10px] text-slate-500 mt-1.5 block">
                  Confirms validation status. Strictly no spam or advertising data resale.
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Vehicle Profile Reference
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2022 Subaru Forester"
                  value={vehicle}
                  onFocus={() => handleFocus('vehicle')}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/25 transition-all"
                />
                <span className="text-[10px] text-slate-500 mt-1.5 block">
                  Required to verify CAN bus & OBD port validation parameters.
                </span>
              </div>
            </div>

            {/* Mode-specific Checkout Inputs */}
            {mode === 'mode-a' ? (
              /* Mode A Explainer */
              <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">No payment required today</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Your early-access interest will be recorded. This is not a purchase and does not guarantee hardware availability, compatibility, or launch timing.
                </p>
              </div>
            ) : (
              /* Mode B Stripe Simulator Input */
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-4 animate-fade-in-up">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">Simulated Refundable Deposit</span>
                  </div>
                  <span className="text-[9px] bg-cyan-950 border border-cyan-850 text-cyan-400 px-2.5 py-0.5 rounded font-bold uppercase">
                    Stripe Test Mode
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-3 text-xs">
                  <div className="col-span-6">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={16}
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full rounded bg-slate-900 border border-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500 font-mono text-xs"
                      />
                      <Lock className="absolute right-3 top-2.5 h-3.5 w-3.5 text-slate-500" />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      Expiration (MM/YY)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="12/28"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded bg-slate-900 border border-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500 font-mono text-xs text-center"
                    />
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">
                      CVC / CVV
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      placeholder="123"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded bg-slate-900 border border-slate-800 px-3 py-2 text-white outline-none focus:border-cyan-500 font-mono text-xs text-center"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-slate-500 leading-normal italic">
                  * Note: This is a simulated checkout during pre-launch demand validation. No real charges are processed. Testing credit card credentials only.
                </p>
              </div>
            )}

            {/* Transparency terms acceptance */}
            <div className="flex items-start space-x-3 text-xs text-slate-400">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 rounded border-slate-800 bg-slate-950 text-cyan-400 focus:ring-0 focus:ring-offset-0 mt-0.5 accent-cyan-400 cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="leading-relaxed cursor-pointer select-none">
                I understand this is a pre-launch validation signal. Submitting does not guarantee hardware availability, compatibility, launch timing, or future pricing. Deposits (if any) are fully refundable as per the early validation terms.
              </label>
            </div>

            {/* Action Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              id="reservation-submit-btn"
              className={`w-full rounded-xl bg-cyan-500 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                isSubmitting ? 'opacity-80 cursor-wait' : 'hover:bg-cyan-400 hover:scale-[1.01]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                  <span>Recording Validation Signal...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4 text-slate-950" />
                  <span>
                    {mode === 'mode-b'
                      ? 'Reserve My Founding Cohort Position'
                      : 'Record My Early-Access Interest'}
                  </span>
                </>
              )}
            </button>

            {/* Trust Micro-Copy */}
            <p className="text-[10px] text-slate-500 text-center uppercase tracking-wider font-semibold">
              No payment required during validation · Not a final product purchase · Canadian driver cohort
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}
