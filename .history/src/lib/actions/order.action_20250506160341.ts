"use server";
import Course from "@/database/course.model";
import Order from "@/database/order.model";
import User from "@/database/user.model";
import { EOrderStatus } from "@/types/enum";
import { FilterQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
export type TCreateOderPaarams = {
  code: string;
  course: string;
  user: string;
  total?: number;
  amount?: number;
  discount?: number;
  coupon?: string;
};
export async function getOrders(params: any) {
  try {
    connectToDatabase();
    const { page = 1, limit = 10, search, status } = params;
    const skip = (page - 1) * limit;
    const query: FilterQuery<typeof Course> = {};
    if (search) {
      query.$or = [{ code: { $regex: search, $options: "i" } }];
    }
    if (status) {
      query.status = status;
    }
    const orders = await Order.find(query)
      .populate({
        model: "Course",
        select: "title",
        path: "course",
      })
      .populate({
        model: "Users",
        select: "name",
        path: "user",
      })
      .skip(skip)
      .limit(limit);
    return JSON.parse(JSON.stringify(orders));
  } catch (error) {
    console.error("Lỗi khi lấy danh sách đơn hàng:", error);
  }
}
export async function createOrder(params: TCreateOderPaarams) {
  try {
    connectToDatabase();
    const newOrder = await Order.create({ ...params });
    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
  }
}
export async function updateOrder({
  orderId,
  status,
}: {
  orderId: string;
  status: EOrderStatus;
}) {
  try {
    connectToDatabase();
    const findOrder = await Order.findById(orderId)
      .populate({
        model: Course,
        select: "_id",
        path: "course",
      })
      .populate({
        model: User,
        path: "user",
        select: "_id",
      });
    if (!findOrder) return null;
    if (findOrder.status === EOrderStatus.CANCELED) return;
    const findUser = await User.findById(findOrder.user._id);
    await Order.findByIdAndUpdate(orderId, {
      status,
    });
    if (
      status === EOrderStatus.COMPLETED &&
      findOrder.status === EOrderStatus.PENDING
    ) {
      findUser.courses.push(findOrder.course._id);
      await findUser.save();
    }
    if (
      status === EOrderStatus.CANCELED &&
      findOrder.status === EOrderStatus.COMPLETED
    ) {
      findUser.courses = findUser.courses.filter(
        (el: any) => el.toString() !== findOrder.course._id.toString()
      );
      await findUser.save();
    }
    revalidatePath("/manage/order");
    return {
      success: true,
    };
  } catch (error) {
    console.error("Lỗi khi cập nhật đơn hàng:", error);
  }
}
export async function getOrderDetails({ code }: { code: string }) {
  try {
    connectToDatabase();
    const orderDetails = await Order.findOne({ code }).populate({
      path: "course",
      select: "title",
    });
    console.log("🚀 ~ orderDetails ~ orderDetails:", orderDetails);
    return JSON.parse(JSON.stringify(orderDetails));
  } catch (error) {
    console.error("Lỗi khi lấy chi tiết đơn hàng:", error);
  }
}
