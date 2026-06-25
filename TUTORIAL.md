# n8n Agent - Video Tutorial Guide

This guide provides a complete script and visuals for creating a video tutorial about the n8n Agent.

## Video Outline (10-15 minutes)

### **Scene 1: Introduction (1 min)**
- **Title**: "n8n Agent - Automate Your Workflows Programmatically"
- **Content**:
  - Show the n8n Agent GitHub repo
  - Quick overview of what it does
  - Why you need it

### **Scene 2: What is n8n Agent? (2 min)**
- Explain n8n platform
- Show what the agent does
- Demonstrate the architecture
- Show the API endpoints available

### **Scene 3: Installation (2 min)**
- Clone the repository
- Install dependencies
- Show file structure
- Explain key files

### **Scene 4: Configuration (1.5 min)**
- Create .env file
- Show configuration options
- Explain n8n API key setup
- Verify configuration

### **Scene 5: Running the Agent (1.5 min)**
- Start in development mode
- Show successful startup
- Verify health check
- Show logs

### **Scene 6: API Demo (4 min)**
- List workflows endpoint
- Get workflow details
- Execute a workflow with data
- Show execution results
- Check execution history

### **Scene 7: Real-World Example (2 min)**
- Create simple workflow in n8n
- Execute it via the agent
- Show the result
- Explain use cases

### **Scene 8: Conclusion (1 min)**
- Summary of capabilities
- Next steps
- Call to action

---

## Video Script

### **Scene 1: Introduction**

```
[VISUAL: Show GitHub repo opening]

"Welcome to the n8n Agent tutorial! 

In this video, we'll explore a powerful tool that lets you control 
your n8n workflows programmatically through a REST API.

Whether you're building automation pipelines, integrating with 
other services, or managing complex workflows, the n8n Agent 
makes it incredibly easy.

By the end of this video, you'll know how to:
- Install and configure the agent
- Execute workflows via API
- Monitor execution history
- Build your own automation solutions

Let's get started!"
```

### **Scene 2: What is n8n Agent?**

```
[VISUAL: Show n8n dashboard, then show agent diagram]

"The n8n Agent is a Node.js application that acts as a bridge 
between your applications and n8n workflows.

Instead of manually triggering workflows in n8n, you can now:

1. Execute workflows from any application
2. Pass data programmatically
3. Monitor execution history
4. Integrate with third-party services

It provides a clean REST API that's easy to use and integrate."

[VISUAL: Show API endpoints]

"The agent exposes several endpoints:
- GET /api/workflows - List all workflows
- GET /api/workflows/:id - Get workflow details
- POST /api/workflows/:id/execute - Run a workflow
- GET /api/executions/:id - Check execution history"
```

### **Scene 3: Installation**

```
[VISUAL: Terminal opening]

"Let's get started by installing the agent.

First, clone the repository:"

$ git clone https://github.com/shoaibjin27-spec/Jin-github.git
$ cd Jin-github

[VISUAL: Showing directory structure]

"Then switch to the n8n-agent branch:"

$ git checkout n8n-agent

[VISUAL: Files being listed]

"Install all dependencies:"

$ npm install

[VISUAL: Dependencies installing]

"The project includes:
- Express.js for the API server
- TypeScript for type safety
- Winston for logging
- Axios for HTTP requests
- Jest for testing"
```

### **Scene 4: Configuration**

```
[VISUAL: Terminal and .env file]

"Now let's configure the agent.

Copy the environment template:"

$ cp .env.example .env

[VISUAL: Opening .env file in editor]

"Edit the .env file with your settings.

Most importantly, you need your n8n API key."

[VISUAL: Show n8n dashboard → Settings → API]

"To get your API key:
1. Open your n8n dashboard
2. Go to Settings
3. Click API
4. Create a new API token
5. Copy it to your .env file"

[VISUAL: .env file with values]

N8N_API_URL=http://localhost:5678
N8N_API_KEY=your_api_key_here
AGENT_PORT=3000
NODE_ENV=development
LOG_LEVEL=info
```

### **Scene 5: Running the Agent**

```
[VISUAL: Terminal]

"Now let's start the agent.

For development, use:"

$ npm run dev

[VISUAL: Agent starting up]

"You should see:
✓ n8n Agent started on port 3000
✓ n8n API URL: http://localhost:5678"

[VISUAL: Testing health endpoint]

"Let's verify it's working by checking the health endpoint:"

$ curl http://localhost:3000/health

[VISUAL: Response shown]

{
  "status": "ok",
  "timestamp": "2026-06-25T14:30:00.000Z"
}

"Perfect! The agent is running and ready to use."
```

### **Scene 6: API Demo**

```
[VISUAL: Terminal with Postman/curl commands]

"Let's test the API endpoints.

First, list all workflows:"

$ curl http://localhost:3000/api/workflows

[VISUAL: Response with workflow list]

"Great! We can see all available workflows.

Now let's get details about a specific workflow:"

$ curl http://localhost:3000/api/workflows/1

[VISUAL: Workflow details shown]

"Now the exciting part - let's execute a workflow!

We'll call the execute endpoint with some data:"

$ curl -X POST http://localhost:3000/api/workflows/1/execute \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }'

[VISUAL: Execution result]

"The workflow executed successfully!

Let's check the execution history:"

$ curl http://localhost:3000/api/executions/1

[VISUAL: Execution history shown]

"You can see all past executions with their status and results."
```

