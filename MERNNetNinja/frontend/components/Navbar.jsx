import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
          <Link to='/' className="no-underline">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">
              Workout Buddy
            </h1>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar
