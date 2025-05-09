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
      className={`p-3 rounded-md flex items-center gap-3 hover:text-primary  transition-all ${
        isActive
          ? "text-white bg-primary bg-opacity-10"
          : "hover:bg-primary hover:bg-opacity-10"
      }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
