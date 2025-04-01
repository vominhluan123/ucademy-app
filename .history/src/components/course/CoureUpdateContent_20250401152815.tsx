"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commonClassName } from "@/constants";
import { createLecture } from "@/lib/actions/lecture.action";
import { MouseEvent } from "react";
import { toast } from "react-toastify";
import { IconDelete, IconEdit } from "../icons";
import { Button } from "../ui/button";
const CoureUpdateContent = ({ course }: { course: any }) => {
  const lectures = course?.lectures || [];
  const handlerAddNewLecture = async () => {
    try {
      const res = await createLecture({
        title: "Chương 1",
        course: course._id,
        order: lectures.length + 1,
        path: `manage/course/update-content?slug=${course.slug}`,
      });
      if (res?.success) {
        toast.success("Thêm chương mới thành công!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Thêm chương mới thất bại!");
    }
  };
  const hanlderDeleteLecture = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
  };
  return (
    <>
      {lectures.map((lecture: any) => (
        <Accordion
          type="single"
          collapsible
          className="w-full"
          key={lecture._id}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-3 items-center w-full justify-between pr-5">
                <div>Chương 1: Giới thiệu</div>
                {/* <div className="w-full">
                <Input placeholder="Tiêu đề" />
              </div> */}
                <div className="flex gap-2">
                  <span className={commonClassName.action}>
                    <IconEdit />
                  </span>
                  <span
                    className={commonClassName.action}
                    onClick={hanlderDeleteLecture}
                  >
                    <IconDelete />
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <Button className="mt-5" onClick={handlerAddNewLecture}>
        Thêm chương mới
      </Button>
    </>
  );
};

export default CoureUpdateContent;
