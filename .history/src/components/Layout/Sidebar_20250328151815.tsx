"use client";
import { MenuIcons } from "@/constants";
import { TMenueItem } from "@/types";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import ActiveLink from "../common/ActiveLink";
import { IconUser } from "../icons";
import { ModeToggle } from "../mode-toogle";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <Fragment>
      <div className=" hidden p-5 border-r border-r-gray-200 bg-white dark:bg-dark-card dark:border-opacity-10 lg:flex flex-col fixed bottom-0 w-[300px] top-0 left-0 h-screen">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center font-bold text-3xl  mb-5"
        >
          <Image src="/logoU.png" alt="Ucademy" width={50} height={50}></Image>
          <span>cademy</span>
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
        {/* Mobile */}
        <ul className="fixed bottom-0 left-0 w-full bg-white dark:bg-dark-card dark:border-opacity-1 p-3 h-16 lg:hidden flex justify-center gap-5 z-50 shadow-md">
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

        {/* User Actions */}
        <div className="mt-auto flex items-center gap-3 p-3 border-t border-gray-200 dark:border-dark-border">
          <ModeToggle />
          {userId ? (
            <UserButton />
          ) : (
            <Link
              href="/sign-in"
              className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
            >
              <IconUser></IconUser>
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export function MenuItems({
  url = "/",
  title = "Khu vực học tập",
  icon,
  onlyIcon,
}: TMenueItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {onlyIcon ? null : title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
