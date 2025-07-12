import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ObjProvider } from './ObjContext.jsx'

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <ObjProvider>
      <App />
    </ObjProvider>
  </StrictMode>,
)
