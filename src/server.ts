import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import connectDB from './config/db';
import logger from './utils/logger';
import { setupSwaggerDocs } from './docs/swagger';

const PORT = process.env.PORT || 5000;

const startServer = async (): Promise<void> => {
  try {
    await connectDB(); // Connect to MongoDB
    logger.info("Connected to MongoDB");

    setupSwaggerDocs(app);

    app.listen(PORT, () => {
      logger.info(`Server started on http://localhost:${PORT}`);
      logger.info(`Swagger docs available at http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
