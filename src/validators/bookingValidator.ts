import { body, ValidationChain } from "express-validator";

export const createBookingValidation: ValidationChain[] = [
  body("user").notEmpty().withMessage("User is required"),
  body("room").notEmpty().withMessage("Room is required"),
  body("title").notEmpty().withMessage("Title is required"),
  body("startDateTime").notEmpty().isISO8601().toDate().withMessage("Valid start date/time required"),
  body("endDateTime").notEmpty().isISO8601().toDate().withMessage("Valid end date/time required"),
  body("guests").isInt({ min: 1 }).withMessage("Guests must be a positive number"),
  body("recurrenceRule").optional().isString().withMessage("RecurrenceRule must be a string"),
  body("recurrenceEndDate").optional().isISO8601().toDate().withMessage("Recurrence end date must be valid"),
  body("amenities").optional().isArray().withMessage("Amenities must be an array of strings"),
];

export const updateBookingValidation: ValidationChain[] = [
  body("title").optional().notEmpty().withMessage("Title cannot be empty"),
  body("startDateTime").optional().isISO8601().toDate().withMessage("Start date must be valid"),
  body("endDateTime").optional().isISO8601().toDate().withMessage("End date must be valid"),
  body("guests").optional().isInt({ min: 1 }).withMessage("Guests must be a positive number"),
  body("recurrenceRule").optional().isString().withMessage("RecurrenceRule must be a string"),
  body("recurrenceEndDate").optional().isISO8601().toDate().withMessage("Recurrence end date must be valid"),
  body("amenities").optional().isArray().withMessage("Amenities must be an array of strings"),
];
