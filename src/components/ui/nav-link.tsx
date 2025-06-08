import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  mobile = false,
  onClick
}) => {
  return (
    <a href={href} className={`font-medium transition-colors duration-300 hover:text-primary-500 ${mobile ? "text-slate-900 text-md block w-full" : "text-slate-700"}`} onClick={onClick}>
      {children}
    </a>
  );
};