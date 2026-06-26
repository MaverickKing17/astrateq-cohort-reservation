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
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200" id="reservation-section">
      <div className="mx-auto max-w-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 h-40 w-40 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

        {/* Card Frame */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm relative z-10 text-slate-900" id="reservation-card">
          
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Cohort Validation Portal
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Reserve Your Founding Cohort Position
            </h2>
            <p className="mt-2 text-xs text-slate-500 max-w-lg mx-auto">
              You are recording early-access interest in Astrateq Gadgets’ Canadian pre-launch validation program. This helps validate demand before future hardware allocation, compatibility review, and rollout decisions.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6" id="reservation-html-form">
            
            {/* Dynamic Active Selection Indicator */}
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Selected Tier</span>
                  <span className="font-display font-bold text-sm text-slate-900">{activeTier.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono uppercase block">Pricing Terms</span>
                  <span className="font-mono text-xs font-bold text-cyan-700">
                    {mode === 'mode-b' ? activeTier.deposit : 'No Payment Required'}
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono uppercase text-[9px] text-slate-400">Validation Status</span>
                <span className="font-semibold text-emerald-600">
                  Early-access interest recorded. No payment required during validation.
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-lg bg-rose-50 border border-rose-200 p-3.5 text-xs text-rose-800 flex items-start space-x-2.5 animate-fade-in-up">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Input fields */}
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Liam MacDonald"
                  value={fullName}
                  onFocus={() => handleFocus('fullName')}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/20 transition-all"
                />
                <span className="text-[10px] text-slate-400 mt-1.5 block">
                  Confirms validation status. Strictly no spam or advertising data resale.
                </span>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Vehicle Profile Reference
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2022 Subaru Forester"
                  value={vehicle}
                  onFocus={() => handleFocus('vehicle')}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600/20 transition-all"
                />
                <span className="text-[10px] text-slate-400 mt-1.5 block">
                  Required to verify CAN bus & OBD port validation parameters.
                </span>
              </div>
            </div>

            {/* Mode-specific Checkout Inputs */}
            {mode === 'mode-a' ? (
              /* Mode A Explainer */
              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 space-y-2">
                <div className="flex items-center space-x-2 text-cyan-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">No payment required today</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your early-access interest will be recorded. This is not a purchase and does not guarantee hardware availability, compatibility, or launch timing.
                </p>
              </div>
            ) : (
              /* Mode B Stripe Simulator Input */
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-4 animate-fade-in-up">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                  <div className="flex items-center space-x-2 text-cyan-700">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">Simulated Refundable Deposit</span>
                  </div>
                  <span className="text-[9px] bg-cyan-600 text-white px-2 py-0.5 rounded font-bold uppercase">
                    Stripe Test Mode
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-3 text-xs">
                  <div className="col-span-6">
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={16}
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full rounded bg-white border border-slate-200 px-3 py-2 text-slate-850 outline-none focus:border-cyan-600 font-mono text-xs"
                      />
                      <Lock className="absolute right-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      Expiration (MM/YY)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="12/28"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded bg-white border border-slate-200 px-3 py-2 text-slate-850 outline-none focus:border-cyan-600 font-mono text-xs text-center"
                    />
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
                      CVC / CVV
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      placeholder="123"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded bg-white border border-slate-200 px-3 py-2 text-slate-850 outline-none focus:border-cyan-600 font-mono text-xs text-center"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 leading-normal italic">
                  * Note: This is a simulated checkout during pre-launch demand validation. No real charges are processed. Testing credit card credentials only.
                </p>
              </div>
            )}

            {/* Transparency terms acceptance */}
            <div className="flex items-start space-x-3 text-xs text-slate-500">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 bg-white text-cyan-600 focus:ring-0 focus:ring-offset-0 mt-0.5 accent-cyan-600 cursor-pointer"
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
              className={`w-full rounded-xl bg-slate-900 py-4 text-sm font-bold text-white shadow-xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                isSubmitting ? 'opacity-80 cursor-wait' : 'hover:scale-[1.01]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Recording Validation Signal...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4" />
                  <span>
                    {mode === 'mode-b'
                      ? 'Reserve My Founding Cohort Position'
                      : 'Record My Early-Access Interest'}
                  </span>
                </>
              )}
            </button>

            {/* Trust Micro-Copy */}
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider font-semibold">
              No payment required during validation · Not a final product purchase · Canadian driver cohort
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}
