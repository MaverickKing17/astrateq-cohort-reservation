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
      question: 'What is Astrateq Gadgets actually validating right now?',
      answer: 'We are validating early driver interest and demand signals for a privacy-first, software-led driver readiness intelligence experience designed for Canadian road conditions. Your selection helps us measure interest before making future hardware or regional rollout decisions.',
    },
    {
      question: 'Is this a guaranteed purchase or hardware preorder?',
      answer: 'No. Submitting your early-access interest is a non-binding planning signal only. Astrateq Gadgets is in a pre-launch validation phase. We do not guarantee product releases, final pricing, hardware specs, vehicle compatibility, or delivery dates.',
    },
    {
      question: 'Will I receive an OBD-II scanner or dashcam soon?',
      answer: 'No. Hardware concepts, including driver-awareness modules or OBD-II adapters, are under speculative evaluation. There are no active manufacturing lines, certified designs, or immediate shipping timelines. We are validating software-led readiness experiences first.',
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
                  className={`rounded-2xl border transition-all duration-300 shadow-xs overflow-hidden ${
                    isExpanded
                      ? 'border-[#00BFEF] border-l-4 border-l-[#00BFEF] bg-[#F1FAFF] shadow-[0_10px_25px_rgba(0,191,239,0.06)]'
                      : 'border-[#CFE0EF] bg-white hover:border-[#00BFEF] hover:shadow-xs'
                  }`}
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between px-6 py-4.5 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-display text-sm font-bold text-[#081A33] group-hover:text-[#0B7CFF] transition-colors">
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#00BFEF] border-cyan-400 text-white shadow-xs'
                        : 'bg-[#EEF6FB] border-[#CFE0EF] text-[#0B7CFF]'
                    }`}>
                      {isExpanded ? <ChevronUp className="h-3 w-3 stroke-[2.5]" /> : <ChevronDown className="h-3 w-3 stroke-[2.5]" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-5 pt-1.5 text-xs text-[#475A70] leading-relaxed border-t border-[#BFE7FA]/50 bg-white/50 animate-fade-in-up">
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
