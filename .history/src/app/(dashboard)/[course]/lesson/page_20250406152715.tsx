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
  console.log("params", params); // { course: 'course' }
  console.log("searchParams", searchParams); // { slug: 'slug' }
  return <div>page</div>;
};

export default page;
