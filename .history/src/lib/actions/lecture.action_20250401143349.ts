"use sever";
import { connectToDatabase } from "../mongoose";

export function createLecture(params: any) {
  try {
    connectToDatabase();
  } catch (error) {}
}
