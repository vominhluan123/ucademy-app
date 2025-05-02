"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/database/user.model";
import { createOrder } from "@/lib/actions/order.action";
import { createOrderCode } from "@/utils";
import { toast } from "react-toastify";

const ButtonEnroll = ({
  user,
  courseId,
  amount,
}: {
  user: IUser | null | undefined;
  courseId: string;
  amount: number;
}) => {
  const handleEnrollCourse = async () => {
    if (!user) {
      toast.error("Bạn cần đăng nhập để mua khoá học này");
      return null;
    }
    // create new order
    const newOrder = await createOrder({
      code: createOrderCode(),
      user: user._id,
      course: "",
      total: amount,
      amount: amount,
    });
  };

  return (
    <Button variant="primary" className="w-full" onClick={handleEnrollCourse}>
      Mua Khoá Học
    </Button>
  );
};

export default ButtonEnroll;
