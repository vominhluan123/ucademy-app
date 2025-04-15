const Layout = async ({
  player,
  outline,
}: {
  player: React.ReactNode;
  outline: React.ReactNode;
}) => {
  const { userId } = await auth();
  if (!userId) return <PageNotFound />;
  const findUser = await getUserInfo({ userId });
  if (!findUser) return <PageNotFound />;
  const course = params.course;
  const slug = searchParams.slug;
  const findCoures = await getCourseBySlug({ slug: course });
  if (!findCoures) return <PageNotFound />;
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1fr] gap-5 lg:gap-10 min-h-screen">
      <>{player}</>
      <>{outline}</>
    </div>
  );
};

export default Layout;
