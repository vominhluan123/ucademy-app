import { Document, Schema } from "mongoose";

export interface ICourse extends Document {}

const userSchema = new Schema<ICourse>({});
