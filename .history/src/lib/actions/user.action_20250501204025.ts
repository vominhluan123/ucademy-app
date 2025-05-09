"use sever";
import Course, { ICourse } from "@/database/course.model";
import User, { IUser } from "@/database/user.model";
import { TCreateUserParams } from "@/types";
import { ECourseStatus } from "@/types/enum";
import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";

export async function createUser(params: TCreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserInfo({
  userId,
}: {
  userId: string;
}): Promise<IUser | null | undefined> {
  try {
    connectToDatabase();
    const findUser = await User.findOne({
      clerkId: userId,
    });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log("Error fetching user info:", error);
  }
}
export async function getUserCourses(): Promise<ICourse[] | undefined | null> {
  try {
    connectToDatabase();
    const { userId } = await auth();
    const findUser = await User.findOne({ clerkId: userId }).populate({
      path: "courses",
      model: Course,
      match: {
        status: ECourseStatus.APPROVED,
      },
    });
    if (!findUser) return null;
    return findUser.courses;
  } catch (error) {
    console.log("Error fetching user info:", error);
  }
}
