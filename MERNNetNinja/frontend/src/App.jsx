import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="sticky top-0 z-50 shadow-md bg-white">
        <Navbar />
      </div>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

// netninja vid 11 start

export default App
