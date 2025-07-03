import React from "react";

import { cn } from "@/utils/cn";
import { Users, BarChart, Zap, Shield, Clock, Headphones } from "lucide-react";

import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border-l lg:md:border-l-0 lg:border-r py-6 md:py-10 relative group/feature dark:border-slate-800",
        (index === 0 || index === 3) &&
          "lg:border-l lg:border-b-0 dark:border-slate-800",
        index < 3 && "lg:border-b dark:border-slate-800",
        index < 4 ? "md:border-b" : "md:border-b-0",
        index < 5 && "border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary-50 dark:from-primary-500/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary-50 dark:from-primary-500/10 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-slate-600 dark:text-slate-300">
        {icon}
      </div>

      <div className="text-lg font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 dark:bg-slate-700 group-hover/feature:bg-primary-500 transition-all duration-200 origin-center" />
        <h3 className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-800 dark:text-slate-300">
          {title}
        </h3>
      </div>

      <p className="text-slate-600 dark:text-slate-400 md:max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description:
        "Organize and manage your customer relationships effectively with powerful contact management tools.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description:
        "Gain valuable insights with comprehensive analytics and customizable reporting features.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automation Tools",
      description:
        "Save time and increase efficiency with powerful workflow automation capabilities.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Integration",
      description:
        "Safely connect with your existing tools and platforms with our secure integration services.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Implementation",
      description:
        "Get up and running quickly with our streamlined setup and onboarding process.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing Support",
      description:
        "Receive continuous support and guidance from our team of CRM experts.",
    },
  ];

  return (
    <Container id="features" className="z-10">
      <SectionTitle
        centered
        subtitle="Powerful CRM Features"
        title="All-in-One Solutions to Supercharge Your Workflow"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 md:py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default Features;
