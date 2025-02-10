import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
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
  info: {
    requirements: string[];
    benefits: string[];
    qa: {
      quesiton: string;
      answer: string;
    }[];
    lecttures: Schema.Types.ObjectId[];
  };
}

const userSchema = new Schema<ICourse>({});
