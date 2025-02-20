"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Heading from "../typography/Heading";
import Image from "next/image";

const CoureManage = () => {
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
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <Image
                  alt=""
                  src=""
                  width={80}
                  height={80}
                  className="flex-shrink-0 size-20 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base">
                  Hướng dẫn khoá học photoshop
                </h3>
                <h4 className="text-sm text-slate-300">21/04/2024</h4>
              </div>
            </TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CoureManage;
