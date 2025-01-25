"use server";
import mongoose from "mongoose";
let iscConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }
  if (iscConnected) {
    console.log("Mongodb is connect");
    return;
  }
};
