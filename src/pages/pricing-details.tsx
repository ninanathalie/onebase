import { BadgeCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

import { features, addons, plans } from "@/data/pricing-data";

export type PricingPlanType = "essential" | "plus" | "premium";

type PricingPlanFeatureValues = {
  [key in PricingPlanType]?: string;
};

export interface PricingPlanFeature extends PricingPlanFeatureValues {
  name: string;
}

export interface PricingPlanDetails {
  title: string;
  subtitle: string;
  price: string;
  type: PricingPlanType;
  highlight?: boolean;
  ctaHref?: string;
  ctaText?: string;
}

export interface PricingPlanAddons {
  name: string;
  price: string;
}

const PricingPage = () => {
  return (
    <Container
      id="pricing-comparison"
      className="my-24 lg:mb-40 dark:text-slate-50"
    >
      <SectionTitle
        centered
        subtitle="Transparent Pricing"
        title="Choose the plan that fits your business needs"
      />

      <div className="pricing-table relative mt-10 lg:mt-20 overflow-x-auto">
        <div className="flex min-w-[700px]">
          <div className="w-2/5 min-w-[120px] px-2 lg:px-4 py-4 font-semibold text-lg border-b border-r border-indigo-100 bg-indigo-50/40 sticky left-0 z-20 dark:bg-indigo-50/5 dark:border-slate-800">
            Features
          </div>

          <div className="flex w-full">
            {plans.map((plan, index) => (
              <div
                key={plan.type}
                className={cn(
                  "w-1/3 px-2 lg:px-4 py-4 font-semibold text-lg border-b border-indigo-100 dark:border-slate-800",
                  index !== plans.length - 1 ? "border-r" : "",
                  "bg-white/80 text-center dark:bg-white/30"
                )}
              >
                <p className="mb-0">{plan.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  {plan.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm min-w-[700px]">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="w-2/5 min-w-[120px] px-2 lg:px-4 py-2 border-b border-r border-indigo-100 bg-indigo-50 md:bg-indigo-50/40 text-slate-700 font-medium sticky left-0 z-10 dark:bg-indigo-50/5 dark:text-slate-200 dark:border-slate-800">
                {feature.name}
              </div>

              <div className="flex w-full">
                <div className="w-1/3 px-2 lg:px-4 py-2 border-b border-r border-indigo-100 bg-white/40 dark:bg-white/20 dark:text-slate-100 dark:border-slate-800">
                  {renderFeatureCell(feature.essential)}
                </div>
                <div className="w-1/3 px-2 lg:px-4 py-2 border-b border-r border-indigo-100 bg-white/40 dark:bg-white/20 dark:text-slate-100 dark:border-slate-800">
                  {renderFeatureCell(feature.plus)}
                </div>
                <div className="w-1/3 px-2 lg:px-4 py-2 border-b bg-white/40 dark:bg-white/20 dark:text-slate-100 dark:border-slate-800">
                  {renderFeatureCell(feature.premium)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle centered subtitle="Add-ons" className="mb-2 mt-16" />

      <div className="pricing-addons justify-center max-w-3xl mx-auto">
        <div className="title-container w-full flex flex-row top-[100px] z-10">
          <div className="w-5/12 text-lg px-2 lg:px-4 py-4 font-semibold border-b border-r bg-indigo-50 md:bg-indigo-50/40 dark:bg-indigo-50/5 dark:text-slate-200 dark:border-slate-800">
            Add-on Features
          </div>
          <div className="w-7/12 text-lg px-2 lg:px-4 py-4 font-semibold border-b border-indigo-100 bg-white/40 dark:border-slate-800 dark:bg-white/20">
            Price
          </div>
        </div>

        <div className="w-full text-sm overflow-hidden">
          {addons.map((addon, index) => (
            <div key={index} className="flex flex-row">
              <div className="w-5/12 px-2 lg:px-4 py-2 border-b border-r border-indigo-100 font-medium text-slate-700 bg-indigo-50 md:bg-indigo-50/40 dark:bg-indigo-50/5 dark:text-slate-200 dark:border-slate-800">
                {addon.name}
              </div>
              <div className="w-7/12 px-2 lg:px-4 py-2 border-b border-indigo-100 text-slate-700 bg-white/40 dark:bg-white/10 dark:text-slate-100 dark:border-slate-800">
                {addon.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const renderFeatureCell = (value?: string) => {
  return value ? (
    <div className="flex items-start gap-2 text-slate-700">
      <BadgeCheck className="h-4 w-4 text-green-500 mt-0.5" />
      <span className="w-full dark:text-slate-200">{value}</span>
    </div>
  ) : (
    <X className="h-4 w-4 text-rose-500" />
  );
};

export default PricingPage;
