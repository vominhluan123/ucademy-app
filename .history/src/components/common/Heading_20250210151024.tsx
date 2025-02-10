import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="font-bold">{children}</h1>;
};

export default Heading;
