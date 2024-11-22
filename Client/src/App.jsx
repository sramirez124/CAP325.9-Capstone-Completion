import { useState } from 'react'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/Home/:id" element = {<Home />} />
          <Route path ="/signup" element = {<Signup />} />
          <Route path ="/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
