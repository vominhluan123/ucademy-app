import { MenuIcons } from "@/constants";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import { TMenueItem } from "@/types";
import { UserButton } from "@clerk/nextjs";
import { Fragment } from "react";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="p-5 border-r border-r-gray-200 bg-white flex flex-col h-screen">
        <Link href="/" className="font-bold text-3xl inline-block mb-5">
          <span className="text-primary">U</span>cademy
        </Link>
        <ul>
          {MenuIcons.map((item, index) => (
            <MenuItems
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            ></MenuItems>
          ))}
        </ul>
        {/* User Button */}
        <div className="mt-auto">
          <UserButton />
        </div>
      </div>
    </Fragment>
  );
};
function MenuItems({ url = "/", title = "Khu vực học tập", icon }: TMenueItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
