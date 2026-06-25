# n8n Agent

A powerful automation agent for n8n that enables intelligent workflow orchestration and execution through an API.

## Features

- 🚀 Real-time workflow execution
- 📊 Workflow monitoring and management
- 🔄 Trigger and manage workflows remotely
- 📝 Comprehensive logging and error handling
- 🔐 API key authentication
- 🌐 REST API interface
- ⏰ Scheduled workflow execution
- 🔗 Webhook support

## Prerequisites

- Node.js 16+ 
- npm or yarn
- n8n instance running (local or remote)
- n8n API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shoaibjin27-spec/Jin-github.git
cd Jin-github
```

2. Switch to the n8n-agent branch:
```bash
git checkout n8n-agent
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

5. Configure your environment variables:
```env
N8N_API_URL=http://localhost:5678
N8N_API_KEY=your_actual_api_key
AGENT_PORT=3000
```

## Getting Started

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
```
GET /health
```

### List Workflows
```
GET /api/workflows
```

### Execute Workflow
```
POST /api/workflows/:workflowId/execute
Body: { "data": {...} }
```

### Get Workflow Status
```
GET /api/workflows/:workflowId/status
```

### Get Execution History
```
GET /api/executions/:workflowId
```

## Configuration

Edit `.env` file to configure:
- `N8N_API_URL`: Your n8n instance URL
- `N8N_API_KEY`: Your n8n API key
- `AGENT_PORT`: Port for the agent server
- `LOG_LEVEL`: Logging level (info, debug, error)

## Project Structure

```
src/
├── index.ts           # Entry point
├── config/            # Configuration files
├── controllers/       # API controllers
├── services/          # Business logic
├── models/            # Data models
├── utils/             # Utility functions
└── types/             # TypeScript types
```

## Usage Examples

### Execute a Workflow

```typescript
const response = await fetch('http://localhost:3000/api/workflows/123/execute', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    data: {
      name: 'John',
      email: 'john@example.com'
    }
  })
});

const result = await response.json();
console.log(result);
```

## Logging

The agent uses Winston for logging. Logs are written to:
- Console (all levels)
- `logs/error.log` (errors only)
- `logs/combined.log` (all logs)

## Error Handling

The agent includes comprehensive error handling with:
- Validation errors
- Authentication errors
- Workflow execution errors
- Network errors

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues, feature requests, or questions, please open an issue on GitHub.

## Resources

- [n8n Documentation](https://docs.n8n.io/)
- [n8n API Documentation](https://docs.n8n.io/api/)
- [n8n Community](https://community.n8n.io/)
