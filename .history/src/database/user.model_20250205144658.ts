import { EUserRole, EUserStatus } from "@/types/enum";
import { Document, Schema } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email__address: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  creatdAt: Date;
}
