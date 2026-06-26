import { CheckCircle, Mail, ShieldCheck, ArrowRight, Share2, Award, Calendar } from 'lucide-react';
import { Reservation } from '../types';

interface PostSubmissionConfirmationProps {
  reservation: Reservation;
  onReset: () => void;
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function PostSubmissionConfirmation({
  reservation,
  onReset,
  onTriggerEvent,
}: PostSubmissionConfirmationProps) {
  const { id, email, tierId, score, classification, mode, timestamp, vehicleType, region } = reservation;

  const getTierName = () => {
    switch (tierId) {
      case 'tier-1': return 'Readiness Access';
      case 'tier-2': return 'Guardian Pro Interest';
      case 'tier-3': return 'Founder Priority Allocation';
      default: return 'Guardian Pro Interest';
    }
  };

  const getValidationStatus = () => {
    if (mode === 'mode-a') {
      return 'Recorded / No payment charged';
    } else {
      const amount = tierId === 'tier-3' ? '$99' : tierId === 'tier-2' ? '$49' : '$0';
      return `Simulated Refundable Deposit of ${amount} Registered`;
    }
  };

  const handleShareClick = () => {
    onTriggerEvent('share_clicked', { reservationId: id });
    alert('Pre-launch share link copied to clipboard! (Simulated)');
  };

  return (
    <section className="bg-[#F5F9FC] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#D7E7F5] animate-fade-in-up" id="post-submission-view">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-10 shadow-2xl shadow-slate-200/50 relative overflow-hidden text-center text-[#081A33]">
          
          {/* Subtle green ambient light */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 h-36 w-36 rounded-full bg-emerald-500/5 blur-[80px]" />

          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-[#16B981] mb-6 shadow-sm shadow-emerald-500/10">
            <CheckCircle className="h-10 w-10" />
          </div>

          {/* Title & Copy */}
          <h2 className="font-display text-2xl font-bold text-[#081A33] sm:text-3xl mb-3">
            Founding Cohort Interest Recorded
          </h2>
          <p className="text-xs text-[#475A70] max-w-md mx-auto mb-8 leading-relaxed">
            Your early-access interest has been received. A confirmation email has been sent with your selected cohort tier and validation status.
          </p>

          {/* Summary Box */}
          <div className="rounded-2xl bg-[#F8FBFF] border border-[#D7E7F5] p-5 text-left text-xs space-y-3.5 mb-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Reservation Ref</span>
              <span className="font-mono font-bold text-[#081A33]">{id}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Selected Tier</span>
              <span className="font-display font-bold text-[#0B7CFF]">{getTierName()}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Driver Email</span>
              <span className="font-semibold text-[#475A70]">{email}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Validation Status</span>
              <span className="font-bold text-[#16B981]">{getValidationStatus()}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Vehicle Profile</span>
              <span className="font-semibold text-[#475A70] text-right">{vehicleType} ({region})</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left max-w-lg mx-auto space-y-4 mb-8">
            <h3 className="font-display text-sm font-bold text-[#081A33] flex items-center space-x-2">
              <Award className="h-4 w-4 text-[#0B7CFF]" />
              <span>What happens next:</span>
            </h3>

            <ul className="space-y-3 text-xs text-[#475A70]">
              <li className="flex items-start space-x-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] font-bold border border-[#D7E7F5] text-[10px]">
                  1
                </div>
                <p>
                  <strong className="text-[#081A33]">CAN-Bus Compatibility Screen:</strong> Astrateq engineers will review your vehicle model compatibility parameters against targeted rollout priorities.
                </p>
              </li>

              <li className="flex items-start space-x-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] font-bold border border-[#D7E7F5] text-[10px]">
                  2
                </div>
                <p>
                  <strong className="text-[#081A33]">Private Rollout Bulletins:</strong> You will receive transparent development progress, supplier certifications, and validation goals directly.
                </p>
              </li>

              <li className="flex items-start space-x-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] font-bold border border-[#D7E7F5] text-[10px]">
                  3
                </div>
                <p>
                  <strong className="text-[#081A33]">Co-Design Survey:</strong> We may invite you to private feature definition workshops focusing on specialized winter readiness priorities for Canadian climates.
                </p>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#D7E7F5] pt-8">
            <button
              onClick={onReset}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#475A70] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors border border-[#D7E7F5] cursor-pointer shadow-xs"
            >
              <Calendar className="h-4 w-4 text-[#7B8CA3]" />
              <span>Submit Another Reservation</span>
            </button>

            <button
              onClick={handleShareClick}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B7CFF] to-[#13C8F7] text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-md shadow-blue-500/15 hover:opacity-95"
            >
              <Share2 className="h-4 w-4 text-white" />
              <span>Share Pre-Launch Program</span>
            </button>
          </div>

          {/* Transparent Trust Footnote */}
          <p className="text-[10px] text-[#7B8CA3] leading-relaxed mt-6 italic">
            * This is a pre-launch validation signal, not a guarantee of hardware availability, compatibility, pricing, or delivery timing.
          </p>

        </div>
      </div>
    </section>
  );
}
