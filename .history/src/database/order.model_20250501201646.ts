import { Document, model, models, Schema } from "mongoose";
export interface IOder extends Document {
  _id: string;
  code: string;
  created_at: Date;
  total: number;
  amount: number;
  discount: number;
}

const orderSchema = new Schema<IOder>({});

const Order = models.Order || model<IOder>("Order", orderSchema);
export default Oder;
