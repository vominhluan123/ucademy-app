import { EUserRole, EUserStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email__address: string;
  avatar: string;
  courses: Schema.Types.ObjectId[];
  creatdAt: Date;
  role: EUserRole;
  status: EUserStatus;
}
const userSchema = new Schema<User>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email__address: {
    type: String,
  },
  avatar: {
    type: String,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      rel: "course",
    },
  ],
  creatdAt: {
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
const User = models.User || model("User", userSchema);
export default User;
