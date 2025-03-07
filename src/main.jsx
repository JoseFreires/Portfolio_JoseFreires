import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'

import './styles/main.sass'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  </BrowserRouter>
)
