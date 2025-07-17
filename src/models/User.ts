import mongoose, { Schema } from "mongoose";
import { IUser } from "../types/user/user.model";
import { UserRole } from "../types/user/role.enum";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:     { type: String, enum: Object.values(UserRole), default: UserRole.USER },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
