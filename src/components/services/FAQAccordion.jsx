import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import useInView from '../../hooks/useInView';
import { FAQS } from '../../data/constants';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-500 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          } ${
            openIndex === i
              ? 'border-primary-200 bg-primary-50/50 shadow-sm'
              : 'border-gray-100 bg-white hover:border-gray-200'
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
          >
            <span className={`font-semibold pr-4 ${openIndex === i ? 'text-primary-700' : 'text-navy-900'}`}>
              {faq.question}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180 text-primary-600' : 'text-gray-400'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
