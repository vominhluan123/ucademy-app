import Sidebar, { MenuItems } from "@/components/Layout/Sidebar";
import { MenuIcons } from "@/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block lg:grid lg:grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="hidden lg:block"></div>
      <Sidebar></Sidebar>
      <div className="flex fixed p-3 bg-white lg:hidden">
        {MenuIcons.map((item, index) => (
          <MenuItems
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
