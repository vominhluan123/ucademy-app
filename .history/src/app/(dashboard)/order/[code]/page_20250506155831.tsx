import { getOrderDetails } from "@/lib/actions/order.action";

const page = async ({
  params,
}: {
  params: {
    code: string;
  };
}) => {
  const orderDetails = await getOrderDetails({ code: params.code });
  console.log("📦 Code từ URL:", params.code);
  return <div>Page Order Code</div>;
};

export default page;
