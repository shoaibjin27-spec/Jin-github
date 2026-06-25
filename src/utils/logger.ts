import winston from 'winston';
import { config } from '../config/config';

let logger: winston.Logger;

export const initializeLogger = (): winston.Logger => {
  if (logger) return logger;

  logger = winston.createLogger({
    level: config.logLevel,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json()
    ),
    defaultMeta: { service: 'n8n-agent' },
    transports: [
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ]
  });

  if (config.nodeEnv !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      )
    }));
  }

  return logger;
};

export const getLogger = (): winston.Logger => {
  if (!logger) {
    initializeLogger();
  }
  return logger;
};
