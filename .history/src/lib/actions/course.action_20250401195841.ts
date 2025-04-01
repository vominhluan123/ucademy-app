"use server";
import Course, { ICourse } from "@/database/course.model";
import { TcreateCourseParams, TUpdateCourseParams } from "@/types";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

export async function getAllCourses(): Promise<ICourse[] | undefined> {
  try {
    connectToDatabase();
    const Courses = await Course.find();
    return Courses;
  } catch (error) {
    console.log("🚀 ~ getAllCourses ~ error:", error);
    return [];
  }
}

export async function getCourseBySlug({
  slug,
}: {
  slug: string;
}): Promise<ICourse | undefined> {
  try {
    await connectToDatabase();
    const findCourse = await Course.findOne({ slug }).populate({
      path: "lectures",
      model: "Lecture",
    });
    if (!findCourse) {
      console.log("Course not found for slug:", slug);
    } else {
      console.log("Course found:", findCourse);
    }
    return findCourse;
  } catch (error) {
    console.log(error);
  }
}
export async function createCourse(params: TcreateCourseParams) {
  try {
    connectToDatabase();
    const existCourse = await Course.findOne({ slug: params.slug });
    if (existCourse) {
      return { success: false, message: "Đường dẫn khoá học đã tồn tại" };
    }
    const course = await Course.create(params);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(course)),
    };
  } catch (error) {
    console.log("🚀 ~ createCourse ~ error:", error);
    return { success: false, message: "Lỗi trong quá trình tạo khoá học" };
  }
}
export async function updateCourse(params: TUpdateCourseParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findOne({ slug: params.slug });
    if (!findCourse) return;
    await Course.findOneAndUpdate({ slug: params.slug }, params.updateData, {
      new: true,
    });
    revalidatePath(params.path || "/");
    return {
      success: true,
      message: "Cập nhật khoá học thành công ",
    };
  } catch (error) {
    console.log("🚀 ~ updateCourse ~ error:", error);
  }
}
