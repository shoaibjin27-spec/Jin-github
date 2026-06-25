import express from 'express';
import n8nService from '../services/n8nService';
import { getLogger } from '../utils/logger';

const router = express.Router();
const logger = getLogger();

// GET /api/workflows
router.get('/workflows', async (req, res, next) => {
  try {
    const workflows = await n8nService.getWorkflows();
    res.json({
      success: true,
      data: workflows,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Error fetching workflows', { error });
    next(error);
  }
});

// GET /api/workflows/:id
router.get('/workflows/:id', async (req, res, next) => {
  try {
    const workflow = await n8nService.getWorkflowById(req.params.id);
    res.json({
      success: true,
      data: workflow,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error(`Error fetching workflow ${req.params.id}`, { error });
    next(error);
  }
});

// POST /api/workflows/:id/execute
router.post('/workflows/:id/execute', async (req, res, next) => {
  try {
    const result = await n8nService.executeWorkflow(req.params.id, req.body.data);
    res.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error(`Error executing workflow ${req.params.id}`, { error });
    next(error);
  }
});

export default router;
