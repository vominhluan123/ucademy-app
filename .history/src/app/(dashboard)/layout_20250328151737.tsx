import Sidebar from "@/components/Layout/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block lg:grid  pb-20 lg:pb-0 lg:grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="hidden lg:block"></div>
      <Sidebar></Sidebar>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
