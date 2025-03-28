import Sidebar, { MenuItems } from "@/components/Layout/Sidebar";
import { MenuIcons } from "@/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block lg:grid  pb-20 lg:pb-0 lg:grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="hidden lg:block"></div>
      <Sidebar></Sidebar>
      <ul className="min-h-[calc(100vh-64px)] flex flex-col-reverse md:grid md:grid-cols-[2fr,1fr] gap-5">
        {MenuIcons.map((item, index) => (
          <MenuItems
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
            onlyIcon={true}
          />
        ))}
      </ul>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
