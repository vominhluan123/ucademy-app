import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10">
      <div className="relative">
        <Image
          src="http://localhost:3000/course/khoa-hoc-javascrip"
          alt=""
          fill
        ></Image>
      </div>
      <div></div>
    </div>
  );
};

export default page;
