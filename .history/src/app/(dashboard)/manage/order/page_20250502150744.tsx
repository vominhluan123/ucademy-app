import { getOrders } from "@/lib/actions/order.action";
import OrderMange from "./OrderMange";

const page = async () => {
  const orders = await getOrders();
  return (
    <div>
      <OrderMange></OrderMange>
    </div>
  );
};

export default page;
