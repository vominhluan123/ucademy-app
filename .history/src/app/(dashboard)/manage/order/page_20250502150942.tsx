import { getOrders } from "@/lib/actions/order.action";
import OrderMange from "./OrderMange";

const page = async () => {
  const orders = await getOrders();
  return <OrderMange></OrderMange>;
};

export default page;
