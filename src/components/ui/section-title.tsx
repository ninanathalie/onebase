import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, description, centered = false }) => {
  return (
    <div className={`${centered ? "text-center mb-12" : "text-left"}`}>
      {subtitle && <p className="font-krona text-sm text-primary-400 uppercase mb-2">{subtitle}</p>}
      <h2 className="capitalize text-3xl md:text-4xl font-semibold text-slate-900 mb-4">{title}</h2>
      {description && <p className="text-lg text-slate-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  );
};

export default SectionTitle;