import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Toggle from './Components/Toggle'
import useLocalStorage from 'use-local-storage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [theme, setTheme] = useLocalStorage(false);
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
