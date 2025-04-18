"use server";
import Course, { ICourse } from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import Lesson from "@/database/lesson.modal";
import {
  TCourseUpdateParams,
  TcreateCourseParams,
  TGetAllCourseParams,
  TUpdateCourseParams,
} from "@/types";
import { ECourseStatus } from "@/types/enum";
import { FilterQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

export async function getAllCourses(
  params: TGetAllCourseParams
): Promise<ICourse[] | undefined> {
  try {
    await connectToDatabase();
    const { page = 1, limit = 10, search, status } = params;
    const skip = (page - 1) * limit;
    const query: FilterQuery<typeof Course> = {};
    if (search) {
      query.$or = [{ title: { $regex: search, $options: "i" } }];
    }
    if (status) {
      query.status = status;
    }
    const Courses = await Course.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ created_at: -1 });
    return Courses;
  } catch (error) {
    return [];
  }
}
export async function getAllCoursesPublic(
  params: TGetAllCourseParams
): Promise<ICourse[] | undefined> {
  try {
    await connectToDatabase();
    const { page = 1, limit = 10, search } = params;
    const skip = (page - 1) * limit;
    const query: FilterQuery<typeof Course> = {
      status: ECourseStatus.APPROVED,
    };
    if (search) {
      query.$or = [{ title: { $regex: search, $options: "i" } }];
    }
    const courses = await Course.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ created_at: -1 });
    console.log(
      "Found courses (public):",
      courses.map((c) => ({ title: c.title, status: c.status }))
    );

    return courses;
  } catch (error) {
    console.error(error);
  }
}

export async function getCourseBySlug({
  slug,
}: {
  slug: string;
}): Promise<TCourseUpdateParams | undefined> {
  try {
    await connectToDatabase();
    const findCourse = await Course.findOne({ slug })
      .populate({
        path: "lectures",
        model: Lecture,
        select: "_id title order",
        match: { _destroy: false },
        populate: {
          path: "lessons",
          model: Lesson,
          match: { _destroy: false },
        },
      })
      .exec();
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
