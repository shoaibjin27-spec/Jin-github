import axios, { AxiosInstance } from 'axios';
import { config } from '../config/config';
import { getLogger } from '../utils/logger';

class N8nService {
  private client: AxiosInstance;
  private logger = getLogger();

  constructor() {
    this.client = axios.create({
      baseURL: config.n8nApiUrl,
      headers: {
        'X-N8N-API-KEY': config.n8nApiKey,
        'Content-Type': 'application/json'
      }
    });
  }

  async getWorkflows() {
    try {
      this.logger.info('Fetching workflows from n8n');
      const response = await this.client.get('/api/v1/workflows');
      return response.data;
    } catch (error) {
      this.logger.error('Failed to fetch workflows', { error });
      throw error;
    }
  }

  async getWorkflowById(workflowId: string) {
    try {
      this.logger.info(`Fetching workflow: ${workflowId}`);
      const response = await this.client.get(`/api/v1/workflows/${workflowId}`);
      return response.data;
    } catch (error) {
      this.logger.error(`Failed to fetch workflow ${workflowId}`, { error });
      throw error;
    }
  }

  async executeWorkflow(workflowId: string, data?: any) {
    try {
      this.logger.info(`Executing workflow: ${workflowId}`);
      const response = await this.client.post(`/api/v1/workflows/${workflowId}/execute`, {
        data: data || {}
      });
      return response.data;
    } catch (error) {
      this.logger.error(`Failed to execute workflow ${workflowId}`, { error });
      throw error;
    }
  }

  async getExecutions(workflowId: string) {
    try {
      this.logger.info(`Fetching executions for workflow: ${workflowId}`);
      const response = await this.client.get(`/api/v1/executions?filter=${JSON.stringify({ workflowId })}`);
      return response.data;
    } catch (error) {
      this.logger.error(`Failed to fetch executions for workflow ${workflowId}`, { error });
      throw error;
    }
  }

  async getExecutionById(executionId: string) {
    try {
      this.logger.info(`Fetching execution: ${executionId}`);
      const response = await this.client.get(`/api/v1/executions/${executionId}`);
      return response.data;
    } catch (error) {
      this.logger.error(`Failed to fetch execution ${executionId}`, { error });
      throw error;
    }
  }
}

export default new N8nService();
