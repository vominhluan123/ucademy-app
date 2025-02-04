import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  return (
    <div className="course-items bg-white border border-gray-200 p-5 rounded-lg">
      <Link href="#" className="block">
        <Image
          alt="Unsplash Image"
          src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          width={300}
          height={200}
          className="w-full h-full object-cover"
        ></Image>
      </Link>
    </div>
  );
};

export default CourseItem;
