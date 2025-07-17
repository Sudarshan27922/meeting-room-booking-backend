import mongoose from "mongoose";
import logger from '../utils/logger'

const connectDB = async (): Promise<void> => {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
        logger.error('MONGODB_URI is missing in environment config.');
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(mongoURI);
        logger.info(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
    } catch (error: any) {
        logger.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;