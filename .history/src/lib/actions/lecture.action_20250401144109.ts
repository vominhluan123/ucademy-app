"use server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import { TUpdateLectureParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createLecture(params: TUpdateLectureParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findById(params.courseId);
    if (!findCourse) {
      return null;
    }
    const newLecture = await Lecture.create(params.courseId);
  } catch (error) {}
}
