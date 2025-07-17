import { Router } from "express";
import * as bookingController from "../controllers/booking.controller";
import { authenticate } from "../middlewares/auth.middleware";
import validate from "../utils/validate";
import { createBookingValidation, updateBookingValidation } from "../validators/bookingValidator";

const router = Router();

// add booking
router.post("/", authenticate, createBookingValidation, validate, bookingController.createBooking);

// get all can filter also
router.get("/", authenticate, bookingController.getAllBookings);

// get a booking by id
router.get("/:id", authenticate, bookingController.getBookingById);

// update a booking by id
router.put("/:id", authenticate, updateBookingValidation, validate, bookingController.updateBooking);

// delete a booking by id
router.delete("/:id", authenticate, bookingController.deleteBooking);

export default router;
