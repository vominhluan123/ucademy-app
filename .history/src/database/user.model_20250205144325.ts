import { Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  username: string;
  email__address: string;
  avatar: string;
  courses: string;
  status: string;
  role: string;
}
