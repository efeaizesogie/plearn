import React, { useState } from 'react';
import { Check, ChevronDown, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenGetStarted }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const planFeatures = [
    '4 weekly live squad sessions (capped at 4 kids per mentor)',
    '50 minutes of active building and hands-on guided coding',
    'Full 24/7 access to the plearn game sandbox & asset library',
    'Personal showcase portfolio link to share with family & friends',
    'Weekly 2-minute mentor progress video sent directly to parents',
    'All starter projects, software, and cloud hosting included',
  ];

  const faqs = [
    {
      q: 'What if my child has never written code before?',
      a: 'No prior experience needed at all! Over 80% of our students start with zero coding background. We start with intuitive visual game logic where kids immediately see their characters move and react. As their comfort grows, mentors introduce real JavaScript and Python syntax step by step.',
    },
    {
      q: 'Can we pause or cancel our subscription anytime?',
      a: 'Yes, 100%. There are never any long-term contracts or lock-ins. You can pause your child’s spot during family holidays, camp season, or exams, or cancel anytime directly from your parent dashboard with a single click.',
    },
    {
      q: 'What happens if we miss a scheduled weekly session?',
      a: 'We know family schedules change! If your child misses a club jam, you can easily book a makeup session with a parallel squad that same week, or follow along with the mentor’s interactive project recap and guided replay.',
    },
    {
      q: 'What equipment or computer is needed at home?',
      a: 'Any standard Mac, Windows PC, or Chromebook with a modern web browser (like Google Chrome), a keyboard, mouse, webcam, and microphone is all that is required. Everything runs safely in the browser—no complicated installs or licenses needed.',
    },
    {
      q: 'How does the 14-day refund guarantee work?',
      a: 'If plearn isn’t an absolute hit after your child’s first two sessions, simply drop a note to our parent team within 14 days of signing up for a full 100% refund. No awkward questions asked.',
    },
    {
      q: 'What happens to my child’s data and privacy?',
      a: 'We adhere strictly to COPPA guidelines and maintain a walled-garden sandbox. We do not sell data, display advertisements, or allow unmoderated public chats. Every live session is supervised by vetted, background-checked mentors.',
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FFF8EE] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#1D1A2F] tracking-tight mb-4">
            One simple plan for after-school fun
          </h2>
          <p className="text-[#1D1A2F] text-base sm:text-xl leading-relaxed font-semibold">
            No surprise add-ons, no locked contracts. Just high-touch mentor
            guidance every single week.
          </p>
        </div>

        {/* Single Centred Pricing Card */}
        <div className="max-w-xl mx-auto mb-20 sm:mb-24">
          <div className="chunky-card bg-[#FFE9D2] p-8 sm:p-10 relative">
            {/* Top highlight badge */}
            <div className="absolute -top-4 right-8 bg-[#FF5A36] text-[#FFF8EE] border-2 border-[#1D1A2F] px-4 py-1 rounded-full text-xs sm:text-sm font-display font-bold shadow-[2px_2px_0px_#1D1A2F] flex items-center gap-1.5">
              <span>⭐ Most Loved by Families</span>
            </div>

            {/* Plan Title & Subtitle */}
            <div className="mb-6">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-[#7B61FF]">
                Full Membership
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#1D1A2F] mt-1">
                The After-School Club
              </h3>
              <p className="text-[#1D1A2F] font-semibold text-base mt-1">
                Ages 7 to 14 • 4 live weekly squad sessions per month
              </p>
            </div>

            {/* Price Display */}
            <div className="flex items-baseline gap-2 mb-6 pb-6 border-b-2 border-[#1D1A2F]/15">
              <span className="font-display font-black text-5xl sm:text-6xl text-[#1D1A2F] tracking-tight">
                $139
              </span>
              <span className="text-[#1D1A2F] font-bold text-lg">
                / month
              </span>
              <span className="ml-auto text-xs font-bold text-[#FF5A36] bg-[#FFF8EE] border-2 border-[#1D1A2F] px-3 py-1 rounded-full shadow-[1px_1px_0px_#1D1A2F]">
                Billed monthly
              </span>
            </div>

            {/* Inclusions List */}
            <div className="space-y-3.5 mb-8">
              {planFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7B61FF] border-2 border-[#1D1A2F] flex items-center justify-center shrink-0 mt-0.5 text-[#FFF8EE] shadow-[1px_1px_0px_#1D1A2F]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-[#1D1A2F] text-base font-bold leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="w-full chunky-btn bg-[#FF5A36] hover:bg-[#ff431a] text-[#FFF8EE] py-4 text-lg font-display font-bold flex items-center justify-center gap-3 cursor-pointer mb-4"
            >
              <Sparkles className="w-5 h-5" strokeWidth={2.5} />
              <span>Get started</span>
            </button>

            {/* Guarantee note */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#1D1A2F] font-bold text-center">
              <ShieldCheck className="w-4 h-4 text-[#7B61FF] shrink-0" strokeWidth={2.5} />
              <span>14-day 100% money-back guarantee • Pause anytime</span>
            </div>
          </div>
        </div>

        {/* 6-Question FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1D1A2F]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className="chunky-card bg-[#FFF8EE] border-2 border-[#1D1A2F] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#FFE9D2]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-lg sm:text-xl text-[#1D1A2F]">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border-2 border-[#1D1A2F] bg-[#FFE9D2] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FF5A36] text-[#FFF8EE]' : 'text-[#1D1A2F]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" strokeWidth={3} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-[#1D1A2F] text-base sm:text-lg leading-relaxed border-t border-[#1D1A2F]/10 mt-1">
                      <p className="mt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
