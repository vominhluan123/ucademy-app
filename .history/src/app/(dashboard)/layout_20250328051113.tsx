import Sidebar from "@/components/Layout/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="hidden lg:block"></div>
      <Sidebar></Sidebar>
      <main className="course-slider mt-6 grid gap-4 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
        {children}
      </main>
    </div>
  );
};

export default layout;
