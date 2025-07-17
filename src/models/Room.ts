import mongoose, { Document, Schema, Model } from "mongoose";
import { IRoom } from "../types/room";

interface RoomDocument extends IRoom, Document {}

const roomSchema: Schema<RoomDocument> = new mongoose.Schema(
  {
    //roomId: { type: String, required: true, unique: true }, // from this we can use a custom id as well as the mongo db auto generated id
    name: { type: String, required: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    isAC: { type: Boolean, default: false },
    amenities: [{ type: String }],
  },
  { timestamps: true }
);

roomSchema.index({ name: 1, location: 1 }, { unique: true });

const Room: Model<RoomDocument> = mongoose.model<RoomDocument>("Room", roomSchema);

export default Room;
