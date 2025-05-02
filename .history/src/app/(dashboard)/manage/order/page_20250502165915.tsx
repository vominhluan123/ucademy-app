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
  const orders = await getOrders({
    page: Number(searchParams.page) || 1,
    limit: 0,
    search: searchParams.search,
    status: searchParams.status,
  });
  console.log("🚀 ~ orders:", orders);
  return <OrderMange orders={orders}></OrderMange>;
};

export default page;
