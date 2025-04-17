import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Landing from './Landing.jsx'
import Signup from './Signup.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/signup" element = {<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
