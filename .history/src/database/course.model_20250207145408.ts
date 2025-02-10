import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: string;
  created_at: Date;
  author: Schema.Types.ObjectId;
  level: string;
  views: number;
  rating: number[];
}

const userSchema = new Schema<ICourse>({});
