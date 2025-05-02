"use server";
import Order from "@/database/order.model";
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
export async function getOrders() {
  try {
    connectToDatabase();
    const orders = await Order.find({}).populate("course").populate("user");
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
