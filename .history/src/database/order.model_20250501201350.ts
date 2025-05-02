import { Document, model, models, Schema } from "mongoose";
export interface IOder extends Document {
  _id: string;
  created_at: Date;
  course: Schema.Types.ObjectId;
  lesson: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

const oderSchema = new Schema<IOder>({});

const Oder = models.Oder || model<IOder>("Oder", oderSchema);
export default Oder;
