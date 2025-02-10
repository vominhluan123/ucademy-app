import { Document } from "mongoose";

export interface ILecture extends Document {
  _id: String;
  title: String;
}
