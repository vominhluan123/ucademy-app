"use server";

import { connectToDatabase } from "../mongoose";

export async function createHistory(params: any) {
  try {
    connectToDatabase();
  } catch (error) {
    console.error(error);
  }
}
