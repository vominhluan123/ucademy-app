"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Heading from "../typography/Heading";
import Image from "next/image";
import { commonClassName, courseStatus } from "@/constants";
import { cn } from "@/lib/utils";
import { IconCheck, IconDelete, IconEdit, IconStudy } from "../icons";
import IconEye from "../icons/IconEye";
import Link from "next/link";
import { ICourse } from "@/database/course.model";

const CoureManage = ({ course }: { course: ICourse[] }) => {
  const handleDeleteCourse = (slug: string) => {};
  return (
    <>
      <Heading className=" mb-10">Quản lý khoá học</Heading>
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
                  <span className="font-bold text-base">
                    {course.price.toLocaleString()}đ
                  </span>
                </TableCell>
                <TableCell>
                  <span
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
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    <button className={commonClassName.action}>
                      <IconStudy />
                    </button>
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
    </>
  );
};

export default CoureManage;
