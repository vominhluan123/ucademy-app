import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  desc: string;
}

const userSchema = new Schema<ICourse>({});
