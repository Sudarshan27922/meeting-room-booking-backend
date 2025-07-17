import { Document } from "mongoose";

export interface IRoom extends Document {
  name: string;
  location: string;
  capacity: number;
  isAC?: boolean;
  amenities?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}