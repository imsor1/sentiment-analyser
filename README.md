# Sentiment Analyzer

A web application that analyzes the sentiment of text using a Vite + React frontend and a Hono + Cloudflare Workers backend.

## Domain Configuration

- Frontend: [ziqer.com](https://ziqer.com)
- API: [api.ziqer.com](https://api.ziqer.com)

## Project Structure

```
sentiment-analyzer/
├── client/  # Vite + React frontend
├── server/  # Hono + Cloudflare Workers backend
└── README.md
```

## Getting Started

### Environment Setup

1. Copy the example environment files:
   ```
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

2. Update the `.env` files with your Cloudflare API token and account ID.
   Note: The actual API token should never be committed to the repository.

### Frontend (client)

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

### Backend (server)

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Features

- Text sentiment analysis
- Real-time feedback
- Responsive design

## Technologies Used

- **Frontend**: Vite, React, TypeScript
- **Backend**: Hono, Cloudflare Workers, sentiment.js
- **Deployment**: Cloudflare Pages (frontend), Cloudflare Workers (backend)

## Deployment

This project is automatically deployed to Cloudflare using GitHub Actions. The deployment is managed by the "By Sommer Account" Cloudflare account.

## Repository

This project is maintained by the [imsor1](https://github.com/imsor1) organization on GitHub.
Repository: [imsor1/sentiment-analyser](https://github.com/imsor1/sentiment-analyser)