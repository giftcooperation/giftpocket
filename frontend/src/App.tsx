import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
//import Login from './features/User/Login'
import Signup from './features/User/Signup'
//import Dashboard from './features/User/Dashboard'
//import { PrivateRoute } from './helpers/PrivateRoute'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<Login />} path="/login" /> */}
          <Route element={<Signup />} path="/signup" />
          {/* <PrivateRoute exact component={Dashboard} path="/" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
