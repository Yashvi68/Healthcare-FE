import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { RoutesData } from './routes/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <RouterProvider router={RoutesData} />
    
  </StrictMode>,
)
