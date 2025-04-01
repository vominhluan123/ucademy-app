"use server";
import { TUpdateLectureParams } from "@/types";
import { connectToDatabase } from "../mongoose";

export function createLecture(params: TUpdateLectureParams) {
  try {
    connectToDatabase();
  } catch (error) {}
}
