import { createLogger, transports, format, Logger } from "winston";

const fileFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
);

const consoleFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message }) => `${level}: ${message}`)
);

const logger: Logger = createLogger({
  level: 'info', // default logging level if we do not specified a level
  format: fileFormat,
  transports: [
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({ format: consoleFormat }));
}

export default logger;