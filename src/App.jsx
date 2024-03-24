import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home'
import MCQ from './pages/MCQ'
function App() {
  return (
    <>
    <BrowserRouter>
      <div style={{display:'flex',justifyContent:"center" ,alignItems:"center", flexDirection:'column'}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mcq' element={<MCQ/>}/>      
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
