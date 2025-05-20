# Deployment Guide for Sentiment Analyzer

This guide explains how to deploy the Sentiment Analyzer application to Cloudflare using the custom domain ziqer.com.

## Prerequisites

1. A Cloudflare account ("By Sommer Account")
   - Email: i@setern.com
2. Domain (ziqer.com) added to your Cloudflare account
3. Cloudflare API token with appropriate permissions
4. GitHub repository at imsor1/sentiment-analyser

## Environment Variables

The following environment variables are required for deployment:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
- `CLOUDFLARE_EMAIL`: i@setern.com

For local development, copy the `.env.example` files to `.env` and fill in your API token and account ID.
**Important**: Never commit the actual API token to the repository.

## Automatic Deployment with GitHub Actions

This project is configured to automatically deploy to Cloudflare when changes are pushed to the main branch.

1. Add the following secrets to your GitHub repository:
   - `CF_API_TOKEN`: Your Cloudflare API token
   - `CF_ACCOUNT_ID`: Your Cloudflare account ID

2. Push changes to the main branch to trigger deployment.

## Manual Deployment

### Deploying the Backend (API)

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Deploy to Cloudflare Workers:
   ```
   CLOUDFLARE_API_TOKEN=your_token CLOUDFLARE_ACCOUNT_ID=your_account_id npm run deploy
   ```

4. After deployment, the API will be available at `https://api.ziqer.com`

### Deploying the Frontend

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Deploy to Cloudflare Pages:
   ```
   CLOUDFLARE_API_TOKEN=your_token CLOUDFLARE_ACCOUNT_ID=your_account_id npm run deploy
   ```

4. After deployment, the frontend will be available at `https://ziqer.com`

## DNS Configuration

Ensure the following DNS records are set up in your Cloudflare DNS dashboard:

1. For the frontend:
   - Type: CNAME
   - Name: ziqer.com
   - Target: (Your Cloudflare Pages domain, e.g., sentiment-analyzer.pages.dev)
   - Proxy status: Proxied

2. For the API:
   - Type: CNAME
   - Name: api.ziqer.com
   - Target: (Your Cloudflare Workers domain)
   - Proxy status: Proxied