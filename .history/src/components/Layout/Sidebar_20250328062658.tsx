"use client";
import { MenuIcons } from "@/constants";
import { TMenueItem } from "@/types";
import { useAuth, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ActiveLink from "../common/ActiveLink";
import { IconUser } from "../icons";
import { ModeToggle } from "../mode-toogle";

const Sidebar = () => {
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Nút mở sidebar trên mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-primary text-white p-2 rounded-md"
      >
        ☰
      </button>

      {/* Sidebar + Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-white dark:bg-dark-card border-r border-gray-200 dark:border-opacity-10 p-5 flex flex-col transition-transform duration-300 
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex`}
      >
        {/* Nút đóng sidebar trên mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-5 right-5 text-gray-600 dark:text-gray-300 text-xl"
        >
          ✕
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center font-bold text-3xl mb-5"
        >
          <Image src="/logoU.png" alt="Ucademy" width={50} height={50} />
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

        {/* User Actions */}
        <div className="mt-auto flex items-center gap-3 p-3 border-t border-gray-200 dark:border-dark-border z-50">
          <ModeToggle />
          {userId ? (
            <UserButton />
          ) : (
            <Link
              href="/sign-in"
              className="size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1"
            >
              <IconUser />
            </Link>
          )}
        </div>
      </div>

      {/* Overlay mờ khi sidebar mở trên mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
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
