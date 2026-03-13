import React from 'react'

function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
      <span className="font-semibold text-gray-900 text-lg">MyApp</span>
      <div className="flex items-center gap-6">
        <a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
        <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
        <a href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
        <a href="/contact" className="text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-1.5 rounded-md font-medium transition-colors">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Nav