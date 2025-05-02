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
export async function createOrder(params: any) {
  try {
    connectToDatabase();
    const newOrder = await Order.create({ params });
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
  }
}
