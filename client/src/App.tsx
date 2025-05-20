import { useState } from 'react'
import axios from 'axios'
import './App.css'

// Define the response type from the sentiment API
interface SentimentResponse {
  text: string
  score: number
  comparative: number
  positive: string[]
  negative: string[]
}

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<SentimentResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      // Use the environment variables for API URL
      const apiUrl = import.meta.env.VITE_API_URL 
        ? `${import.meta.env.VITE_API_URL}/analyze`
        : 'http://localhost:8787/analyze'
      const response = await axios.post(apiUrl, { text })
      setResult(response.data)
    } catch (err) {
      setError('Failed to analyze text. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getSentimentClass = () => {
    if (!result) return ''
    if (result.score > 0) return 'positive'
    if (result.score < 0) return 'negative'
    return 'neutral'
  }

  const getSentimentText = () => {
    if (!result) return ''
    if (result.score > 0) return 'Positive'
    if (result.score < 0) return 'Negative'
    return 'Neutral'
  }

  return (
    <div className="container">
      <h1>Sentiment Analyzer</h1>
      <div className="card">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to analyze sentiment..."
          rows={5}
        />
        <button onClick={analyzeSentiment} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Sentiment'}
        </button>
        
        {error && <p className="error">{error}</p>}
        
        {result && (
          <div className="result">
            <h2>Analysis Result</h2>
            <p>
              Sentiment: <span className={getSentimentClass()}>{getSentimentText()}</span>
            </p>
            <p>Score: {result.score}</p>
            <p>Comparative Score: {result.comparative.toFixed(2)}</p>
            {result.positive.length > 0 && (
              <div>
                <p>Positive words:</p>
                <p>{result.positive.join(', ')}</p>
              </div>
            )}
            {result.negative.length > 0 && (
              <div>
                <p>Negative words:</p>
                <p>{result.negative.join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} <a href="https://ziqer.com">ziqer.com</a></p>
      </footer>
    </div>
  )
}

export default App