import { ECourseLevel, ECourseStatus } from "@/types/enum";
import { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  _id: string;
  title: string;
  image: string;
  intro_url: string;
  desc: string;
  price: number;
  sale_price: number;
  slug: string;
  status: ECourseStatus;
  created_at: Date;
  author: Schema.Types.ObjectId;
  level: ECourseLevel;
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

const courseSchema = new Schema<ICourse>({
  title: {
    type: string,
  },
});
