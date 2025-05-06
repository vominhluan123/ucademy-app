import { getOrderDetails } from "@/lib/actions/order.action";

const page = async ({
  params,
}: {
  params: {
    code: string;
  };
}) => {
  const orderDetails = await getOrderDetails({ code: params.code });
  console.log("🚀 ~ orderDetails:", orderDetails);
  return <div>Page Order Code</div>;
};

export default page;
