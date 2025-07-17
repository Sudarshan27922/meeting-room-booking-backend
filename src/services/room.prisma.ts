import prisma from '../config/prisma';
import { Room } from '../generated/prisma';

export const createRoom = async (data: Omit<Room, 'id' | 'createdAt' | 'updatedAt'>) => {
  return prisma.room.create({ data });
};

export const getAllRooms = async () => {
  return prisma.room.findMany();
};

export const getRoomById = async (id: number) => {
  return prisma.room.findUnique({ where: { id } });
};

export const updateRoom = async (id: number, data: Partial<Room>) => {
  return prisma.room.update({ where: { id }, data });
};

export const deleteRoom = async (id: number) => {
  return prisma.room.delete({ where: { id } });
};
