import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center text-2xl font-black tracking-tighter text-indigo-600">
                RouterX
            </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to='/' className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition duration-300">Home</Link>
            <Link to='/About' className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition duration-300">About</Link>
            <Link to='/Product' className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition duration-300">Product</Link>
            <Link to='/Contact' className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition duration-300">Contact</Link>
            
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 active:scale-95 cursor-pointer">
              Get Started
            </button>
          </div>

        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
