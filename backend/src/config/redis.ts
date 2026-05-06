import { createClient } from 'redis';
import logger from './logger';

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

redisClient.on('error', (err) => {
  // Log the error but don't crash the app
  logger.warn('Redis Client Error: Could not connect to Redis. Some features like caching and OTP may not work.');
  logger.debug(err);
});

redisClient.on('connect', () => logger.info('Redis Client Connected'));

const connectRedis = async () => {
  try {
    await redisClient.connect();
    logger.info('Successfully connected to Redis');
  } catch (error) {
    logger.error('Failed to connect to Redis on startup. Continuing without Redis...');
  }
};

export { redisClient, connectRedis };
