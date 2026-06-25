export const config = {
  n8nApiUrl: process.env.N8N_API_URL || 'http://localhost:5678',
  n8nApiKey: process.env.N8N_API_KEY || '',
  agentPort: parseInt(process.env.AGENT_PORT || '3000'),
  nodeEnv: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info',
  webhookBaseUrl: process.env.WEBHOOK_BASE_URL || 'http://localhost:3000',
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    name: process.env.DB_NAME || 'n8n_agent',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password'
  }
};
