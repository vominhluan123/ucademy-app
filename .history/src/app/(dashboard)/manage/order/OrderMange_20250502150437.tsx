"use client";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { courseStatus } from "@/constants";
import Link from "next/link";
import Heading from "../typography/Heading";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const OrderMange = () => {
  return (
    <>
      <Link
        href="/manage/course/new"
        className="bg-primary size-10 fixed right-5 bottom-5 rounded-full flex items-center justify-center text-white animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </Link>
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between mb-6">
          <Heading className="mb-2 sm:mb-0">Quản lý đơn hàng</Heading>
          <div className="flex gap-3">
            <div className="relative w-full sm:w-[300px]">
              <Input
                className="px-4 py-2 border font-medium dark:bg-dark-border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-primary transition w-full"
                placeholder="Tìm kiếm khoá học..."
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {courseStatus.map((status) => (
                    <SelectItem value={status.value} key={status.value}>
                      {status.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Bảng cuộn ngang trên mobile */}
        <div className="w-full overflow-x-auto">
          <Table className="w-full min-w-[600px]">
            <TableHeader>
              <TableRow>
                <TableHead>Thông tin</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        </div>

        {/* Nút phân trang */}
        <div className="flex justify-center sm:justify-end gap-3 mt-5">
          <button className="size-10 rounded-md flex items-center justify-center bg-primary hover:bg-blue-700">
            {IconArrowLeft}
          </button>
          <button className="size-10 rounded-md flex items-center justify-center bg-primary hover:bg-blue-700">
            {IconArrowRight}
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderMange;
