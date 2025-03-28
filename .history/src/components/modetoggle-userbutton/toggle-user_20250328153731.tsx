"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";
import { IconUser } from "../icons";
import { ModeToggle } from "../mode-toogle";

const ToggleUser = () => {
  const { userId } = useAuth();
  return (
    <div className="mt-auto flex items-center size-30 gap-3 p-3 border-t border-gray-200 dark:border-dark-border">
      <ModeToggle />
      {userId ? (
        <UserButton />
      ) : (
        <Link
          href="/sign-in"
          className="size-30 rounded-lg bg-primary text-white flex items-center justify-center p-1"
        >
          <IconUser></IconUser>
        </Link>
      )}
    </div>
  );
};

export default ToggleUser;
