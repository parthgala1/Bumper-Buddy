import mongoose, { Schema } from "mongoose";

const carSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    chasis: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Car = mongoose.model("Car", carSchema);

export default Car;
