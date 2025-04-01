"use server";
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import { TUpdateLectureParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createLecture(params: TUpdateLectureParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findById(params.course);
    if (!findCourse) {
      return null;
    }
    const newLecture = await Lecture.create(params.course);
    findCourse.lectures.push(newLecture._id);
    findCourse.save();
    return {
      succsess: true,
    };
  } catch (error) {
    console.log(error);
  }
}
