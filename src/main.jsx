import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConnections } from './firebase/config'
import './index.css'

firebaseConnections()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
