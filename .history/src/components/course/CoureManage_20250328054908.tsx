"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commonClassName, courseStatus } from "@/constants";
import { ICourse } from "@/database/course.model";
import { updateCourse } from "@/lib/actions/course.action";
import { cn } from "@/lib/utils";
import { ECourseStatus } from "@/types/enum";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IconDelete, IconEdit, IconStudy } from "../icons";
import IconEye from "../icons/IconEye";
import Heading from "../typography/Heading";
import { Input } from "../ui/input";
const IconArrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-white"
  >
    <path
      fillRule="evenodd"
      d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
      clipRule="evenodd"
    />
  </svg>
);
const IconArrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-white"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);
const CoureManage = ({ course }: { course: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await updateCourse({
          slug,
          updateData: {
            status: ECourseStatus.PENDING,
            _destroy: true,
          },
          path: "/manage/course",
        });
        toast.success("Xoá khoá học thành công");
      }
    });
  };
  const handleChangeStatus = async (slug: string, status: ECourseStatus) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await updateCourse({
            slug,
            updateData: {
              status: ECourseStatus.PENDING
                ? ECourseStatus.APPROVED
                : ECourseStatus.PENDING,
              _destroy: false,
            },
            path: "/manage/course",
          });
          toast.success("Cập nhật trạng thái thành công");
        }
      });
    } catch (error) {
      console.log("🚀 ~ handleChangeStatus ~ error:", error);
    }
  };
  return (
    <>
      <div className="flex gap-5 items-center lg:flex-col justify-between mb-10">
        <Heading className="mb-10">Quản lý khoá học</Heading>
        <div>
          <Input
            className="px-4 py-2 border font-medium dark:bg-dark-border  border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary  transition"
            placeholder="Tìm kiếm khoá học..."
          ></Input>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {course.length > 0 &&
            course.map((course) => (
              <TableRow key={course.slug}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      alt=""
                      src={course.image}
                      width={80}
                      height={80}
                      className="flex-shrink-0 size-16 rounded-lg object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-base">{course.title}</h3>
                      <h4 className="text-sm text-slate-500">
                        {new Date(course.created_at).toLocaleDateString(
                          "vi-VI"
                        )}
                      </h4>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className="font-bold text-base text-primary"
                    suppressHydrationWarning
                  >
                    {course.price.toLocaleString()}đ
                  </span>
                </TableCell>
                <TableCell>
                  <button
                    onClick={() =>
                      handleChangeStatus(course.slug, course.status)
                    }
                    type="button"
                    className={cn(
                      commonClassName.status,
                      courseStatus.find((item) => item.value === course.status)
                        ?.className
                    )}
                  >
                    {
                      courseStatus.find((item) => item.value === course.status)
                        ?.title
                    }
                  </button>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <Link
                      href={`/manage/course/update-content`}
                      className={commonClassName.action}
                      target="_blank"
                    >
                      <IconStudy />
                    </Link>
                    <Link
                      href={`/course/${course.slug}`}
                      target="_blank"
                      className={commonClassName.action}
                    >
                      <IconEye />
                    </Link>
                    <Link
                      href={`/manage/course/update?slug=${course.slug}`}
                      target="_blank"
                      className={commonClassName.action}
                    >
                      <IconEdit />
                    </Link>
                    <button
                      onClick={() => handleDeleteCourse(course.slug)}
                      className={commonClassName.action}
                    >
                      <IconDelete />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="flex justify-end gap-3 mt-5">
        <button className="size-10 rounded-md flex  items-center justify-center bg-primary hover:bg-blue-700">
          {IconArrowLeft}
        </button>
        <button className="size-10 rounded-md flex  items-center justify-center bg-primary hover:bg-blue-700">
          {IconArrowRight}
        </button>
      </div>
    </>
  );
};

export default CoureManage;
