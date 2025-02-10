import { Document, Schema } from "mongoose";

export interface ILecture extends Document {
  _id: String;
  title: String;
  course: Schema.Types.ObjectId;
  lessons: Schema.Types.ObjectId[];
  created_at: Date;
  _destroy: boolean;
}
const lettureSchema = new Schema<ILecture>({
  title: {
    type: String,
  },
});
