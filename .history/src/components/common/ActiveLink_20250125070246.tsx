import Link from "next/link";
import React from "react";
interface ActiveLinkProps {
  url: string;
  children: React.ReactNode;
}
const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  return (
    <Link
      className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all"
      href={url}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
