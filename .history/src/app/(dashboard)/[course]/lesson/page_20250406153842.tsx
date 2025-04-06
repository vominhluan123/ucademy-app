import PageNotFound from "@/app/not-found";

const page = async ({
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
  const lessonDetails = await getLessonDetails({ slug });
  if (!course || !slug) return <PageNotFound />;
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <div>
        <div className="relative mb-5 aspect-video"></div>
      </div>
      <div></div>
    </div>
  );
};

export default page;
