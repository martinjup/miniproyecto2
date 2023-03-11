import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/Home/Home'
import {MovieDetails} from './views/MovieDetails/MovieDetails'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
