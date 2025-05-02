"use server";
import Course from "@/database/course.model";
import Order from "@/database/order.model";
import { FilterQuery } from "mongoose";
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
