import { Router } from "express";
import * as roomController from '../controllers/room.controller';
import validate from '../utils/validate';
import { createRoomValidation, updateRoomValidation} from '../validators/roomValidator'
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post('/', authenticate, createRoomValidation, validate, roomController.createRoom);
router.get('/', authenticate, roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);
router.get('/name/:name', roomController.getRoomByName);
router.put('/:id', updateRoomValidation, validate, roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

export default router;