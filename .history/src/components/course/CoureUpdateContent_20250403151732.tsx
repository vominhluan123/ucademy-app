"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commonClassName } from "@/constants";
import { ILecture } from "@/database/lecture.model";
import { createLecture, DeleteLecture } from "@/lib/actions/lecture.action";
import { TCourseUpdateParams } from "@/types";
import { MouseEvent } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useImmer } from "use-immer";
import { IconDelete, IconEdit } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const CoureUpdateContent = ({ course }: { course: TCourseUpdateParams }) => {
  const lectures = course?.lectures || [];
  console.log("🚀 ~ CoureUpdateContent ~ lectures:", lectures);
  const handlerAddNewLecture = async () => {
    try {
      const res = await createLecture({
        title: "Chương mới",
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
  const hanlderDeleteLecture = async (
    e: MouseEvent<HTMLSpanElement>,
    lectureId: string
  ) => {
    e.stopPropagation();
    try {
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
          const res = await DeleteLecture({
            lectureId,
            updateData: {
              _destroy: true,
              path: `manage/course/update-content?slug=${course.slug}`,
            },
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const [lectureEdit, setlectureEdit] = useImmer(0);
  return (
    <>
      {lectures.map((lecture: ILecture, index) => (
        <Accordion
          type="single"
          collapsible
          className="w-full"
          key={lecture._id}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-3 items-center w-full justify-between pr-5">
                <div>{lecture.title || "Chương Mới"} </div>
                <div className="w-full">
                  <Input placeholder="Tiêu đề" defaultValue={lecture.title} />
                </div>
                <div className="flex gap-2">
                  <span className={commonClassName.action}>
                    <IconEdit />
                  </span>
                  <span
                    className={commonClassName.action}
                    onClick={(e) => hanlderDeleteLecture(e, lecture._id)}
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
