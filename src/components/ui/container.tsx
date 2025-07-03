import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`py-16 lg:py-20 2xl:py-24 px-8 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Container;