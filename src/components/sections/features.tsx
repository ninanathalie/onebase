import React from "react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import { Users, BarChart, Zap, Shield, Clock, Headphones } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description: "Organize and manage your customer relationships effectively with powerful contact management tools."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Gain valuable insights with comprehensive analytics and customizable reporting features."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automation Tools",
      description: "Save time and increase efficiency with powerful workflow automation capabilities."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Integration",
      description: "Safely connect with your existing tools and platforms with our secure integration services."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Implementation",
      description: "Get up and running quickly with our streamlined setup and onboarding process."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Ongoing Support",
      description: "Receive continuous support and guidance from our team of CRM experts."
    }
  ];

  return (
    <Container id="features" className="bg-gray-50">
      <SectionTitle 
        title="Powerful CRM Features" 
        subtitle="Everything you need to streamline customer relationships and boost productivity"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Features;