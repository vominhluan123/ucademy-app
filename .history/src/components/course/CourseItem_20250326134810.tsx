import { ICourse } from "@/database/course.model";
import Image from "next/image";
import Link from "next/link";
import IconClock from "../icons/IconClock";
import IconEye from "../icons/IconEye";
import IconStart from "../icons/IconStart";

const CourseItem = ({ data }: { data: ICourse }) => {
  return (
    <div className="course-items bg-gray-100 dark:bg-dark-card dark:border-dark-card  border border-gray-200  p-4 rounded-2xl transition">
      {/* Ảnh khóa học */}
      <Link href={`/course/${data?.slug}`} className="block h-[300px] relative">
        <Image
          alt={data.title}
          src={data.image || "/images/placeholder.jpg"}
          className="w-full h-full object-cover rounded-lg"
          fill
          sizes="@media (min-width: 640px) 300px, 100vw"
        />
        {/* <span className="absolute inline-block px-3 py-1 rounded-full top-3 z-10 dark:text-dark-text dark:bg-dark-border text-white font-medium bg-green-500 text-xs right-3">
          New
        </span> */}
      </Link>

      {/* Thông tin khóa học */}
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-dark-text">
          {data.title}
        </h3>

        {/* Lượt xem và đánh giá */}
        <div className="flex items-center justify-between gap-2 mb-5 dark:text-dark-text text-gray-700 ">
          <div className="flex items-center gap-1">
            <IconEye className="size-4" />
            <span>{data.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconStart className="size-4" />
            <span>{data.rating[0]: "Chưa có đánh giá"}</span>
          </div>
        </div>

        {/* Thời lượng và giá */}
        <div className="flex items-center justify-between">
          <span className="text-sm flex items-center gap-1 rounded-full px-3 py-1 dark:text-dark-text dark:bg-dark-border bg-primary/10  text-primary ">
            <IconClock className="size-4" />
            3h30
          </span>
          <span className="font-bold text-primary dark:text-dark-text  text-base">
            {data.price.toLocaleString()}đ
          </span>
        </div>

        {/* Nút xem chi tiết */}
        <Link
          href={`/course/${data?.slug}`}
          className="flex items-center justify-center h-12 text-white dark:text-dark-text rounded-lg font-semibold bg-primary hover:bg-secondary hover:shadow-lg hover:scale-105 w-full mt-10 transition-all duration-300 ease-in-out"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
