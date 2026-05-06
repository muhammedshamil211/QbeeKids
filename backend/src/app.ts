import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware';
import { apiLimiter } from './middleware/rateLimitMiddleware';
import logger from './config/logger';

// Routes
import userRoutes from './routes/userRoutes';

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(apiLimiter);

// Logging Middleware
app.use(morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim()),
  },
}));

// Body Parsing Middleware
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// API Routes
app.use('/api/v1/users', userRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({ message: 'Qbee Kids Enterprise API is running...' });
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
