"use server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import Lesson, { ILesson } from "@/database/lesson.modal";
import { TCreateLessonParams, TUpdateLessonParams } from "@/types";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCoure = await Course.findById(params.course);
    if (!findCoure) {
      return {
        success: false,
        message: "Không tìm thấy khoá học",
      };
    }
    const findLeture = await Lecture.findById(params.lecture);
    if (!findLeture) {
      return {
        success: false,
        message: "Không tìm thấy chương học",
      };
    }
    const newLesson = await Lesson.create(params);
    findLeture.lessons.push(newLesson._id);
    await findLeture.save();
    revalidatePath(params.path || "/");
    if (!newLesson) {
      return {
        success: false,
        message: "Tạo chương học thất bại",
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
}
export async function updateLesson(params: TUpdateLessonParams) {
  try {
    connectToDatabase();
    const res = await Lesson.findByIdAndUpdate(
      params.lessonId,
      params.updateData,
      {
        new: true,
      }
    );
    revalidatePath(params.path || "/");
    if (!res) {
      return {
        success: false,
        message: "Cập nhật chương học thất bại",
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    console.error(error);
  }
}
export async function getLessonDetails({
  slug,
  course,
}: {
  slug: string;
  course: string;
}): Promise<ILesson | undefined> {
  try {
    connectToDatabase();
    const lessonDetails = await Lesson.findOne({
      slug,
      course,
    });
    return JSON.parse(JSON.stringify(lessonDetails));
  } catch (error) {
    console.error(error);
  }
}
export async function findAllLessons({
  course,
}: {
  course: string;
}): Promise<ILesson[] | undefined> {
  try {
    connectToDatabase();
    const lessons = await Lesson.find({ course }).lean();
    return JSON.parse(JSON.stringify(lessons));
  } catch (error) {
    console.error(error);
  }
}
export async function countLessonByCourseID({
  courseID,
}: {
  courseID: string;
}): Promise<number | undefined> {
  try {
    connectToDatabase();
    const count = await Lesson.countDocuments({ course: courseID });
    return count || 0;
  } catch (error) {
    console.error(error);
  }
}
