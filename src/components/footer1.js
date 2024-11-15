import React, { useState } from 'react';
import Chatbox from '../assets/chatbox.png'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import './App.css';  // Ensure you have TailwindCSS set up in this file.

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
        id: 2,
        name: 'Jane Smith',
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
        id: 3,
        name: 'Tom Lee',
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
        id: 4,
        name: 'Emily Davis',
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    },
    {
        id: 5,
        name: 'Emily Davis',
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="relative w-full flex flex-col justify-center items-center lg:w-[80%] pt-16 pb-16 bg-[#191A23] rounded-3xl p-8 border-4 ">
                {/* Testimonial Text */}
                <div className="relative bg-[#191A23] border-white border-2 text-white p-6 rounded-[40px] w-full lg:w-3/4 shadow-lg">
                    <p className="text-left text-lg italic">{testimonials[currentIndex].text}</p>
                    <div className="absolute bottom-[-20px] bg-[#191A23] h-10 w-10  rotate-45 border-r-2 border-r-white border-b-2 border-b-white left-20 "></div>

                </div>
                <p className=" text-lg pt-16 text-green-300 lg:ml-[-40%] pb-24 font-semibold italic">
                    {testimonials[currentIndex].name} <br />
                    <p className='text-white'>Marketing Director at XYZ Corp</p>
                </p>


                {/* Carousel Navigation Buttons */}
                <div className="relative w-full">
                    {/* Left Arrow */}
                    <div
                        className="absolute bottom-0 left-0 lg:left-1/4  transform -translate-y-1/2 text-white text-3xl cursor-pointer px-2"
                        onClick={prevTestimonial}
                    >
                        <FaArrowLeft className="text-white text-2xl" />
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3  ${index === currentIndex ? 'bg-green-500' : 'bg-white'}`}
                            />
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <div
                        className="absolute bottom-0 right-0 lg:right-1/4 transform -translate-y-1/2 text-white text-3xl cursor-pointer px-2"
                        onClick={nextTestimonial}
                    >
                        <FaArrowRight className="text-white text-2xl" />
                    </div>
                </div>


                {/* Indicators */}
            </div>
        </div>
    );
};

export default TestimonialCarousel;