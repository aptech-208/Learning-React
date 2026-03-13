import React from 'react'

function Foot() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold text-gray-900">MyApp</span>
        <div className="flex gap-6">
          <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy</a>
          <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms</a>
          <a href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <p className="text-sm text-gray-400">© 2026 MyApp. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Foot