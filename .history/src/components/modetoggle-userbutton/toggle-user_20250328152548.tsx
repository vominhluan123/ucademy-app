"user client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Link } from "lucide-react";
import { IconUser } from "../icons";
import { ModeToggle } from "../mode-toogle";

const toggle_user = () => {
  const { userId } = useAuth();
  return (
    <div>
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
  );
};

export default toggle_user;
