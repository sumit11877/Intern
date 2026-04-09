import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./context/AuthContext.jsx"
import Todo from "./todo.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Todo />
    </AuthProvider>
  </StrictMode>,
)
