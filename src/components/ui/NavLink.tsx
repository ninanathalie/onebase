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
    <a
      href={href}
      className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
        mobile ? 'text-gray-900 text-lg block w-full' : 'text-gray-700'
      }`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};