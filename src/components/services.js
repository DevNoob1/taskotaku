import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import box1 from '../assets/box1.png'; // Replace with your actual image path
import box2 from '../assets/box2.png'; // Replace with your actual image path

const Services = () => {
    return (
        <div className="services flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-10 mx-auto max-w-[95%] lg:max-w-[90%]">
            {/* Box 1 */}
            <div className="box bg-[#F3F3F3] shadow-2xl shadow-black p-4 lg:p-6 border-[1px] border-black rounded-[20px] lg:rounded-[30px] flex w-full lg:w-2/5 h-52 lg:h-60 items-center">
                {/* Left Section */}
                <div className="text-section pt-4 w-1/2 flex flex-col justify-between gap-10 lg:gap-14">
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold bg-[#B9FF66] p-1 lg:p-2 w-4/5 text-gray-800 leading-none mb-1 lg:mb-2">Search engine</h2>
                        <h3 className="text-xl lg:text-2xl font-bold bg-[#B9FF66] p-1 lg:p-2 mt-[-8px] lg:mt-[-10px] lg:w-2/3 text-gray-800 leading-none mb-3 lg:mb-4">Optimization</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-black p-1 lg:p-2 rounded-full">
                            <FaArrowUp className={`rotate-45 text-[#B9FF66] size={14} lg:size={16} `} />
                        </div>
                        <span className="text-gray-600 text-sm lg:text-lg font-semibold">Learn more</span>
                    </div>
                </div>
                {/* Right Section (Image) */}
                <div className="image-section w-1/2 flex justify-center">
                    <img src={box1} alt="Service" className="h-24 lg:h-32 object-cover rounded-lg" />
                </div>
            </div>

            {/* Box 2 (Similar to Box 1) */}
            <div className="box bg-[#B9FF66] shadow-2xl shadow-black p-4 lg:p-6 border-[1px] border-black rounded-[20px] lg:rounded-[30px] flex w-full lg:w-2/5 h-52 lg:h-60 items-center">
                {/* Left Section */}
                <div className="text-section pt-4 w-1/2 flex flex-col justify-between gap-10 lg:gap-14">
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold bg-[#F3F3F3] p-1 lg:p-2 w-4/5 text-gray-800 leading-none mb-1 lg:mb-2">Pay-per-click</h2>
                        <h3 className="text-xl lg:text-2xl font-bold bg-[#F3F3F3] p-1 lg:p-2 mt-[-8px] lg:mt-[-10px] lg:w-2/3 text-gray-800 leading-none mb-3 lg:mb-4">advertising</h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-black p-1 lg:p-2 rounded-full">
                            <FaArrowUp className={`rotate-45 text-[#B9FF66] size={14} lg:size={16} `} />
                        </div>
                        <span className="text-gray-600 text-sm lg:text-lg font-semibold">Learn more</span>
                    </div>
                </div>
                {/* Right Section (Image) */}
                <div className="image-section w-1/2 flex justify-center">
                    <img src={box2} alt="Service" className="h-24 lg:h-32 object-cover rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Services;
