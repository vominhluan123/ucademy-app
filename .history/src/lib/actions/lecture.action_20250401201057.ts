"use server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import { TDeleteLectureParams, TUpdateLectureParams } from "@/types";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";

export async function createLecture(params: TUpdateLectureParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findById(params.course);
    if (!findCourse) {
      return null;
    }
    const newLecture = await Lecture.create(params);
    findCourse.lectures.push(newLecture._id);
    findCourse.save();
    revalidatePath(params.path || "/");
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function DeleteLecture(params: TDeleteLectureParams) {
  try {
    connectToDatabase();
    await Lecture.findByIdAndUpdate(params.lectureId, params.updateData, {
      new: true,
    });
    revalidatePath(params.updateData.path || "/");
    return {
      success: true,
    };
  } catch (error) {}
}
