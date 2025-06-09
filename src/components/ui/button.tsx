import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "default" | "outline" | "primary";
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  href,
  target,
  rel,
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5";

  const variantClasses = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border-2 border-slate-900 bg-transparent text-black dark:text-white dark:border-slate-50",
    primary: "bg-primary-500 text-white hover:bg-primary-400",
  };

  const allClasses = cn(`${baseClasses} ${variantClasses[variant]} ${className || ""}`);

  // If href is provided, render as <a>
  if (href) {
    return (
      <a
        href={href}
        className={allClasses}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;