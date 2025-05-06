import { getOrderDetails } from "@/lib/actions/order.action";

const page = async ({ params }) => {
  const orderDetails = await getOrderDetails({ code: params.code });
  return <div>Page Order Code</div>;
  console.log("🚀 ~ page ~ orderDetails:", orderDetails);
};

export default page;
