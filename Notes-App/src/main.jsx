import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllDataContextProvider from './contextApi/AllDataContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllDataContextProvider>
      <App />
    </AllDataContextProvider>
  </StrictMode>,
)
