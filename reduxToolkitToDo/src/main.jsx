import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='justify-center items-center h-screen flex bg-black'>
    <App />
    </div>
  </StrictMode>,
)
