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
  };
  lecttures: Schema.Types.ObjectId[];
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  slug: {
    type: String,
    required: true,
  },
  intro_url: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
  },
  sale_price: {
    type: Number,
  },
  status: {
    type: String,
    enum: Object.values(ECourseStatus),
    default: ECourseStatus.PENDING,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  lecttures: [
    {
      type: Schema.Types.ObjectId,
      ref: "lecture",
    },
  ],
  rating: {
    type: [Number],
    default: [5],
  },
  views: {
    type: Number,
    default: 0,
  },
  info: {
    requirements: {
      type: [String],
    },
    benefits: {
      type: [String],
    },
    qa: [
      {
        quesiton: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
});
