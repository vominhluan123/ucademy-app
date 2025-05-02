import { getOrders } from "@/lib/actions/order.action";
import { EOrderStatus } from "@/types/enum";
import OrderMange from "./OrderMange";

const page = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    search: string;
    status: EOrderStatus;
  };
}) => {
  const orders = await getOrders();
  return <OrderMange orders={orders}></OrderMange>;
};

export default page;
