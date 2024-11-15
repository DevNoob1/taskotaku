import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Process = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const data = [
        {
            id: 1,
            title: "Consultation",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
            id: 2,
            title: "Research and Strategy Development",
            description: "We develop a customized marketing strategy based on your goals and requirements. This involves thorough research and a detailed plan to ensure success.",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="Process max-w-[90%] lg:max-w-[80%] mx-auto mt-10 space-y-6">

            {data.map((item, index) => (
                <div
                    key={item.id}
                    className={`p-4 lg:p-6 rounded-[20px] lg:rounded-[30px] shadow-lg ${index === 1 ? 'bg-[#F3F3F3]' : 'bg-[#B9FF66]'
                        }`}
                >
                    <div
                        className={`overflow-hidden transition-all mb-5 duration-500 ease-in-out ${openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="p-2 text-gray-700 text-sm lg:text-md">
                            <hr className="bg-black h-1 mb-4 lg:mb-8" />
                            {item.description}
                        </div>
                    </div>
                    {/* Accordion Header */}
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex items-center gap-3 lg:gap-5">
                            <h1 className="text-3xl lg:text-5xl font-bold text-gray-700">{`0${item.id}`}</h1>
                            <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">{item.title}</h2>
                        </div>
                        <div className="bg-white p-1 lg:p-2 rounded-full text-black">
                            {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Process;
