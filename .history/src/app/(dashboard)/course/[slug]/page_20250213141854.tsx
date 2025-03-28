import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-10">
      <div>
        <Image
          src="http://localhost:3000/course/khoa-hoc-javascrip"
          alt=""
        ></Image>
      </div>
      <div></div>
    </div>
  );
};

export default page;
