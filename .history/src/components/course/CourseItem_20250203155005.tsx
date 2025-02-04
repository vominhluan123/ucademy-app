import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconEye from "../icons/IconEye";
import IconStart from "../icons/IconStart";
import IconClock from "../icons/IconClock";

const CourseItem = () => {
  return (
    <div className="course-items bg-white border border-gray-200 p-4 rounded-2xl">
      <Link href="#" className="block h-[180px] relative">
        <Image
          alt="Unsplash Image"
          src="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
          sizes="@media (min-width: 640px) 300px, 100vw"
        ></Image>
        <span className="absolute inline-block px-3 py-1 rounded-full top-3 z-10 text-white font-medium bg-green-500 text-sx right-3">
          New
        </span>
      </Link>
      <div className="py-4">
        <h3 className="font-bold text-lg mb-3">Khoá học nextjs</h3>
        <div className="flex items-center flex-col gap-2 mb-5">
          <IconEye></IconEye>
          <span>1000</span>
          <IconStart></IconStart>
          <span>5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm bg-opacity-10 flex items-center gap-2 rounded-full px-3 py-1 bg-primary text-primary">
            <IconClock></IconClock>
            3h30
          </span>
          <span className="font-semibold text-primary">3000$</span>
        </div>
        <Link
          href="#"
          className="flex items-center justify-center h-12 text-white rounded-lg font-semibold bg-primary w-full mt-10"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
