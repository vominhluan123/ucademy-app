"use client";
import useQueryString from "@/app/hooks/useQueryString";
import StatusBadge from "@/components/common/StatusBadge";
import { IconCancel, IconCheck } from "@/components/icons";
import Heading from "@/components/typography/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

import { commonClassName, courseStatus, orderStatus } from "@/constants";
import { EOrderStatus } from "@/types/enum";
import { debounce } from "lodash";
import Link from "next/link";
import { useTransition } from "react";
import Swal from "sweetalert2";
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
const OrderMange = ({
  orders = [],
}: {
  orders: {
    code: string;
    course: { title: string };
    user: { name: string };
    total: number;
    amount: number;
    discount: number;
    status: EOrderStatus;
  }[];
}) => {
  const handleCancelOrder = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn huỷ đơn hàng này không?",
      text: "Đơn hàng sẽ không thể khôi phục lại!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có, tôi muốn huỷ!",
      cancelButtonText: "Huỷ",
    }).then(async (result) => {
      if (result.isConfirmed) {
      }
    });
  };
  const [isPending, startTransition] = useTransition();

  const { createQueryString, pathname, router } = useQueryString();
  const updateQueryParams = (key: string, value: string) => {
    router.push(`${pathname}?${createQueryString(key, value)}`);
  };
  const handlerSearchCourse = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      startTransition(() => {
        updateQueryParams("search", e.target.value);
      });
    },
    500
  );
  const handleComleteOrder = () => {};
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
                <TableHead>Mã đơn hàng</TableHead>
                <TableHead>Khoá học</TableHead>
                <TableHead>Thành viên</TableHead>
                <TableHead>Số tiền</TableHead>
                <TableHead>Mã giảm giá</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.length > 0 &&
                orders.map((orders) => (
                  <TableRow key={orders.code}>
                    <TableCell>
                      <strong>{orders.code}</strong>
                    </TableCell>
                    <TableCell>{orders.course.title}</TableCell>
                    <TableCell>{orders.user.name}</TableCell>
                    <TableCell className="flex flex-col gap-2">
                      <span>{orders.amount.toLocaleString("en-En")}</span>
                      {orders.discount > 0 && (
                        <span>{orders.discount.toLocaleString("en-En")}</span>
                      )}
                      <strong className="text-orange-500">
                        {orders.total.toLocaleString("en-En")}
                      </strong>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <StatusBadge
                        status={orders.status}
                        statusList={orderStatus}
                      ></StatusBadge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              className={commonClassName.action}
                              onClick={handleComleteOrder}
                            >
                              <IconCheck />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Duyệt đơn hàng</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              className={commonClassName.action}
                              onClick={handleCancelOrder}
                            >
                              <IconCancel />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Huỷ đơn hàng</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
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
