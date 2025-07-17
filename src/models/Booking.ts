import mongoose, { Schema, Document, Model } from "mongoose";
import { IBooking, RecurringType } from "../types/booking";

interface BookingDocument extends IBooking, Document { }

const bookingSchema: Schema<BookingDocument> = new mongoose.Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        room: { type: Schema.Types.ObjectId, ref: 'Room', required: true },
        title: { type: String, required: true },
        description: { type: String },
        startDateTime: { type: Date, required: true },
        endDateTime: { type: Date, required: true },
        guests: { type: Number, required: true },
        recurrenceRule: { type: String },
        recurrenceEndDate: { type: Date },
        amenities: [{ type: String }],
    }, { timestamps: true });

const Booking: Model<BookingDocument> = mongoose.model<BookingDocument>("Booking", bookingSchema)
export default Booking;