### **Scene 7: Real-World Example**

```
[VISUAL: Split screen - n8n dashboard and terminal]

"Let's create a real-world example.

Imagine you have an n8n workflow that sends emails.

[VISUAL: Show simple n8n workflow with Email node]

We'll execute it via the agent:"

$ curl -X POST http://localhost:3000/api/workflows/send-email/execute \\
  -H "Content-Type: application/json" \\
  -d '{
    "data": {
      "to": "customer@example.com",
      "subject": "Order Confirmation",
      "body": "Your order has been confirmed!"
    }
  }'

[VISUAL: Workflow executing in n8n, API response shown]

"The email workflow executed instantly!

This is powerful because you can:
- Trigger workflows from your web application
- Send data from external services
- Automate complex business processes
- Integrate n8n with any platform"
```

### **Scene 8: Conclusion**

```
[VISUAL: Key takeaways on screen]

"Let's recap what we learned:

1. The n8n Agent provides a REST API for your workflows
2. It's easy to install and configure
3. You can execute workflows programmatically
4. You can monitor execution history
5. It integrates seamlessly with any application

With the n8n Agent, you have unlimited possibilities for automation.

Check out the GitHub repository for more examples and documentation."

[VISUAL: Show GitHub link]

https://github.com/shoaibjin27-spec/Jin-github/tree/n8n-agent

"Thanks for watching! Don't forget to like and subscribe for more automation tutorials!"
```

---

## Recording Tips

### **Before Recording**
1. Set up clean desktop with minimal clutter
2. Close unnecessary applications
3. Increase terminal font size for readability
4. Have n8n running before starting
5. Test audio and microphone
6. Use a consistent theme/background

### **Recording Software Options**
- **OBS Studio** (Free, Professional) - Recommended
- **ScreenFlow** (Mac)
- **Camtasia** (Paid, but user-friendly)
- **Loom** (Quick, cloud-based)

### **Recording Settings**
- **Resolution**: 1080p (1920x1080)
- **Frame Rate**: 30 fps or 60 fps
- **Audio**: 128 kbps or higher
- **Screen Recording**: Show cursor with highlight

### **Audio Tips**
- Use external microphone
- Record in quiet room
- Speak clearly and slowly
- Add background music (royalty-free)
- Add subtle sound effects for transitions

### **B-Roll Ideas**
- Code editor showing project structure
- Terminal output and commands
- n8n dashboard screenshots
- API response examples
- GitHub repository
- Architecture diagrams

---

## Post-Production

### **Editing**
1. Cut unnecessary pauses
2. Add transitions between scenes
3. Add text overlays for key points
4. Insert code snippets/commands on screen
5. Add background music

### **Title & Graphics**
- Create custom title card
- Add channel logo/watermark
- Use consistent color scheme
- Add lower thirds for different sections
- Create intro/outro

### **Subtitles**
- Auto-generate and review
- Correct technical terms
- Time subtitles properly
- Use consistent font

### **Thumbnail**
- Create eye-catching thumbnail
- Include n8n or automation-related graphics
- Use bold, readable text
- Maintain consistency with other videos

---

## YouTube Metadata

### **Title**
"n8n Agent: Automate Your Workflows with REST API | Complete Tutorial"

### **Description**
```
Learn how to use the n8n Agent to control your n8n workflows programmatically!

In this comprehensive tutorial, we'll cover:
✓ Installation and setup
✓ Configuration and API keys
✓ Running the agent
✓ Using all API endpoints
✓ Real-world examples
✓ Best practices

GitHub Repository:
https://github.com/shoaibjin27-spec/Jin-github/tree/n8n-agent

Timestamps:
0:00 - Introduction
1:00 - What is n8n Agent?
3:00 - Installation
5:30 - Configuration
7:00 - Running the Agent
8:30 - API Demo
12:30 - Real-World Example
14:30 - Conclusion

Tags: #n8n #automation #api #nodejs #tutorial
```

### **Tags**
- n8n
- automation
- api
- nodejs
- workflow automation
- rest api
- tutorial
- programming

### **Category**
- Technology or Science & Technology

---

## Distribution Channels

1. **YouTube** - Main platform
2. **GitHub** - Link to video in README
3. **LinkedIn** - Share with professional audience
4. **Twitter** - Promote with highlights
5. **Dev.to** - Write companion blog post
6. **Medium** - Detailed write-up

---

## Companion Blog Post Structure

```markdown
# Getting Started with n8n Agent: A Complete Guide

## Introduction
## Installation Steps
## Configuration
## Running the Agent
## API Endpoints Explained
## Real-World Examples
## Best Practices
## Conclusion
## Resources & Links
```

This guide provides everything you need to create a professional video tutorial!
