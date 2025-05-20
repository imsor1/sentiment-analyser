import { Hono } from 'hono';
import { cors } from 'hono/cors';
import * as sentiment from 'sentiment';

const app = new Hono();

// Enable CORS
app.use('*', cors({
  origin: '*',
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  allowHeaders: ['Content-Type'],
  exposeHeaders: ['Content-Length'],
  maxAge: 600,
}));

// Health check endpoint
app.get('/', (c) => {
  return c.json({ 
    status: 'ok', 
    message: 'Sentiment Analysis API is running',
    version: '1.0.0',
    endpoints: {
      analyze: '/analyze - POST - Analyze text sentiment'
    }
  });
});

// Sentiment analysis endpoint
app.post('/analyze', async (c) => {
  try {
    const { text } = await c.req.json<{ text: string }>();
    
    if (!text) {
      return c.json({ error: 'Text is required' }, 400);
    }

    const analyzer = new sentiment();
    const result = analyzer.analyze(text);

    return c.json({
      text,
      score: result.score,
      comparative: result.comparative,
      positive: result.positive,
      negative: result.negative
    });
  } catch (error) {
    console.error('Error analyzing text:', error);
    return c.json({ error: 'Failed to analyze text' }, 500);
  }
});

export default app;