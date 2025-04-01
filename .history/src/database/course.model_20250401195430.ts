import { ECourseLevel, ECourseStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";
import Lecture from "../lib/actions/lecture.action";
const Lecture = require("./lecture.model");
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
      question: string;
      answer: string;
    }[];
  };
  lectures: Schema.Types.ObjectId[];
  _destroy?: boolean;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    enum: Object.values(ECourseLevel),
    default: ECourseLevel.BEGINNER,
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
    default: "",
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
    ref: "Users",
  },
  lectures: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lecture",
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
      default: [],
    },
    benefits: {
      type: [String],
      default: [],
    },
    qa: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
});

const Course = models.Course || model<ICourse>("Course", courseSchema);
export default Course;
