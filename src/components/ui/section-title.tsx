import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  mode?: "light" | "dark";
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, description, centered = false, mode = "light" }) => {
  const isDark = mode === "dark";

  return (
    <div className={`${centered ? "text-center mb-12" : "text-left"}`}>
      {subtitle && <p className={`font-krona text-sm uppercase mb-2 ${isDark ? "text-primary-300" : "text-primary-400"}`}>{subtitle}</p>}
      <h2 className={`capitalize text-3xl md:text-4xl font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description && <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
};

export default SectionTitle;