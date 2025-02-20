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
                  src="https://images.unsplash.com/photo-1739795599841-b77211b16c52?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={80}
                  height={80}
                  className="flex-shrink-0 size-20 rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base">
                  Hướng dẫn khoá học photoshop
                </h3>
                <h4 className="text-sm text-slate-500">21/04/2024</h4>
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
