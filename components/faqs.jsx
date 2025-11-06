'use client';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "Who do you usually work with?",
    answer: "We mainly work with SaaS founders who want to grow their brand through content, and streamers who want to repurpose streams into short clips. If you create content and want growth, we're a fit."
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer: "We handle video editing, thumbnails design, content strategy, and stream clipping. Our goal is to take the content workload off your plate so you can focus on building or streaming."
  },
  {
    id: 3,
    question: "How does the process work?",
    answer: "It's simple. We start with a free call to understand your goals. Then we plan your content strategy, edit your videos, and deliver thumbnails/clips. You'll always have room for feedback before final delivery."
  },
  {
    id: 4,
    question: "Do I need to sign a long-term contract?",
    answer: "No. We offer flexible packages. You can start small and scale as your content needs grow."
  }
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-[var(--border-gray)] rounded-xl overflow-hidden transition-all duration-300">
      <button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-base sm:text-xl font-['Inter'] font-bold text-white pr-3 sm:pr-4">
          {faq.question}
        </h3>
        <div className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-4 sm:px-6 pb-3 sm:pb-4 pt-0">
          <p className="text-xs sm:text-sm text-white/80 font-['Nunito_Sans'] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Poppins'] font-extrabold text-white mb-4 sm:mb-6 tracking-wide">
            Still curious? We've got you.
          </h2>
        </div>

        {/* FAQs grid - Single column on mobile, 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Left column */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.slice(0, 2).map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.slice(2, 4).map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
