import React from 'react';
import Process from './Process.js'
import Services from './services.js'

const Middle = () => {
    return (
        <div className="Middle">
            <Services />
        <div className='w-[80%] m-auto mt-28 flex flex-col md:flex-row  items-center gap-10'>
                <h1 className='text-4xl text-center sm:text-left font-bold p-2 lg:w-[40%] bg-[#B9FF66]'>Our Working Process </h1>
                <p className='text-center sm:text-left '>Step-by-Step Guide to Achieving <br /> Your Business Goals</p>
            </div>
            <Process />
        </div>
    );
};

export default Middle;
