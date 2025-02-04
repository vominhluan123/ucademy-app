import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  return (
    <div className="course-items bg-white border border-gray-200 p-4 rounded-2xl">
      <Link href="#" className="block h-[200px]">
        <Image
          alt="Unsplash Image"
          src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
          sizes="@media (min-width: 640px) 300px, 100vw"
        ></Image>
      </Link>
    </div>
  );
};

export default CourseItem;
