import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Logo from '../assets/image.png'

const Footer = () => {
    return (
        <footer className="bg-[#1A1A22] text-white pt-10 pb-6 px-6 m-auto lg:px-24 mt-20 relative w-full lg:w-4/5 rounded-tl-[40px] rounded-tr-[40px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">

                {/* Logo and Links */}
                <div className="space-y-4 lg:space-y-0 lg:flex  items-center justify-center lg:justify-between w-full lg:space-x-10">
                    <img src={Logo} className='h-6 lg:ml-0 ml-16' alt="" /> <br />
                    <nav className="flex lg:flex-row flex-col items-center justify-center lg:space-x-6 text-lg lg:text-base">
                        <a href="#" className="hover:underline">About us</a>
                        <a href="#" className="hover:underline">Services</a>
                        <a href="#" className="hover:underline">Use Cases</a>
                        <a href="#" className="hover:underline">Pricing</a>
                        <a href="#" className="hover:underline">Blog</a>
                    </nav>
                    <br />
                    <div className="flex items-center justify-center space-x-4 text-2xl">
                        <a href="#" aria-label="LinkedIn" className="text-white hover:text-white"><FaLinkedin /></a>
                        <a href="#" aria-label="Twitter" className="text-white hover:text-white"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook" className="text-white hover:text-white"><FaFacebook /></a>
                    </div>
                </div>

                {/* Social Media Icons */}

            </div>

            <div className="mt-16 grid grid-cols-1  lg:grid-cols-2 gap-10">
                {/* Contact Info */}
                <div className='flex flex-col items-center lg:items-start'>
                    <h3 className="bg-[#B9FF66] w-full lg:w-1/4 text-black rounded-xl p-2 inline-block mb-4 text-sm font-semibold">
                        Contact us:
                    </h3>
                    <p>Email: info@positivus.com</p> <br />
                    <p>Phone: 555-567-8901</p> <br />
                    <p>Address: 1234 Main St,<br /> Moonstone City, Stardust State 12345</p>
                </div>

                {/* Subscription Box */}
                <div className="bg-[#2C2C36] rounded-xl p-3 lg:p-5 flex items-center flex-col lg:flex-row  ">
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex-grow p-2 py-3 rounded-xl w-full lg:w-1/3 bg-[#1A1A22] border border-white text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="bg-[#B9FF66] text-black font-semibold rounded-xl  lg:w-1/3 p-2 py-3 mt-2 lg:mt-0 lg:ml-4">
                        Subscribe to news
                    </button>
                </div>
            </div>
            <br />
            <hr className="my-6 border-white" />

            <div className="flex flex-col lg:flex-row justify-between text-sm text-gray-400 space-y-4 lg:space-y-0">
                <p>© 2023 Positivus. All Rights Reserved.</p>
                <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
