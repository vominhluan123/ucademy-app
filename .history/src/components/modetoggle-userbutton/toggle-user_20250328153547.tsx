"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";
import { IconUser } from "../icons";
import { ModeToggle } from "../mode-toogle";

const ToggleUser = () => {
  const { userId } = useAuth();
  return (
    <div className="lg:mt-auto lg:flex lg:items-center size-10 lg:gap-3 lg:p-3 lg:border-t border-gray-200 dark:border-dark-border lg:justify-center">
      <ModeToggle />
      {userId ? (
        <UserButton />
      ) : (
        <Link
          href="/sign-in"
          className="size-10 rounded-lg bg-primary text-white lg:flex lg:items-center lg:justify-center lg:p-1"
        >
          <IconUser></IconUser>
        </Link>
      )}
    </div>
  );
};

export default ToggleUser;
