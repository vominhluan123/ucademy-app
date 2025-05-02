import { Document, model, models, Schema } from "mongoose";
export interface Oder extends Document {
  _id: string;
  created_at: Date;
  course: Schema.Types.ObjectId;
  lesson: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const historySchema = new Schema<Oder>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  lesson: {
    type: Schema.Types.ObjectId,
    ref: "Lesson",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const History = models.History || model<Oder>("History", historySchema);
export default History;
