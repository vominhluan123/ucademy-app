import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: React.ReactNode;
}) => {
  return <h1 className={``}>{children}</h1>;
};

export default Heading;
