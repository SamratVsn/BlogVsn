import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const CLIENT_ID = "471182577607-6p1so5cqtu3nrosskt9nhqgekmi5vrd9.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
)
