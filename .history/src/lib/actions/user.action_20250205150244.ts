"use sever";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export default function createUser(params: any) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
