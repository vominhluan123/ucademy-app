import { getOrderDetails } from "@/lib/actions/order.action";

const page = async ({ params }) => {
  const orderDetails = await getOrderDetails({ code: params.code });
  console.log("🚀 ~ page ~ orderDetails:", orderDetails);
  return <div>Page Order Code</div>;
};

export default page;
