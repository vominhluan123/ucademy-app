import { Document, model, models, Schema } from "mongoose";
export interface IOrder extends Document {
  _id: string;
  code: string;
  created_at: Date;
  total: number;
  amount: number;
  discount: number;
}

const orderSchema = new Schema<IOrder>({});

const Order = models.Order || model<IOrder>("Order", orderSchema);
export default Oder;
