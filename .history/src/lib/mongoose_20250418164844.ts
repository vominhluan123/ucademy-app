"use server";
import mongoose from "mongoose";
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }
  if (isConnected) {
    console.log("Mongodb is connect");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ucademy",
    });
    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};
