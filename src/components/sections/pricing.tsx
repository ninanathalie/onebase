import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

import { features, plans } from "@/data/pricing-data";
import {
  PricingPlanDetails,
  PricingPlanFeature,
} from "@/pages/pricing-details";

import { ArrowRight, BadgeCheck, X } from "lucide-react";

interface PricingPlanCardProps extends PricingPlanDetails {
  features: PricingPlanFeature[];
}

const Pricing = () => {
  return (
    <Container id="pricing" className="mb-16 2xl:mb-40 xl:max-w-7xl mx-auto">
      <SectionTitle
        centered
        subtitle="Transparent Pricing"
        title="Choose the plan that fits your business needs"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 lg:pt-8">
        {plans.map((plan) => (
          <PricingPlanCard
            key={plan.type}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            type={plan.type}
            features={features}
            highlight={plan.highlight}
            ctaHref={plan.ctaHref}
            ctaText={plan.ctaText}
          />
        ))}
      </div>

      <div className="mt-20 text-center">
        <a
          href="/pricing"
          className="inline-flex items-center capitalize text-slate-900 dark:text-slate-100 hover:text-slate-800 font-medium"
        >
          Compare All Plans
          <ArrowRight />
        </a>
      </div>
    </Container>
  );
};

const PricingPlanCard = ({
  title,
  subtitle,
  price,
  type,
  features,
  highlight = false,
  ctaText = "",
  ctaHref = "#",
}: PricingPlanCardProps) => {
  const getFeatureValue = (feature: PricingPlanFeature) => feature[type];

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        highlight
          ? "bg-primary-500/20 transform scale-105 z-10"
          : "bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-500 hover:shadow-md"
      }`}
    >
      {highlight && (
        <div className="pt-2 pb-1 font-medium uppercase text-xs text-center text-primary-400">
          <span>Most Popular</span>
        </div>
      )}

      <div
        className={highlight ? "border-4 border-primary-500/20 rounded-xl" : ""}
      >
        <div
          className={`rounded-xl overflow-hidden ${
            highlight
              ? "bg-gradient-to-bl from-primary-50 via-white to-white dark:from-cyan-950 dark:via-slate-950 dark:to-blue-950"
              : ""
          }`}
        >
          <div className="p-6 border-b border-slate-100 dark:border-slate-600">
            <h3 className="text-lg font-medium text-primary-300 mb-1">
              {title}
            </h3>
            <p className="font-extralight text-slate-400 mb-4">{subtitle}</p>
            <div className="flex items-baseline">
              <span className="text-3xl xl:text-4xl font-semibold text-slate-900 dark:text-slate-100">
                {price}
              </span>
            </div>
          </div>

          <div className="p-6">
            <ul className="space-y-4">
              {features.map((feature, index) => {
                const featureValue = getFeatureValue(feature);

                return (
                  <li key={index} className="flex items-start">
                    {featureValue ? (
                      <BadgeCheck className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        featureValue
                          ? "text-slate-700 dark:text-slate-200 text-sm"
                          : "text-slate-400 text-sm"
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href={ctaHref}
              className={`block w-full font-semibold mt-6 py-3 px-4 text-center rounded-lg transition-colors duration-300 ${
                highlight
                  ? "bg-primary-500 hover:bg-primary-500 text-white shadow-md"
                  : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-50 text-white dark:text-slate-950"
              }`}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
