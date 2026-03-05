import { useState } from 'react'
import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {
  

  return (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={
          <ProtectedRoute isAuthenticated={true}>
            <Dashboard />
          </ProtectedRoute>
        
        } />

      {/* Add protected routes here */}
    </Routes>

  </>
  )
}

export default App;
