import PageNotFound from "@/app/not-found";

const page = ({
  params,
  searchParams,
}: {
  params: {
    course: string;
  };
  searchParams: {
    slug: string;
  };
}) => {
  const { course } = params;
  const { slug } = searchParams;
  if (!course || !slug) return <PageNotFound />;
  return <div>page</div>;
};

export default page;
