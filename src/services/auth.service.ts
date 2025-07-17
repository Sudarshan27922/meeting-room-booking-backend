import User from "../models/User";
import { hashPassword, comparePassword } from "../utils/hash";
import { RegisterInput, LoginInput } from "../types/user/user.input";
import { signAccessToken, signRefreshToken, verifyToken } from "../utils/token.service";

export const registerUser = async (input: RegisterInput) => {
    const existingUser = await User.findOne({ email: input.email });
    if (existingUser) throw new Error("Email already registered!");

    const hashedPassword = await hashPassword(input.password);
    const user = new User({ ...input, password: hashedPassword });
    await user.save();
    return user;
}

export const loginUser = async (input: LoginInput) => {
    const user = await User.findOne({ email: input.email });
    if (!user) throw new Error("Invalid email or password");

    const isValidPassword = await comparePassword(input.password, user.password);
    if (!isValidPassword) throw new Error("Invalid email or password");

    const accessToken = signAccessToken({ id: user._id, role: user.role });
    const refreshToken = signRefreshToken({ id: user._id });

    return { user, refreshToken, accessToken };
}