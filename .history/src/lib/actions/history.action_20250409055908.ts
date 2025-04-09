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
    if (!findUser) return null;

    const newHistory = await History.create({
      course: params.course,
      lesson: params.lesson,
      user: findUser._id,
    });
  } catch (error) {
    console.error(error);
  }
}
