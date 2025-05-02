"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/database/user.model";
import { toast } from "react-toastify";

const ButtonEnroll = ({ user }: { user: IUser | null | undefined }) => {
  const handleEnrollCourse = () => {
    if (!user) {
      toast.error("Bạn cần đăng nhập để mua khoá học này");
      return null;
    }
    // create new order
  };

  return (
    <Button variant="primary" className="w-full" onClick={handleEnrollCourse}>
      Mua Khoá Học
    </Button>
  );
};

export default ButtonEnroll;
