import mongoose from "mongoose";
import Room from '../models/Room';
import { Request, Response } from "express";
import { RoomInput } from "../types/room/room.input";

// POST /api/rooms
export const createRoom = async (req: Request<{}, {}, RoomInput>, res: Response): Promise<void> => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json({
            success: true,
            message: 'Room added successfully',
            data: room
        });
    } catch (error: unknown) {
        if (typeof error === 'object' && error && 'code' in error && (error as any).code === 11000) {
            const key = Object.keys((error as any).keyValue).join(', ');
            const val = Object.values((error as any).keyValue).join(', ');
            res.status(409).json({
                success: false,
                message: `Duplicate value detected: ${key} (${val}).`,
            });
            return;
        }

        res.status(400).json({
            success: false,
            message: 'Error creating room',
            error: (error as Error).message
        });
    }
};

// GET /api/rooms
export const getAllRooms = async (req: Request, res: Response): Promise<void> => {
    try {
        const rooms = await Room.find();
        res.status(200).json({
            success: true,
            message: 'All rooms fetched successfully',
            data: rooms
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error with fetching rooms',
            error: (error as Error).message
        });
    }
};

// GET /api/rooms/:id
export const getRoomById = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: 'Invalid room ID (MongoDB format)'
            });
            return;
        }

        const room = await Room.findById(req.params.id);
        if (!room) {
            res.status(404).json({
                success: false,
                message: 'Room not found with provided ID'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Room fetched successfully',
            data: room
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error fetching room',
            error: (error as Error).message
        });
    }
};

// GET /api/rooms/name/:name
export const getRoomByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const room = await Room.findOne({ name: req.params.name });
        if (!room) {
            res.status(404).json({
                success: false,
                message: 'Room not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Room fetched successfully',
            data: room
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching room by name',
            error: (error as Error).message
        });
    }
};

// PUT /api/rooms/:id
export const updateRoom = async (req: Request<{ id: string }, {}, Partial<RoomInput>>, res: Response): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: 'Invalid room ID format'
            });
            return;
        }

        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!updatedRoom) {
            res.status(404).json({
                success: false,
                message: 'Room not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Room updated successfully',
            data: updatedRoom
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating room',
            error: (error as Error).message
        });
    }
};

// DELETE /api/rooms/:id
export const deleteRoom = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
                success: false,
                message: 'Invalid room ID format'
            });
            return;
        }

        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            res.status(404).json({
                success: false,
                message: 'Room not found'
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Room deleted successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting room',
            error: (error as Error).message
        });
    }
};
