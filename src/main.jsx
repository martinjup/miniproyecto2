import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/Home/Home'
import { Register } from './views/Register/Register'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
