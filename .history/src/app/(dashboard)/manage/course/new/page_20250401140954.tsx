import Heading from "@/components/common/Heading";
import CoureAddNew from "@/components/course/CoureAddNew";
import { getUserInfo } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { Fragment } from "react";

const page = async () => {
  const { userId } = await auth();
  if (!userId) return null;
  const mongoUser = await getUserInfo({ userId });
  if (!mongoUser) return null;
  return (
    <Fragment>
      <Heading>Tạo Khoá Học Mới</Heading>
      <CoureAddNew user={JSON.parse(JSON.stringify(mongoUser))}></CoureAddNew>
    </Fragment>
  );
};

export default page;
