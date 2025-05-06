import { getOrderDetails } from "@/lib/actions/order.action";

const page = async ({
  params,
}: {
  params: {
    code: string;
  };
}) => {
  const orderDetails = await getOrderDetails({ code: params.code });
  if (!orderDetails) {
    pageNotFound();
  }
  return (
    <div>
      <p>
        Cảm ơn bạn đã mua khoá học{" "}
        <strong className="text-primary">{orderDetails.course.title}</strong>{" "}
        với số tiền là{" "}
        <strong className="text-primary">{orderDetails.total}</strong>
      </p>
    </div>
  );
};

export default page;
