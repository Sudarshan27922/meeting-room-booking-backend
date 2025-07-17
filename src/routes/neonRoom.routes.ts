import { Router } from 'express';
import * as neonRoomController from '../controllers/room.prisma.controller';

const router = Router();

router.get('/', neonRoomController.getAllRooms);
router.post('/', neonRoomController.createRoom);
router.put('/:id', neonRoomController.updateRoom);
router.delete('/:id', neonRoomController.deleteRoom);

export default router;
