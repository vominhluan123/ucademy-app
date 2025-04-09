"use server";

import User from "@/database/user.model";
import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";

export async function createHistory(params: any) {
  try {
    connectToDatabase();
    const { userId } = auth();
    const findUser = await User.findOne({ clerkId: userId });
  } catch (error) {
    console.error(error);
  }
}
