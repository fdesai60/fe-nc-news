import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UsernameProvider from './contexts/UsernameProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UsernameProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </UsernameProvider>
)
