import { ICourse } from "@/database/course.model";
import Image from "next/image";
import Link from "next/link";
import IconClock from "../icons/IconClock";
import IconEye from "../icons/IconEye";
import IconStart from "../icons/IconStart";

const CourseItem = ({ data }: { data: ICourse }) => {
  return (
    <div className="course-items max-w-sm w-full bg-gray-100 dark:bg-dark-card dark:border-dark-card border border-gray-200 p-4 rounded-2xl transition">
      {/* Ảnh khóa học */}
      <Link
        href={`/course/${data?.slug}`}
        className="block h-[200px] sm:h-[250px] md:h-[300px] relative"
      >
        <Image
          alt={data.title}
          src={data.image || "/images/placeholder.jpg"}
          className="w-full h-full  rounded-lg"
          fill
          sizes="(min-width: 768px) 300px, 100vw"
        />
      </Link>

      {/* Thông tin khóa học */}
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-dark-text">
          {data.title}
        </h3>

        {/* Lượt xem và đánh giá */}
        <div className="flex items-center justify-between gap-2 mb-3 text-gray-700 dark:text-dark-text">
          <div className="flex items-center gap-1">
            <IconEye className="w-4 h-4" />
            <span className="text-sm">{data.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconStart className="w-4 h-4" />
            <span className="text-sm">
              {data.rating[0] || "Chưa có đánh giá"}
            </span>
          </div>
        </div>

        {/* Thời lượng và giá */}
        <div className="flex items-center justify-between">
          <span className="text-sm flex items-center gap-1 rounded-full px-3 py-1 dark:text-dark-text dark:bg-dark-border bg-primary/10 text-primary">
            <IconClock className="w-4 h-4" />
            3h30
          </span>
          <div className="font-bold text-primary dark:text-dark-text text-base">
            {data.sale_price ? (
              <>
                <span style={{ textDecoration: "line-through", color: "gray" }}>
                  {data.price.toLocaleString()}đ
                </span>
                <span className=" text-primary font-bold text-lg ml-2">
                  {data.sale_price.toLocaleString()}đ
                </span>
              </>
            ) : (
              <span>{data.price.toLocaleString()}đ</span>
            )}
          </div>
        </div>

        {/* Nút xem chi tiết */}
        <Link
          href={`/course/${data?.slug}`}
          className="flex items-center justify-center h-12 text-white dark:text-dark-text rounded-lg font-semibold bg-primary hover:bg-secondary hover:shadow-lg hover:scale-105 w-full mt-6 transition-all duration-300 ease-in-out"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
