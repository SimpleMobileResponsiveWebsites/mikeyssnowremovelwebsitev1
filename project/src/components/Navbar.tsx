import React from 'react';
import { Snowflake, Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Snowflake className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Mikey's Snow Removal</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <a href="tel:+16125555555" className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition">
              <Phone className="h-4 w-4 mr-2" />
              (612) 555-5555
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}