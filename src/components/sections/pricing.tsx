import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { BadgeCheck, X } from "lucide-react";

interface PlanFeature {
  name: string;
  essential: boolean;
  plus: boolean;
  premium: boolean;
}

const Pricing = () => {
  const features: PlanFeature[] = [
    { name: "Zoho CRM Basic Setup", essential: true, plus: true, premium: true },
    { name: "Business Email Setup", essential: true, plus: true, premium: true },
    { name: "Zoho Books Access + CRM Connection", essential: true, plus: true, premium: true },
    { name: "Business Workflows", essential: true, plus: true, premium: true },
    { name: "CRM Layout Customization", essential: true, plus: true, premium: true },
    { name: "Standard Reports & Dashboards", essential: true, plus: true, premium: true },
    { name: "Process Flow Design", essential: false, plus: true, premium: true },
    { name: "Zoho Books Customization", essential: false, plus: true, premium: true },
    { name: "Blueprint Implementation", essential: false, plus: true, premium: true },
    { name: "Custom Functions / Scripts", essential: false, plus: true, premium: true },
    { name: "User Role & Permission Setup", essential: false, plus: true, premium: true },
    { name: "3rd Party Integration", essential: false, plus: false, premium: true },
    { name: "HR & People Suite", essential: false, plus: true, premium: true },
    { name: "Internal Documentation + Video", essential: false, plus: false, premium: true },
  ];

  return (
    <Container id="pricing" className="mb-24 lg:mb-40 max-w-7xl mx-auto">
      <SectionTitle centered subtitle="Transparent Pricing" title="Choose the plan that fits your business needs" />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 pt-8">
        {/* Essential Plan */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-medium text-primary-300 mb-1">Essential</h3>
            <p className="font-extralight text-slate-400 mb-4">Perfect for small businesses</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-semibold text-slate-900">AED 9,900</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.essential ? <BadgeCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" /> : <X className="h-4 w-4 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />}
                  <span className={feature.essential ? "text-slate-700 text-sm" : "text-slate-400 text-sm"}>{feature.name}</span>
                </li>
              ))}
            </ul>

            <a href="#" className="block w-full mt-6 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors duration-300 text-center">
              Get Started
            </a>
          </div>
        </div>

        {/* Plus Plan */}
        <div className="bg-primary-500/20 rounded-xl overflow-hidden transform scale-105 z-10">
          <div className="pt-2 pb-1 font-medium uppercase text-xs text-center text-primary-400">
            <span>Most Popular</span>
          </div>
          <div className="bg-gradient-to-bl from-primary-50 via-white to-white rounded-2xl border-4 border-primary-500/20">
            <div className="p-6 border-b border-white">
              <h3 className="text-lg font-medium text-primary-300 mb-1">Plus</h3>
              <p className="font-extralight text-slate-400 mb-4">Ideal for growing companies</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-semibold text-slate-900">AED 14,900</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.plus ? <BadgeCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" /> : <X className="h-4 w-4 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />}
                    <span className={feature.plus ? "text-slate-700 text-sm" : "text-slate-400 text-sm"}>{feature.name}</span>
                  </li>
                ))}
              </ul>

              <a href="#consultation" className="block w-full mt-6 py-3 px-4 bg-primary-500 hover:bg-primary-500 text-white rounded-lg transition-colors duration-300 shadow-md text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-medium text-primary-300 mb-1">Premium</h3>
            <p className="font-extralight text-slate-400 mb-4">For large organizations</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-semibold text-slate-900">AED 25,000</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.premium ? <BadgeCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" /> : <X className="h-4 w-4 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />}
                  <span className={feature.premium ? "text-slate-700 text-sm" : "text-slate-400 text-sm"}>{feature.name}</span>
                </li>
              ))}
            </ul>

            <a href="#consultation" className="block w-full mt-6 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors duration-300 text-center">
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <a href="#contact" className="inline-flex items-center capitalize text-slate-900 hover:text-slate-800 font-medium">
          Compare All Plans
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </Container>
  );
};

export default Pricing;