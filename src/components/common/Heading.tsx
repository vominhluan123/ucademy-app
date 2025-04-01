import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ReactNode;
}) => {
  return (
    <h1 className={`font-bold text-2xl lg:text-3xl ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
