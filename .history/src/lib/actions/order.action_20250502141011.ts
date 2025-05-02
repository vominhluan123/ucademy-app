import { connectToDatabase } from "../mongoose";

export async function createOrder(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.error("Lỗi khi tạo đơn hàng:", error);
  }
}
