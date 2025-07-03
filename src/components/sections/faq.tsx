import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

import { faqs } from '@/data/faq-data';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 last:border-b-0 px-6">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-slate-900 dark:text-slate-300">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-slate-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-500" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-slate-600 dark:text-slate-400">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container id="faq">
      <SectionTitle centered subtitle="Frequently Asked Questions" title="Get the Insights You Need to Use Our Tools with Confidence" />

      <div className="max-w-3xl mx-auto bg-white/80 dark:bg-white/5 rounded-xl shadow-sm overflow-hidden">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
        ))}
      </div>

      <div className="mt-10 pb-16 lg:pb-24 text-center border-b border-dashed border-primary-300">
        <p className="text-slate-600 dark:text-slate-400 mb-2 capitalize">Still have questions?</p>
        <a href="#contact" className="inline-flex items-center capitalize text-slate-900 hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-100 font-medium">
          Contact our support team
          <ArrowRight />
        </a>
      </div>
    </Container>
  );
};

export default Faq;