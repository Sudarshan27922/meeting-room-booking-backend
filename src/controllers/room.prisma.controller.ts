import { Request, Response } from 'express';
import * as neonRoomService from '../services/room.prisma';

export const createRoom = async (req: Request, res: Response) => {
  try {
    const room = await neonRoomService.createRoom(req.body);
    res.status(201).json({ success: true, source: 'Neon DB', data: room });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create room', error });
  }
};

export const getAllRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await neonRoomService.getAllRooms();
    res.status(200).json({ success: true, source: 'Neon DB', data: rooms });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch rooms', error });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  try {
    const room = await neonRoomService.updateRoom(Number(req.params.id), req.body);
    res.status(200).json({ success: true, source: 'Neon DB', data: room });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update room', error });
  }
};

export const deleteRoom = async (req: Request, res: Response) => {
  try {
    await neonRoomService.deleteRoom(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete room', error });
  }
};
