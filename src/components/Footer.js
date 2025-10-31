import React from 'react'
import logo from '../assets/logo.webp'
// Example: using react-icons for convenience
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="bg-[#0074e4] text-white montserrat py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <img src={logo} alt="Company Logo" className="h-10 w-auto mr-3" />
          </div>
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
            <a href="#home" className="hover:text-yellow-200 transition">Home</a>
            <a href="#about" className="hover:text-yellow-200 transition">About Us</a>
            <a href="#services" className="hover:text-yellow-200 transition">Services</a>
            <a href="#products" className="hover:text-yellow-200 transition">Products</a>
            <a href="#careers" className="hover:text-yellow-200 transition">Careers</a>
            <a href="#contact" className="hover:text-yellow-200 font-bold transition">Contact Us</a>
          </div>
          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-end">
            <span className="mb-2 font-medium text-center md:text-right">
              Contact:{" "}
              <span className="font-bold text-yellow-300 underline">isnnetworkpvtltd@gmail.com</span>
            </span>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.facebook.com/profile.php?id=61583247412146" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/israelitesshoppingnetwork" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/israelites-shopping-network-400386395" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="https://x.com/IsraelitesISN" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
                <FaXTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white mt-6 pt-4 text-center text-sm">
          © 2025 ISRAELITES. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
