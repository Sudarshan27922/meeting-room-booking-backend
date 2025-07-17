import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { signAccessToken, verifyToken } from "../utils/token.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, message: "User registered", data: user });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { user, refreshToken, accessToken } = await loginUser(req.body);

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: { user, accessToken },
    });
  } catch (err: any) {
    res.status(401).json({ success: false, message: err.message });
  }
};

export const refreshAccessToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies.refresh_token;
    if (!token) {
      res.status(401).json({ message: "No refresh token" });
      return;
    }

    const payload = verifyToken(token, process.env.JWT_REFRESH_SECRET!);
    const accessToken = signAccessToken({ id: (payload as any).id });

    res.status(200).json({ success: true, accessToken });
  } catch (err: any) {
    res.status(403).json({ success: false, message: "Invalid refresh token" });
  }
};