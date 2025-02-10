"use sever";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { TCreateUserParams } from "@/types";

export default async function createUser(params: TCreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}

export default async function getUserInfo({ userId }: { userId: string }) {
  try {
  } catch (error) {
    console.log("🚀 ~ getUserInfo ~ error:", error);
  }
}
