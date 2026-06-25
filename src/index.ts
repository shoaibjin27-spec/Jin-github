import express from 'express';
import dotenv from 'dotenv';
import { initializeLogger } from './utils/logger';
import { config } from './config/config';
import workflowRoutes from './routes/workflows';
import executionRoutes from './routes/executions';

dotenv.config();

const app = express();
const logger = initializeLogger();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', workflowRoutes);
app.use('/api', executionRoutes);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Error: ${err.message}`, { stack: err.stack });
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = config.agentPort || 3000;

app.listen(PORT, () => {
  logger.info(`n8n Agent started on port ${PORT}`);
  logger.info(`n8n API URL: ${config.n8nApiUrl}`);
});

export default app;
