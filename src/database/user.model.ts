import { EUserRole, EUserStatus } from "@/types/enum";
import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  created_at: Date;
}
const userSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
});
const User = models.Users || model<IUser>("Users", userSchema);
export default User;
