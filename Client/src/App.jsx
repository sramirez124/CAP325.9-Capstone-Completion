import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path ="/Home/:id" element = {<Home />} />
          <Route path ="/signup" element = {<Signup />} />
          <Route path ="/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
