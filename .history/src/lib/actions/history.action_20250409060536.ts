"use server";

import History from "@/database/history.model";
import User from "@/database/user.model";
import { TCreateHistoryParams } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";

export async function createHistory(params: TCreateHistoryParams) {
  try {
    connectToDatabase();
    const { userId } = await auth();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return;
    if (params.checked) {
      await History.create({
        course: params.course,
        lesson: params.lesson,
        user: findUser._id,
      });
    } else {
      await History.deleteOne({
        course: params.course,
        lesson: params.lesson,
        user: findUser._id,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getHistory(params: { course: string }) {
  try {
    connectToDatabase();
    const histories = await History.find({
      course: params.course,
    });
  } catch (error) {
    console.error(error);
  }
}
