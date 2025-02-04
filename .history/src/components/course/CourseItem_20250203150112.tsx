import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  return (
    <div className="course-items bg-white border border-gray-200 p-5 rounded-lg">
      <Link href="#" className="block">
        <Image
          alt=""
          src="https://images.unsplash.com/photo-1734550268367-9e6badcfbce4?q=80 // &w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={200}
        ></Image>
      </Link>
    </div>
  );
};

export default CourseItem;
