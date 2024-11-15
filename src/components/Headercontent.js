import React from 'react';
import Headerimg from '../assets/header.png';


const Headercontent = () => {
    return (
        <div className="Headercontent bg-white mt-10 flex flex-col md:flex-row items-center justify-between max-w-[80%] mx-auto">
            {/* Main Content */}
            <div className="left md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-14">
                    Navigating the digital landscape for success
                </h1>

                <div className="w-full md:hidden mb-8">
                    <img
                        src={Headerimg}
                        alt="Digital Marketing"
                        className="w-full object-cover rounded-lg"
                    />
                </div>

                <h3 className="text-lg md:text-xl text-gray-600 leading-relaxed mb-14 max-w-md">
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </h3>

                <button className="bg-black text-white w-full sm:w-[35%] text-lg font-medium py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors">
                    Book a consultation
                </button>
            </div>

            {/* Image for Larger Screens */}
            <div className="right md:w-1/2 hidden md:flex justify-center">
                <img
                    src={Headerimg}
                    alt="Digital Marketing"
                    className="w-10/12 object-cover rounded-lg"
                />
            </div>

            {/* Company Logo Slider */}
        </div>
    );
};

export default Headercontent;
