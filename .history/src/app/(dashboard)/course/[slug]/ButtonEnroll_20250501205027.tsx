"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/database/user.model";

const ButtonEnroll = ({ user }: { user: IUser | null | undefined }) => {
  const handleEnrollCourse = () => {};

  return (
    <Button variant="primary" className="w-full" onClick={handleEnrollCourse}>
      Mua Khoá Học
    </Button>
  );
};

export default ButtonEnroll;
