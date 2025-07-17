import mongoose from "mongoose";
import Booking from "../models/Booking";
import { Request, Response } from "express";
import { BookingInput } from "../types/booking/booking.input";

// POST /api/bookings
export const createBooking = async (req: Request<{}, {}, BookingInput>, res: Response): Promise<void> => {
    try {
        const booking = new Booking(req.body);
        await booking.save();

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error creating booking",
            error: (error as Error).message
        });
    }
};

// GET /api/bookings?
// room = id of the needed room
// &user = id of the user to be filtered
// &start = (yyyy-mm-dd) start date of the booking
// &end = (yyyy-mm-dd) end date of the booking
// &title = xxxxx title of the booking
export const getAllBookings = async (req: Request, res: Response): Promise<void> => {
    try {
        const { room, user, start, end, title } = req.query;

        const filter: any = {};

        if (room && mongoose.Types.ObjectId.isValid(room.toString())) {
            filter.room = room;
        }

        if (user && mongoose.Types.ObjectId.isValid(user.toString())) {
            filter.user = user;
        }

        if (start || end) {
            filter.startDateTime = {};
            if (start) filter.startDateTime.$gte = new Date(start as string);
            if (end) filter.startDateTime.$lte = new Date(end as string);
        }

        if (title) {
            filter.title = { $regex: title as string, $options: "i" };
        }

        const bookings = await Booking.find(filter).populate("user").populate("room");

        res.status(200).json({
            success: true,
            message: "Filtered bookings fetched successfully",
            data: bookings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching bookings",
            error: (error as Error).message
        });
    }
};


// GET /api/bookings/:id
export const getBookingById = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: "Invalid booking ID format"
            });
            return;
        }

        const booking = await Booking.findById(req.params.id).populate("user").populate("room");

        if (!booking) {
            res.status(404).json({
                success: false,
                message: "Booking not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Booking fetched successfully",
            data: booking
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error fetching booking",
            error: (error as Error).message
        });
    }
};

// PUT /api/bookings/:id
export const updateBooking = async (
    req: Request<{ id: string }, {}, Partial<BookingInput>>,
    res: Response
): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: "Invalid booking ID format"
            });
            return;
        }

        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!updatedBooking) {
            res.status(404).json({
                success: false,
                message: "Booking not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Booking updated successfully",
            data: updatedBooking
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error updating booking",
            error: (error as Error).message
        });
    }
};

// DELETE /api/bookings/:id
export const deleteBooking = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: "Invalid booking ID format"
            });
            return;
        }

        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

        if (!deletedBooking) {
            res.status(404).json({
                success: false,
                message: "Booking not found"
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Booking deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Error deleting booking",
            error: (error as Error).message
        });
    }
};