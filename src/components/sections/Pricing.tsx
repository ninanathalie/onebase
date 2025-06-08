import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { CheckCircle, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  const features: PlanFeature[] = [
    { name: "Initial CRM Setup", starter: true, professional: true, enterprise: true },
    { name: "Basic Data Migration", starter: true, professional: true, enterprise: true },
    { name: "User Training (Basic)", starter: true, professional: true, enterprise: true },
    { name: "Custom Workflows", starter: false, professional: true, enterprise: true },
    { name: "Integration with 3rd Party Tools", starter: false, professional: true, enterprise: true },
    { name: "Advanced Analytics Setup", starter: false, professional: false, enterprise: true },
    { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
    { name: "24/7 Priority Support", starter: false, professional: false, enterprise: true },
  ];

  return (
    <Container id="pricing" className="bg-gray-50">
      <SectionTitle 
        title="Transparent Pricing" 
        subtitle="Choose the plan that fits your business needs"
      />
      
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
            }`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-600'
            }`}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="text-green-500 text-xs font-bold">Save 20%</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">Perfect for small businesses</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">${annual ? '799' : '999'}</span>
              <span className="text-gray-500 ml-2">{annual ? '/year' : '/month'}</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.starter ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.starter ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <a 
              href="#consultation"
              className="block w-full mt-6 py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300 text-center"
            >
              Get Started
            </a>
          </div>
        </div>
        
        {/* Professional Plan */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-blue-500 overflow-hidden transform scale-105 z-10">
          <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
            Most Popular
          </div>
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
            <p className="text-gray-600 mb-4">Ideal for growing companies</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">${annual ? '1599' : '1999'}</span>
              <span className="text-gray-500 ml-2">{annual ? '/year' : '/month'}</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.professional ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.professional ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <a 
              href="#consultation"
              className="block w-full mt-6 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-md text-center"
            >
              Get Started
            </a>
          </div>
        </div>
        
        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-4">For large organizations</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.enterprise ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.enterprise ? 'text-gray-700' : 'text-gray-400'}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <a 
              href="#consultation"
              className="block w-full mt-6 py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300 text-center"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pricing;