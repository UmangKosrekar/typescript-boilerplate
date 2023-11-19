import { Schema, Document, model } from "mongoose";
import { user } from "@enum";
import { createPasswordHash } from "@helper/format";

interface IUser extends Document {
  email: string;
  password: string;
  status: string;
}

const schema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    status: {
      type: String,
      enum: Object.values(user.status),
      default: user.status.PENDING
    }
  },
  {
    timestamps: true
  }
);

schema.pre("save", function (next) {
  this.password = createPasswordHash(this.password);
  next();
});

export default model<IUser>("user", schema);
