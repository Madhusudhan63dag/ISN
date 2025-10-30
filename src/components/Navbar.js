import React, { useState } from 'react'
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0074e4] shadow-lg montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-12 w-auto" src={logo} alt="Company Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-white font-medium hover:text-yellow-200 transition">Home</a>
            <a href="#about" className="text-white font-medium hover:text-yellow-200 transition">About Us</a>
            <a href="#services" className="text-white font-medium hover:text-yellow-200 transition">Services</a>
            <a href="#products" className="text-white font-medium hover:text-yellow-200 transition">Products</a>
            <a href="#careers" className="text-white font-medium hover:text-yellow-200 transition">Careers</a>
            {/* Contact Us styled as strong link */}
            <a 
              href="#contact"
              className="ml-4 font-bold text-yellow-300 hover:text-white transition text-lg"
              style={{letterSpacing: '0.02em'}}
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0074e4] rounded-b shadow-lg px-6 py-4 mt-1 space-y-2">
            <a href="#home" className="block text-white font-medium py-1">Home</a>
            <a href="#about" className="block text-white font-medium py-1">About Us</a>
            <a href="#services" className="block text-white font-medium py-1">Services</a>
            <a href="#products" className="block text-white font-medium py-1">Products</a>
            <a href="#careers" className="block text-white font-medium py-1">Careers</a>
            <a 
              href="#contact"
              className="block font-bold text-yellow-300 py-2 text-lg"
              style={{letterSpacing: '0.02em'}}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
