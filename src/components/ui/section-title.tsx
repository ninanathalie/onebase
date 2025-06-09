import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  responsive?: boolean;
  mode?: "light" | "dark";
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, description, centered = false, responsive = false, mode = "light" }) => {
  const isDark = mode === "dark";

  const alignmentClass = responsive ? "text-center lg:text-left" : centered ? "text-center" : "text-left";

  return (
    <div className={`${alignmentClass} mb-12`}>
      {subtitle && <p className={`font-krona text-sm uppercase mb-2 ${isDark ? "text-primary-300" : "text-primary-400"}`}>{subtitle}</p>}
      <h2 className={`capitalize text-3xl md:text-4xl font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900 dark:text-white"}`}>{title}</h2>
      {description && <p className={`text-lg max-w-3xl ${isDark ? "text-slate-300" : "text-slate-600"} ${alignmentClass === "text-center" || alignmentClass.includes("text-center") ? "mx-auto" : ""}`}>{description}</p>}
    </div>
  );
};

export default SectionTitle;