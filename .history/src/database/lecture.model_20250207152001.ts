import { Document, Schema } from "mongoose";

export interface ILecture extends Document {
  _id: String;
  title: String;
  lessons: Schema.Types.ObjectId[];
  created_at: Date;
  _destroy: boolean;
}
