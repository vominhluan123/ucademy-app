"use server";
import { TcreateCourseParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export async function createCourse(params: TcreateCourseParams) {
  try {
    connectToDatabase();
  } catch (error) {
    console.log("🚀 ~ createCourse ~ error:", error);
  }
}
