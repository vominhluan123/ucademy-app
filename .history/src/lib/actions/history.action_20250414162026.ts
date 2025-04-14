"use server";
import History, { IHistory } from "@/database/history.model";
import User from "@/database/user.model";
import { TCreateHistoryParams } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
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
    const currentPath = headers().get("x-pathname");
    if (params.path !== currentPath) {
      revalidatePath(params.path);
    }
  } catch (error) {
    console.error(error);
  }
}
export async function getHistory(params: {
  course: string;
}): Promise<IHistory[] | undefined> {
  try {
    connectToDatabase();
    const { userId } = await auth();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return;
    const histories = await History.find({
      course: params.course,
      user: findUser._id,
    });
    return histories;
  } catch (error) {
    console.error(error);
  }
}
