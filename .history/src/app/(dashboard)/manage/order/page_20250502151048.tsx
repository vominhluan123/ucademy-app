import { getOrders } from "@/lib/actions/order.action";
import OrderMange from "./OrderMange";

const page = async () => {
  const orders = await getOrders();
  return <OrderMange orders={orders}></OrderMange>;
};

export default page;
