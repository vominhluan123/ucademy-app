"use sever";
import User, { IUser } from "@/database/user.model";
import { TCreateUserParams } from "@/types";
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
    await connectToDatabase();
    const findUser = await User.findOne({
      clerkId: userId,
    });
    if (!findUser) return null;
    return findUser || null;
  } catch (error) {
    console.log("Error fetching user info:", error);
    return null; // Tránh lỗi không có return
  }
}
