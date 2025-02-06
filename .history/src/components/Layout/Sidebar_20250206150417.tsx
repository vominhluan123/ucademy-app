import { MenuIcons } from "@/constants";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import { TMenueItem } from "@/types";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Fragment } from "react";
import { ModeToggle } from "../mode-toogle";
import { IconUser } from "../icons";

const Sidebar = () => {
  const {} = useAuth();
  return (
    <Fragment>
      <div className="p-5 border-r border-r-gray-200 bg-white dark:bg-dark-card dark:border-opacity-10 flex flex-col">
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl inline-block mb-5">
          <span className="text-primary">U</span>cademy
        </Link>

        {/* Menu */}
        <ul className="flex-grow">
          {MenuIcons.map((item, index) => (
            <MenuItems
              key={index}
              url={item.url}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>

        {/* User Actions */}
        <div className="mt-auto flex items-center gap-3 p-3 border-t border-gray-200 dark:border-dark-border">
          <ModeToggle />
          <Link href="/sign-in">
            <IconUser></IconUser>
          </Link>
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
