import { EUserStatus } from "@/types/enum";
import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email__address: string;
  avatar: string;
  courses: string;
  status: EUserStatus;
  role: string;
  creatdAt: string;
}
