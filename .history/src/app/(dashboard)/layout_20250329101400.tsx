import Sidebar, { MenuItems } from "@/components/Layout/Sidebar";
import ToggleUser from "@/components/modetoggle-userbutton/toggle-user";
import { MenuIcons } from "@/constants";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="block lg:grid  pb-20 lg:pb-0 lg:grid-cols-[300px,minmax(0,1fr)] h-screen">
      <div className="hidden lg:block"></div>
      <Sidebar></Sidebar>
      <ul className="fixed bottom-0 left-0 w-full bg-white dark:bg-dark-card dark:border-opacity-1 p-3 h-16 lg:hidden flex justify-center gap-6 z-50 shadow-md">
        <div className="flex lg:gap-6">
          {MenuIcons.map((item, index) => (
            <MenuItems
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
              onlyIcon={true}
            />
          ))}
        </div>

        <ToggleUser />
      </ul>
      <main className="p-5">{children}</main>
    </div>
  );
};

export default layout;
