import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  desc: string;
  price: number;
  sale_price: number;
}

const userSchema = new Schema<ICourse>({});
