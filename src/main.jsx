import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <App />
    </Router>
  </>,
)
