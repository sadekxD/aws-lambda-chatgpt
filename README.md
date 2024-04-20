# Joke Generator API

This repository contains an AWS Lambda function that generates a joke about a specified subject using OpenAI's GPT-3.5 Turbo model and sends the joke via email using the `resend` email service. The Lambda function is triggered via API Gateway.

## Requirements

- AWS Lambda
- API Gateway
- Node.js (v14.x or later recommended)
- OpenAI Node.js SDK
- Resend

## Setup Instructions

### Step 1: AWS Configuration

1. **Create an API Gateway**: Setup an API Gateway to trigger the Lambda function. Configure the method (POST) and integration request to correctly pass the payload to Lambda.
   
2. **Create a Lambda Function**: Deploy this function in AWS Lambda.
   - Ensure the runtime is set to Node.js 14.x or later.
   - Increase the timeout to at least 30 seconds to accommodate potential latency in API responses.

### Step 2: Environment Variables

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourgithubusername/joke-generator-api.git
   cd joke-generator-api

### Step 2: Prepare Environment File
Copy the .env.example file to a new file named .env.
```bash
OPENAI_KEY=your_openai_api_key_here
RESEND_API_KEY=your_resend_api_key_here
