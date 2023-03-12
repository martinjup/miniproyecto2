import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './views/Home/Home'
import { Register } from './views/Register/Register'
import {MovieDetails} from './views/MovieDetails/MovieDetails'
import {MoviesList} from './views/MovieList/MovieList'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />}/>
        <Route exact path="/moviesList" element={<MoviesList />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
