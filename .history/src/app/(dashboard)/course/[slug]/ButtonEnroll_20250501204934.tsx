"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/database/user.model";

const ButtonEnroll = ({ user }: { user: IUser }) => {
  const handleByCourse = () => {};

  return (
    <Button variant="primary" className="w-full" onClick={handleByCourse}>
      Mua Khoá Học
    </Button>
  );
};

export default ButtonEnroll;
