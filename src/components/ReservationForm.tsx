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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D7E7F5]" id="reservation-section">
      <div className="mx-auto max-w-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 h-40 w-40 rounded-full bg-blue-200/10 blur-[80px] pointer-events-none" />

        {/* Card Frame */}
        <div className="rounded-3xl border border-[#CFE0EF] border-t-4 border-t-[#00BFEF] bg-white p-8 sm:p-12 shadow-[0_18px_50px_rgba(8,26,51,0.10)] relative z-10 text-[#081A33] card-premium-gradient overflow-hidden" id="reservation-card">
          
          {/* Header */}
          <div className="text-center mb-8">
            {/* Step Label */}
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-[#00BFEF] block mb-2.5 font-mono">
              Step 4: Record Your Interest
            </span>
            <span className="text-[10px] font-bold text-[#0B7CFF] uppercase tracking-widest bg-[#EEF6FB] border border-[#D7E7F5] px-3.5 py-1.5 rounded-full shadow-xs">
              Cohort Validation Portal
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-[#081A33] sm:text-3xl">
              Reserve Your Founding Cohort Position
            </h2>
            <p className="mt-3 text-xs text-[#475A70] max-w-lg mx-auto leading-relaxed">
              You are recording early-access interest in Astrateq Gadgets’ Canadian pre-launch validation program. This helps validate demand before future hardware allocation, compatibility review, and rollout decisions.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6" id="reservation-html-form">
            
            {/* Dynamic Active Selection Indicator */}
            <div className="rounded-2xl bg-[#F3F9FF] border-2 border-[#00BFEF]/40 p-6 shadow-md relative overflow-hidden flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#E2F5FF] text-[#00AEEF] border border-[#BFE7FA] shrink-0 mt-1">
                <ShieldCheck className="h-6 w-6 stroke-[2]" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#00BFEF]/10 pb-3">
                  <div>
                    <span className="text-[10px] text-[#00AEEF] font-mono uppercase block font-extrabold tracking-wider">Active Selection</span>
                    <h3 className="font-display font-extrabold text-lg text-[#081A33]">{activeTier.name}</h3>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-[10px] text-[#7B8CA3] font-mono uppercase block font-bold tracking-wider">Status & Terms</span>
                    <span className="font-mono text-sm font-black text-[#0B7CFF]">
                      {mode === 'mode-b' ? activeTier.deposit : '$0 Today'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#475A70]">
                  <div className="flex items-center space-x-1.5 bg-[#EAFBF4] text-[#047857] px-3 py-1 rounded-full border border-emerald-100/80 font-bold text-[10px] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16B981] animate-pulse" />
                    <span>{mode === 'mode-b' ? (activeTier.price === 0 ? 'No payment required today' : '100% Refundable Deposit') : 'No payment required today'}</span>
                  </div>
                  <span className="text-[10px] text-[#7B8CA3] font-bold uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#D7E7F5]/80 font-mono">
                    Pre-launch Validation
                  </span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded-xl bg-rose-50 border border-rose-100 p-4 text-xs text-rose-600 flex items-start space-x-2.5 animate-fade-in-up">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Input fields wrapped in soft blue panels */}
            <div className="grid grid-cols-1 gap-5">
              <div className="bg-[#F8FBFF]/80 p-4 sm:p-5 rounded-2xl border border-[#CFE0EF] shadow-2xs">
                <label className="block text-[11px] font-bold text-[#475A70] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Liam MacDonald"
                  value={fullName}
                  onFocus={() => handleFocus('fullName')}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-[#CFE0EF] bg-white px-4 py-3 text-sm text-[#081A33] placeholder-[#7B8CA3] outline-none focus:border-[#0B7CFF] focus:ring-1 focus:ring-[#0B7CFF]/25 transition-all shadow-xs"
                />
              </div>

              <div className="bg-[#F8FBFF]/80 p-4 sm:p-5 rounded-2xl border border-[#CFE0EF] shadow-2xs">
                <label className="block text-[11px] font-bold text-[#475A70] uppercase tracking-wider mb-1.5">
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
                  className="w-full rounded-xl border border-[#CFE0EF] bg-white px-4 py-3 text-sm text-[#081A33] placeholder-[#7B8CA3] outline-none focus:border-[#0B7CFF] focus:ring-1 focus:ring-[#0B7CFF]/25 transition-all shadow-xs"
                />
                <span className="text-[10px] text-[#7B8CA3] mt-2 block pl-1">
                  Confirms validation status. Strictly no spam or advertising data resale.
                </span>
              </div>

              <div className="bg-[#F8FBFF]/80 p-4 sm:p-5 rounded-2xl border border-[#CFE0EF] shadow-2xs">
                <label className="block text-[11px] font-bold text-[#475A70] uppercase tracking-wider mb-1.5">
                  Vehicle Profile Reference
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2022 Subaru Forester"
                  value={vehicle}
                  onFocus={() => handleFocus('vehicle')}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full rounded-xl border border-[#CFE0EF] bg-white px-4 py-3 text-sm text-[#081A33] placeholder-[#7B8CA3] outline-none focus:border-[#0B7CFF] focus:ring-1 focus:ring-[#0B7CFF]/25 transition-all shadow-xs"
                />
                <span className="text-[10px] text-[#7B8CA3] mt-2 block pl-1">
                  Required to verify CAN bus & OBD port validation parameters.
                </span>
              </div>
            </div>

            {/* Mode-specific Checkout Inputs */}
            {mode === 'mode-a' ? (
              /* Mode A Explainer */
              <div className="rounded-xl bg-[#F8FBFF] border border-[#CFE0EF] p-4.5 space-y-2">
                <div className="flex items-center space-x-2 text-[#0B7CFF]">
                  <CheckCircle2 className="h-4 w-4 text-[#16B981]" />
                  <span className="text-xs font-bold uppercase tracking-wider font-mono">No payment required today</span>
                </div>
                <p className="text-xs text-[#475A70] leading-relaxed">
                  Your early-access interest will be recorded. This is not a purchase and does not guarantee hardware availability, compatibility, or launch timing.
                </p>
              </div>
            ) : (
              /* Mode B Stripe Simulator Input */
              <div className="rounded-xl border border-[#CFE0EF] bg-[#F8FBFF] p-5 space-y-4 animate-fade-in-up shadow-xs">
                <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-3">
                  <div className="flex items-center space-x-2 text-[#0B7CFF]">
                    <CreditCard className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider font-mono">Simulated Refundable Deposit</span>
                  </div>
                  <span className="text-[9px] bg-[#EEF6FB] border border-[#D7E7F5] text-[#0B7CFF] px-2.5 py-1 rounded font-extrabold uppercase tracking-wide">
                    Stripe Test Mode
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-3 text-xs">
                  <div className="col-span-6">
                    <label className="block text-[10px] font-bold text-[#475A70] uppercase tracking-wide mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={16}
                        placeholder="4242 4242 4242 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                        className="w-full rounded-lg border border-[#CFE0EF] bg-white px-3 py-2 text-[#081A33] outline-none focus:border-[#0B7CFF] font-mono text-xs shadow-2xs"
                      />
                      <Lock className="absolute right-3 top-2.5 h-3.5 w-3.5 text-[#7B8CA3]" />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-bold text-[#475A70] uppercase tracking-wide mb-1">
                      Expiration (MM/YY)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="12/28"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded-lg border border-[#CFE0EF] bg-white px-3 py-2 text-[#081A33] outline-none focus:border-[#0B7CFF] font-mono text-xs text-center shadow-2xs"
                    />
                  </div>

                  <div className="col-span-3">
                    <label className="block text-[10px] font-bold text-[#475A70] uppercase tracking-wide mb-1">
                      CVC / CVV
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      placeholder="123"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ''))}
                      className="w-full rounded-lg border border-[#CFE0EF] bg-white px-3 py-2 text-[#081A33] outline-none focus:border-[#0B7CFF] font-mono text-xs text-center shadow-2xs"
                    />
                  </div>
                </div>

                <p className="text-[10px] text-[#7B8CA3] leading-normal italic">
                  * Note: This is a simulated checkout during pre-launch demand validation. No real charges are processed. Testing credit card credentials only.
                </p>
              </div>
            )}

            {/* Bottom action commitment area */}
            <div className="border-t border-[#CFE0EF] pt-6 -mx-8 sm:-mx-12 px-8 sm:px-12 bg-gradient-to-b from-[#FFFFFF] to-[#F8FBFF] space-y-6">
              
              {/* Transparency terms acceptance */}
              <div className="flex items-start space-x-3 text-xs text-[#475A70]">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="h-4 w-4 rounded border-[#CFE0EF] bg-white text-[#0B7CFF] focus:ring-0 focus:ring-offset-0 mt-0.5 accent-[#0B7CFF] cursor-pointer"
                />
                <label htmlFor="agreeTerms" className="leading-relaxed cursor-pointer select-none">
                  I understand this is a pre-launch validation signal. Submitting does not guarantee hardware availability, compatibility, launch timing, or future pricing. Deposits (if any) are fully refundable as per the early validation terms.
                </label>
              </div>

              {/* Trust strip above final CTA */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 pb-1 text-center border-t border-[#CFE0EF]/60">
                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#7B8CA3] font-medium">
                  <Lock className="h-3.5 w-3.5 text-[#00BFEF] shrink-0" />
                  <span>Privacy-first encryption</span>
                </div>
                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#7B8CA3] font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#16B981] shrink-0" />
                  <span>Muted notifications only</span>
                </div>
                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-[#7B8CA3] font-medium">
                  <Sparkles className="h-3.5 w-3.5 text-[#0B7CFF] shrink-0" />
                  <span>Canadian validation focus</span>
                </div>
              </div>

              {/* Action Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="reservation-submit-btn"
                className={`w-full rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer ${
                  isSubmitting ? 'opacity-85 cursor-wait' : 'hover:scale-[1.01] hover:opacity-95 hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    <span>Recording Validation Signal...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4 text-white" />
                    <span>
                      {mode === 'mode-b'
                        ? 'Reserve My Founding Cohort Position'
                        : 'Record My Early-Access Interest'}
                    </span>
                  </>
                )}
              </button>

              {/* Trust Micro-Copy */}
              <p className="text-[10px] text-[#7B8CA3] text-center uppercase tracking-wider font-bold">
                No payment required during validation · Not a final product purchase · Canadian driver cohort
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
