import {
  PricingPlanAddons,
  PricingPlanDetails,
  PricingPlanFeature,
} from "@/pages/pricing-details";

export const features: PricingPlanFeature[] = [
  {
    name: "Zoho CRM Setup",
    essential: "Basic Setup + Up to 3 custom modules",
    plus: "Up to 5 custom modules",
    premium: "Unlimited modules",
  },
  {
    name: "Business Email Setup",
    essential: "Zoho Mail or Third-party",
    plus: "Zoho Mail or Third-party",
    premium: "Zoho Mail or Third-party",
  },
  {
    name: "Accounting Integration",
    essential: "Basic sync of customer & invoice data",
    plus: "Custom company Invoices from CRM",
    premium: "Fully unlocked CRM build + Advanced Zoho Books Features",
  },
  {
    name: "Business Workflows",
    essential:
      "Basic Automation: Email Alerts, Task Reminders and Status Updates",
    plus: "Guided Workflows To Help Your Team Follow Consistent Process",
    premium:
      "Smart Workflows That Connect Different Systems (E.g: HR, CRM, and Accounting) To Work Together Automatically",
  },
  {
    name: "CRM Layout Customization",
    essential: "Included",
    plus: "Included",
    premium: "Included",
  },
  {
    name: "Standard Reports & Dashboards",
    essential: "Included",
    plus: "Enhanced Reports",
    premium: "Zoho Analytics Dashboards",
  },
  {
    name: "Onboarding Support",
    essential:
      "14 days of Support, including Email Guidance and Select Live Sessions During Setup",
    plus: "14 days of Support, including Email Guidance and Select Live Sessions During Setup",
    premium:
      "1 Month of Extended Support after Launch, including Regular Check-ins and Hands-on Guidance",
  },
  {
    name: "Process Flow Design",
    plus: "90-min workshop + Up to 2 flowcharts",
    premium: "Multi-department process mapping",
  },
  {
    name: "Zoho Books Customization",
    plus: "VAT configuration, custom invoice templates, automation",
    premium: "Advanced Finance Setup",
  },
  {
    name: "Blueprint Implementation",
    plus: "1 Sales Blueprint",
    premium: "Multiple Blueprints: Sales, Support, Onboarding",
  },
  {
    name: "Custom Functions / Scripts",
    plus: "Up to 5 Deluge Scripts",
    premium: "Up to 15 Advanced Functions",
  },
  {
    name: "User Role & Permission Setup",
    plus: "Included",
    premium: "Included",
  },
  {
    name: "3rd Party Integration",
    premium: "WhatsApp, Mailchimp, website forms",
  },
  {
    name: "HR & People Suite",
    plus: "Optional (Add-on)",
    premium: "Zoho People, Recruit, etc.",
  },
  {
    name: "Internal Documentation + Video",
    premium: "Post-delivery + Video Handover",
  },
  {
    name: "Estimated Delivery Time",
    essential: "2 weeks",
    plus: "3–4 weeks",
    premium: "8–12 weeks",
  },
];

export const plans: PricingPlanDetails[] = [
  {
    title: "Essential",
    subtitle: "Perfect for small businesses",
    price: "AED 9,900",
    type: "essential",
    ctaHref: "#consultation",
    ctaText: "Get Started",
  },
  {
    title: "Plus",
    subtitle: "Ideal for growing companies",
    price: "AED 14,900",
    type: "plus",
    highlight: true,
    ctaHref: "#consultation",
    ctaText: "Get Started",
  },
  {
    title: "Premium",
    subtitle: "For large organizations",
    price: "AED 25,000",
    type: "premium",
    ctaHref: "#consultation",
    ctaText: "Contact Sales",
  },
];

export const addons: PricingPlanAddons[] = [
  {
    name: "Custom Module Development",
    price: "AED 2,400",
  },
  {
    name: "Document Template Design",
    price: "AED 900",
  },
  {
    name: "Email Marketing Automation",
    price: "AED 1,200",
  },
  {
    name: "Advanced Automation Pack",
    price: "AED 1,500",
  },
  {
    name: "3rd Party Integration Pack",
    price: "Starting from AED 2,400",
  },
  {
    name: "Custom Reports & Dashboards",
    price: "AED 1,500",
  },
  {
    name: "HR Suite Add-On",
    price: "Starting from AED 2,400",
  },
  {
    name: "Inventory & Order Mgmt. Pack",
    price: "AED 1,500",
  },
  {
    name: "Custom Portal / Client Login",
    price: "Starting from AED 4,500",
  },
  {
    name: "Training & Adoption Workshop",
    price: "AED 600",
  },
  {
    name: "Priority Support & SLA (1 month)",
    price: "AED 900",
  },
  {
    name: "IT Service & Data Migration",
    price: "Starting from AED 1,800",
  },
];
