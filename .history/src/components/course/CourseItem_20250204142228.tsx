import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconEye from "../icons/IconEye";
import IconStart from "../icons/IconStart";
import IconClock from "../icons/IconClock";

const CourseItem = () => {
  return (
    <div className="course-items bg-gray-100  border border-gray-200  p-4 rounded-2xl transition">
      {/* Ảnh khóa học */}
      <Link href="#" className="block h-[180px] relative">
        <Image
          alt="Unsplash Image"
          src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
          sizes="@media (min-width: 640px) 300px, 100vw"
        />
        <span className="absolute inline-block px-3 py-1 rounded-full top-3 z-10 text-white font-medium bg-green-500 text-xs right-3">
          New
        </span>
      </Link>

      {/* Thông tin khóa học */}
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
          Khoá học Next.js
        </h3>

        {/* Lượt xem và đánh giá */}
        <div className="flex items-center justify-between gap-2 mb-5 text-gray-700 ">
          <div className="flex items-center gap-1">
            <IconEye className="size-4" />
            <span>1000</span>
          </div>
          <div className="flex items-center gap-1">
            <IconStart className="size-4" />
            <span>5.0</span>
          </div>
        </div>

        {/* Thời lượng và giá */}
        <div className="flex items-center justify-between">
          <span className="text-sm flex items-center gap-1 rounded-full px-3 py-1 bg-primary/10  text-primary ">
            <IconClock className="size-4" />
            3h30
          </span>
          <span className="font-bold text-primary  text-base">3000$</span>
        </div>

        {/* Nút xem chi tiết */}
        <Link
          href="#"
          className="flex items-center justify-center h-12 text-white rounded-lg font-semibold bg-primary  hover:bg-secondary hover:shadow-lg hover:scale-105 w-full mt-10 transition-all duration-300 ease-in-out"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
