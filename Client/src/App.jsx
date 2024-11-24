import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Toggle from './Toggle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="App" data-theme={theme ? 'dark' : 'light'}>
      <Toggle
        isChecked={theme}
        handleChange={() => setTheme(!theme)}
       />
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
