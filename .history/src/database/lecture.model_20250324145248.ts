import { Document, model, models, Schema } from "mongoose";

export interface ILecture extends Document {
  _id: String;
  title: String;
  course: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  created_at: Date;
  _destroy: boolean;
  order: number;
}
const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  _destroy: {
    type: Boolean,
    default: false,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  order: {
    type: Number,
    default: 0,
  },
});

const Lecture = models.Lecture || model<ILecture>("lecture", lectureSchema);
export default Lecture;
