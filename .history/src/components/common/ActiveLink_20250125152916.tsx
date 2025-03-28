"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}
const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      className={`rounded-md flex items-center gap-3  transition-all ${
        isActive
          ? "text-white bg-primary"
          : "hover:bg-primary hover:bg-opacity-10 hover:text-primary "
      }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
