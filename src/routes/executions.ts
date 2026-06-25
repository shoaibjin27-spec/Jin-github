import express from 'express';
import n8nService from '../services/n8nService';
import { getLogger } from '../utils/logger';

const router = express.Router();
const logger = getLogger();

// GET /api/executions/:workflowId
router.get('/executions/:workflowId', async (req, res, next) => {
  try {
    const executions = await n8nService.getExecutions(req.params.workflowId);
    res.json({
      success: true,
      data: executions,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error(`Error fetching executions for workflow ${req.params.workflowId}`, { error });
    next(error);
  }
});

// GET /api/executions/detail/:executionId
router.get('/executions/detail/:executionId', async (req, res, next) => {
  try {
    const execution = await n8nService.getExecutionById(req.params.executionId);
    res.json({
      success: true,
      data: execution,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error(`Error fetching execution ${req.params.executionId}`, { error });
    next(error);
  }
});

export default router;
