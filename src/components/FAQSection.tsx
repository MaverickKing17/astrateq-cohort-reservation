import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQSectionProps {
  onTriggerEvent: (name: string, meta: Record<string, any>) => void;
}

export default function FAQSection({ onTriggerEvent }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'What am I reserving?',
      answer: 'You are recording early-access interest in the Astrateq Gadgets founding cohort. This helps validate demand, compatibility priorities, and rollout planning before future product availability decisions.',
    },
    {
      question: 'Is this a purchase?',
      answer: 'No. This is not a final product purchase. If the page is in no-payment mode, no payment is required today. If a refundable deposit mode is enabled later, the deposit terms will be clearly stated before submission.',
    },
    {
      question: 'Does this guarantee I will receive hardware?',
      answer: 'No. Completing a reservation does not guarantee hardware availability, compatibility, delivery, or launch timing. Astrateq Gadgets is currently in pre-launch validation.',
    },
    {
      question: 'Why was I invited here?',
      answer: 'You arrived after completing the Vehicle Readiness diagnostic. Your profile may align with current validation priorities, which is why you are being invited to record founding cohort interest.',
    },
    {
      question: 'What data do you collect?',
      answer: 'Astrateq may collect basic vehicle profile information, driving context, readiness preferences, email address, and selected cohort interest. This information is used to validate demand and inform future rollout planning.',
    },
    {
      question: 'Will my driving data be sold?',
      answer: 'Astrateq Gadgets is not being designed around advertising resale or insurer-style tracking. The validation system is intended to minimize unnecessary data collection and focus on readiness-related inputs.',
    },
    {
      question: 'When will access begin?',
      answer: 'Timing depends on validation results, supplier readiness, compatibility review, and future manufacturing decisions. Founding cohort members may receive updates as the rollout plan becomes clearer.',
    }
  ];

  const handleToggle = (index: number) => {
    const isExpanded = expandedIndex === index;
    setExpandedIndex(isExpanded ? null : index);
    
    onTriggerEvent('faq_opened', { 
      index, 
      question: faqs[index].question, 
      action: isExpanded ? 'close' : 'open' 
    });
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white py-20 border-b border-[#D7E7F5]" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-[#0B7CFF] uppercase font-mono">
            Information Center
          </span>
          <h2 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight text-[#081A33] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm text-[#475A70] leading-relaxed">
            Have questions about Astrateq's Canadian pre-launch program? Find immediate answers on early-access interest, pricing, data, and hardware validation below.
          </p>
        </div>

        {/* Live Search bar inside FAQ for premium feel */}
        <div className="relative max-w-lg mx-auto mb-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
            <Search className="h-4 w-4 text-[#7B8CA3]" />
          </div>
          <input
            type="text"
            placeholder="Search pre-launch answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[#CFE0EF] bg-[#F8FBFF] py-3.5 pl-10 pr-4 text-xs text-[#081A33] placeholder-[#7B8CA3] outline-none focus:border-[#0B7CFF] transition-all shadow-xs"
          />
        </div>

        {/* FAQ list */}
        <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 shadow-xs ${
                    isExpanded
                      ? 'border-[#00BFEF] bg-[#F8FBFF] shadow-sm shadow-[#0B7CFF]/5'
                      : 'border-[#D7E7F5] bg-white hover:border-[#CFE0EF]'
                  }`}
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="font-display text-xs font-bold text-[#081A33] hover:text-[#0B7CFF] transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF6FB] text-[#0B7CFF] border border-[#D7E7F5]">
                      {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#475A70] leading-relaxed border-t border-[#D7E7F5]/60 animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-[#7B8CA3] text-xs italic">
              No matching questions found. Try search keywords like "purchase", "data" or "hardware".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
