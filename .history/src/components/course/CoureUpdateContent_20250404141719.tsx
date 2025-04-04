"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { commonClassName } from "@/constants";
import { ILesson } from "@/database/lesson.modal";
import { createLecture, DeleteLecture } from "@/lib/actions/lecture.action";
import { createLesson } from "@/lib/actions/lesson.action";
import { cn } from "@/lib/utils";
import { TCourseUpdateParams } from "@/types";
import { MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { IconCheck, IconDelete, IconEdit } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const CoureUpdateContent = ({ course }: { course: TCourseUpdateParams }) => {
  const lectures = course?.lectures || [];
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
  const hanlderUpdateLecture = async (
    e: MouseEvent<HTMLSpanElement>,
    lectureId: string
  ) => {
    e.stopPropagation();
    try {
      const res = await DeleteLecture({
        lectureId,
        updateData: {
          title: lectureEdit,
          path: `manage/course/update-content?slug=${course.slug}`,
        },
      });
      if (res?.success) {
        toast.success("Cập nhật chương thành công!");
        setLectureIdEdit("");
        setLectureEdit("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handlerAddNewLesson = async (lectureId: string, coureId: string) => {
    try {
      const res = await createLesson({
        path: `manage/course/update-content?slug=${course.slug}`,
        lecture: lectureId,
        course: coureId,
        title: "Bài học mới",
        slug: `tieu-de-bai-hoc-moi-${new Date()
          .getTime()
          .toString()
          .slice(0, -3)}`,
      });
      if (res?.success) {
        toast.success("Thêm bài học mới thành công!");
        return;
      }
      toast.error("Thêm bài học mới thất bại!");
    } catch (error) {
      console.error(error);
    }
  };
  const [lectureIdEdit, setLectureIdEdit] = useState("");
  const [lectureEdit, setLectureEdit] = useState("");

  return (
    <>
      <div className="flex flex-col gap-5">
        {lectures.map((lecture: any) => (
          <div key={lecture._id}>
            <Accordion
              type="single"
              collapsible={!lectureIdEdit}
              className="w-full"
            >
              <AccordionItem value={lecture._id}>
                <AccordionTrigger>
                  <div className="flex gap-3 items-center w-full justify-between pr-5">
                    {lecture._id === lectureIdEdit ? (
                      <div className="w-full flex items-center align-center gap-3">
                        <>
                          <Input
                            placeholder="Tiêu đề"
                            defaultValue={lecture.title}
                            onChange={(e) => setLectureEdit(e.target.value)}
                          />
                          <div className="flex gap-2">
                            <span
                              className={cn(
                                commonClassName.action,
                                "text-green-500"
                              )}
                              onClick={(e) => {
                                hanlderUpdateLecture(e, lecture._id);
                              }}
                            >
                              <IconCheck />
                            </span>
                            <span
                              className={cn(
                                commonClassName.action,
                                "text-red-500"
                              )}
                              onClick={(e) => {
                                e.stopPropagation();
                                setLectureIdEdit("");
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </span>
                          </div>
                        </>
                      </div>
                    ) : (
                      <>
                        <div>{lecture.title || "Chương Mới"} </div>
                        <div className="flex gap-2">
                          <span
                            className={cn(
                              commonClassName.action,
                              "text-blue-500"
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              setLectureIdEdit(lecture._id);
                            }}
                          >
                            <IconEdit />
                          </span>
                          <span
                            className={cn(
                              commonClassName.action,
                              "text-red-500"
                            )}
                            onClick={(e) =>
                              hanlderDeleteLecture(e, lecture._id)
                            }
                          >
                            <IconDelete />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-none bg-transparent">
                  {lecture.lessons.map((lesson: ILesson) => (
                    <Accordion type="single" collapsible key={lesson._id}>
                      <AccordionItem value={lesson._id}>
                        <AccordionTrigger>{lesson.title}</AccordionTrigger>
                        <AccordionContent>123456</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              className="mt-5 ml-auto w-fit block"
              onClick={() => handlerAddNewLesson(lecture._id, course._id)}
            >
              Thêm bài học mới
            </Button>
          </div>
        ))}
      </div>
      <Button className="mt-2" onClick={handlerAddNewLecture}>
        Thêm chương mới
      </Button>
    </>
  );
};

export default CoureUpdateContent;
