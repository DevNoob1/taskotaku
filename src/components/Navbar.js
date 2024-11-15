import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white pt-8 pb-2 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={Logo} alt="Logo"
                            className="h-10  object-contain"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center space-x-6">
                        <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">
                            About us
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-500 font-medium">
                            Services
                        </a>
                        <a href="#services" className="text-gray-700 hover:text-blue-500 font-medium">
                            Use Cases
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">
                            Pricing
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">
                            Blog
                        </a>
                        <button className=' p-3 border-black border-2 rounded-xl'>
                            Request a quote
                        </button>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-4 pt-2 pb-3 flex flex-col gap-3 space-y-1 bg-white bg-opacity-80 backdrop-blur-md">
                        <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">
                            About us
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-500 font-medium">
                            Services
                        </a>
                        <a href="#services" className="text-gray-700 hover:text-blue-500 font-medium">
                            Use Cases
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">
                            Pricing
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">
                            Blog
                        </a>
                        <button className=' p-3 border-black border-2 rounded-xl'>
                            Request a quote
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
