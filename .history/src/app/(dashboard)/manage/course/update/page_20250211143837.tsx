import Heading from "@/components/typography/Heading";
import React from "react";

const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string;
  };
}) => {
  console.log(searchParams.slug);
  return <Heading>Cập nhật khoá học</Heading>;
};

export default page;
