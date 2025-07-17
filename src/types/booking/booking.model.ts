import { Types } from "mongoose";
import { RecurringType } from "./recurringType.enum";

export interface IBooking {
    user: Types.ObjectId | string;
    room: Types.ObjectId | string;
    title: string;
    description?: string;
    startDateTime: Date;
    endDateTime: Date;
    guests: number;
    recurrenceRule?: string;
    recurrenceEndDate?: Date;
    amenities?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}