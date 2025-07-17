import { Document } from "mongoose";
import { UserRole } from "./role.enum";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
