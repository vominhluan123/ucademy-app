import Heading from "@/components/common/Heading";
import CoureAddNew from "@/components/course/CoureAddNew";
import { auth } from "@clerk/nextjs/server";
import React, { Fragment } from "react";

const page = async () => {
  const { userId } = auth();
  if !userId return null
  return (
    <Fragment>
      <Heading>Tạo Khoá Học Mới</Heading>
      <CoureAddNew user={}></CoureAddNew>
    </Fragment>
  );
};

export default page;
