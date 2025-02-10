import Heading from "@/components/common/Heading";
import CoureAddNew from "@/components/course/CoureAddNew";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Heading>Tạo Khoá Học Mới</Heading>
      <CoureAddNew></CoureAddNew>
    </Fragment>
  );
};

export default page;
