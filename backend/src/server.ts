import dotenv from 'dotenv';
import app from './app';
import { connectRedis } from './config/redis';

dotenv.config();

const port = process.env.PORT || 5000;

// Connect to Redis
connectRedis();

const server = app.listen(port, () => {
  console.log(`
    🚀 Server is running in ${process.env.NODE_ENV || 'development'} mode
    on port: ${port}
    URL: http://localhost:${port}
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: any) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
