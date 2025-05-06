const page = async ({ params }) => {
  const orderDetails = await getorderDetails({ code: params.code });
  return <div>Page Order Code</div>;
};

export default page;
