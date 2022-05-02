import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import Login from './features/User/Login'
import Signup from './features/User/Signup'
import Dashboard from './features/User/Dashboard'
import { PrivateRoute } from './helpers/PrivateRoute'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <PrivateRoute exact component={Dashboard} path="/" />
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  )
}
export default App
