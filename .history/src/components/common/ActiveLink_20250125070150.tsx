import Link from "next/link";
import React from "react";
interface ActiveLinkProps {
  url: string;
}
const ActiveLink = ({ url }: ActiveLinkProps) => {
  return (
    <Link
      className="p-3 rounded-md flex items-center gap-3 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition-all"
      href={url}
    >
      {icon}
      {title}
    </Link>
  );
};

export default ActiveLink;
