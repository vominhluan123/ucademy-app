import { Document } from "mongoose";

interface User extends Document {
  clerkID: string;
}
