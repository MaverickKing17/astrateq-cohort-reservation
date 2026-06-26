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
      case 'tier-2': return 'Guardian Readiness Pro';
      case 'tier-3': return 'Founder Priority Review';
      default: return 'Guardian Readiness Pro';
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
            Early-Access Interest Recorded
          </h2>
          <p className="text-xs text-[#475A70] max-w-md mx-auto mb-8 leading-relaxed">
            Your submission has been received. Astrateq Gadgets has recorded your selected cohort pathway for the Canadian pre-launch validation program.
          </p>

          {/* Summary Box */}
          <div className="rounded-2xl bg-[#F8FBFF] border border-[#D7E7F5] p-5 text-left text-xs space-y-3.5 mb-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Record ID</span>
              <span className="font-mono font-bold text-[#081A33]">{id}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Selected Pathway</span>
              <span className="font-display font-bold text-[#0B7CFF]">{getTierName()}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Email Address</span>
              <span className="font-semibold text-[#475A70]">{email}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Vehicle Profile</span>
              <span className="font-semibold text-[#475A70]">{vehicleType} {region ? `(${region})` : ''}</span>
            </div>

            <div className="flex items-center justify-between border-b border-[#D7E7F5] pb-2.5">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Payment Status</span>
              <span className="font-bold text-[#16B981]">No payment required today</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#7B8CA3] font-mono uppercase font-bold tracking-wider text-[10px]">Validation Mode</span>
              <span className="font-semibold text-[#475A70]">Early-access interest only</span>
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
                  <strong className="text-[#081A33]">Vehicle Profile Evaluation:</strong> We will evaluate your vehicle profile parameters to determine compatibility prioritization for Astrateq’s software-led readiness insights.
                </p>
              </li>

              <li className="flex items-start space-x-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] font-bold border border-[#D7E7F5] text-[10px]">
                  2
                </div>
                <p>
                  <strong className="text-[#081A33]">Pre-Launch Updates:</strong> You will receive transparent development progress, readiness validation goals, and localized intelligence insights.
                </p>
              </li>

              <li className="flex items-start space-x-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] font-bold border border-[#D7E7F5] text-[10px]">
                  3
                </div>
                <p>
                  <strong className="text-[#081A33]">Co-Design Feedback:</strong> We may invite you to provide feedback on our software interface concepts, focusing on winter driver readiness priorities for Canadian roads.
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
              <span>Return to Diagnostic</span>
            </button>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0B7CFF]/10 hover:bg-[#0B7CFF]/15 text-[#0B7CFF] text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <span>Back to Home</span>
            </button>
          </div>

          {/* Transparent Trust Footnote */}
          <p className="text-[10px] text-[#7B8CA3] leading-relaxed mt-6 italic">
            This is a pre-launch validation signal and does not guarantee product availability, hardware availability, compatibility, pricing, or launch timing.
          </p>

        </div>
      </div>
    </section>
  );
}
