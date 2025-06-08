import React, { useState } from 'react';
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0 px-6">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
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
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What is a CRM and why do I need it?",
      answer: "A Customer Relationship Management (CRM) system helps businesses manage interactions with current and potential customers. It centralizes customer information, tracks sales processes, and improves customer service. Businesses need CRMs to organize customer data, streamline sales processes, improve communication, and ultimately increase revenue through better customer relationships."
    },
    {
      question: "How long does it take to set up a CRM system?",
      answer: "The time required to set up a CRM system varies depending on the complexity of your business needs and the size of your organization. A basic setup can be completed in 1-2 weeks, while more complex implementations involving custom integrations and data migration may take 4-8 weeks. Our team works efficiently to minimize disruption to your business operations during the setup process."
    },
    {
      question: "Can I integrate my existing tools with the CRM?",
      answer: "Yes, most modern CRMs offer integration capabilities with a wide range of business tools including email platforms, marketing automation software, accounting systems, and more. At 1Base, we specialize in creating seamless integrations between your CRM and existing business tools to create a unified workflow that enhances productivity and eliminates data silos."
    },
    {
      question: "Will my team need extensive training to use the CRM?",
      answer: "While CRM systems are designed to be user-friendly, some training is beneficial to ensure your team can maximize the system's capabilities. We provide comprehensive training sessions tailored to different user roles within your organization. Additionally, we offer documentation and resources for ongoing reference, as well as support to address any questions that arise as your team uses the system."
    },
    {
      question: "What kind of support do you offer after implementation?",
      answer: "We provide ongoing support after your CRM implementation is complete. Our support packages include regular system health checks, user assistance, troubleshooting, and guidance on optimizing your CRM usage. We also offer advanced support options with dedicated account managers for businesses that require higher levels of assistance."
    },
    {
      question: "Is my data secure in a CRM system?",
      answer: "Data security is a top priority in CRM implementations. Modern CRM platforms employ robust security measures including encryption, secure authentication, regular backups, and compliance with data protection regulations. During implementation, we configure security settings according to industry best practices and your specific requirements to ensure your customer data remains protected."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container id="faq">
      <SectionTitle 
        centered
        subtitle="Frequently Asked Questions"
        title="Get the Insights You Need to Use Our Tools with Confidence" 
      />
      
      <div className="max-w-3xl mx-auto bg-white/80 rounded-xl shadow-sm overflow-hidden">
        {faqs.map((faq, index) => (
          <FaqItem 
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-slate-600 mb-2 capitalize">Still have questions?</p>
        <a 
          href="#contact" 
          className="inline-flex items-center capitalize text-slate-900 hover:text-slate-800 font-medium"
        >
          Contact our support team
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Container>
  );
};

export default Faq;