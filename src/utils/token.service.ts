import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_EXPIRES_IN = '15m';
const REFRESH_TOKEN_EXPIRES_IN = '7d';

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: ACCESS_TOKEN_EXPIRES_IN });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: REFRESH_TOKEN_EXPIRES_IN });

export const verifyToken = (token: string, secret = process.env.JWT_SECRET!) =>
  jwt.verify(token, secret);
