"use client";
import { TActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ url, children }: TActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      className={`p-3 mb-3 rounded-md flexr gap-3  transition-all ${
        isActive
          ? "text-white bg-primary svg-icon"
          : "hover:bg-primary hover:bg-opacity-10 hover:text-primary "
      }`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
