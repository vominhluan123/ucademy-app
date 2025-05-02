import Order from "@/database/order.model";
import { connectToDatabase } from "../mongoose";

export async function createOrder(params: any) {
  try {
    connectToDatabase();
    const newOrder = await Order.create({ params });
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
  }
}
