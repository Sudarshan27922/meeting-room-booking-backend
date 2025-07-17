import { body, ValidationChain } from "express-validator";

export const createRoomValidation: ValidationChain[] = [
  body('name').notEmpty().withMessage('Room name is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('capacity').isInt({ min: 1 }).withMessage('Capacity must be a positive number'),
  body('isAC').optional().isBoolean().withMessage('isAC must be a boolean'),
  body('amenities').optional().isArray().withMessage('Amenities must be an array'),
];

export const updateRoomValidation: ValidationChain[] = [
  body('name').optional().notEmpty().withMessage('Room name cannot be empty'),
  body('location').optional().notEmpty().withMessage('Location cannot be empty'),
  body('capacity').optional().isInt({ min: 1 }).withMessage('Capacity must be a positive number'),
  body('isAC').optional().isBoolean().withMessage('isAC must be a boolean'),
  body('amenities').optional().isArray().withMessage('Amenities must be an array'),
];
