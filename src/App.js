import React from 'react'
import './App.css'


// Rounting 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';



export default function App() {
  return (
    <div>
        <Router>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} /> 
              </Routes>
            </Router>
    </div>
  )
}
