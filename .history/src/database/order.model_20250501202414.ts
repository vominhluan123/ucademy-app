import { EOrderStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";
export interface IOrder extends Document {
  _id: string;
  code: string;
  course: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  status: EOrderStatus;
  created_at: Date;
  total: number;
  amount: number;
  discount: number;
}

const orderSchema = new Schema<IOrder>({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  total:{
    type:Number
  }
  amount: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = models.Order || model<IOrder>("Order", orderSchema);
export default Order;
