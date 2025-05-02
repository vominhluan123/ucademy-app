import { EOrderStatus } from "@/types/enum";
import { Document, model, models, Schema } from "mongoose";
export interface IOrder extends Document {
  _id: string;
  code: string;
  course: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  status: EOrderStatus;
  total: number;
  amount: number;
  discount: number;
  coupon: Schema.Types.ObjectId;
}

const orderSchema = new Schema<IOrder>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    total: {
      type: Number,
    },
    amount: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    coupon: {
      type: Schema.Types.ObjectId,
      ref: "Coupon",
    },
    status: {
      type: String,
      enum: Object.values(EOrderStatus),
      default: EOrderStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

const Order = models.Order || model<IOrder>("Order", orderSchema);
export default Order;
