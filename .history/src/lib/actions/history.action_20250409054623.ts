"use server";

import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";

export async function createHistory(params: any) {
  try {
    connectToDatabase();
    const { userId } = auth();
  } catch (error) {
    console.error(error);
  }
}
