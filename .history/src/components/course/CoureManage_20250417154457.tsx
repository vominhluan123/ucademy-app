"use client";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"; // thay bằng đường dẫn icon bạn dùng
import { ECourseStatus } from "@/types/enum";
import Image from "next/image";
import Link from "next/link";
import { IconDelete, IconEdit, IconStudy } from "../icons";
import IconEye from "../icons/IconEye";

type Course = {
  slug: string;
  image: string;
  title: string;
  created_at: string | Date;
  price: number;
  status: ECourseStatus;
};

type Props = {
  courses: Course[];
  isPending: boolean;
  handleDeleteCourse: (slug: string) => void;
  handleChangeStatus: (slug: string, status: ECourseStatus) => void;
};

const statusMap = {
  [ECourseStatus.APPROVED]: {
    title: "Đã duyệt",
    className: "bg-green-100 text-green-700",
  },
  [ECourseStatus.PENDING]: {
    title: "Chờ duyệt",
    className: "bg-yellow-100 text-yellow-700",
  },
  [ECourseStatus.REJECTED]: {
    title: "Từ chối",
    className: "bg-red-100 text-red-700",
  },
};

export default function CourseTable({
  courses,
  isPending,
  handleDeleteCourse,
  handleChangeStatus,
}: Props) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border shadow-sm">
      <Table className="w-full min-w-[700px]">
        <TableHeader>
          <TableRow>
            <TableHead>Thông tin</TableHead>
            <TableHead>Giá</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isPending ? (
            Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-14 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-40" />
                </TableCell>
              </TableRow>
            ))
          ) : courses?.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-6 text-muted-foreground"
              >
                Không có khoá học nào.
              </TableCell>
            </TableRow>
          ) : (
            courses?.map((course) => (
              <TableRow key={course.slug}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      alt=""
                      src={course.image}
                      width={64}
                      height={64}
                      className="size-12 sm:size-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(course.created_at).toLocaleDateString(
                          "vi-VI"
                        )}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className="font-bold text-sm text-primary"
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
                    className={cn(
                      "rounded-md px-2 py-1 text-xs font-medium",
                      statusMap[course.status].className
                    )}
                  >
                    {statusMap[course.status].title}
                  </button>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={`/manage/course/update-content?slug=${course.slug}`}
                            className="icon-btn"
                            target="_blank"
                          >
                            <IconStudy />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>Chỉnh sửa nội dung</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={`/course/${course.slug}`}
                            className="icon-btn"
                            target="_blank"
                          >
                            <IconEye />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>Xem trang khóa học</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={`/manage/course/update?slug=${course.slug}`}
                            className="icon-btn"
                            target="_blank"
                          >
                            <IconEdit />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>Chỉnh sửa thông tin</TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleDeleteCourse(course.slug)}
                            className="icon-btn"
                          >
                            <IconDelete />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Xóa khóa học</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
