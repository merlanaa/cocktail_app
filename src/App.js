import React from 'react'
import {  BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './pages/Home'

import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'


function App() {
  return (
    <>
  <Routes>
    <Route path={'/'} element={<Home/>} />
    <Route path={'/cocktail/:id'} element={<SingleCocktail/>} />
    <Route path={'*'} element={<Error/>} />
    </Routes>
    </>
   
  )
}

export default App
