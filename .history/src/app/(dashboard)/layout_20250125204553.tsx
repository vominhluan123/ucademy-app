import Sidebar from "@/components/Layout/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <Sidebar></Sidebar>
      <main>{children}</main>
    </div>
  );
};

export default layout;
