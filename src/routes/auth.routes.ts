import { Router } from "express";
import { register, login, refreshAccessToken } from "../controllers/auth.controller";
import validate from '../utils/validate';
import { registerValidation, loginValidation } from '../validators/authValidator';
import { loginRateLimiter } from "../middlewares/rateLimit";

const router = Router();

router.post('/register', registerValidation, validate, register);
router.post('/login', loginRateLimiter, loginValidation, validate, login);
router.post('/refresh-token', refreshAccessToken);
//router.get('/dashboard', authenticate, dashboardHandler);

export default router;
