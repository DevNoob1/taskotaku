import React from 'react';
import Footer1 from './footer1.js'
import Footer2 from './footer2.js'
const Footer = () => {
    return (
        <div className="Footer">
            <div className='w-[80%] m-auto mt-28 flex flex-col md:flex-row  items-center gap-10'>
                <h1 className='text-4xl text-center sm:text-left font-bold p-2 lg:w-[40%] bg-[#B9FF66]'>Testimonials </h1>
                <p className='text-center sm:text-left '>Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More about Our Digital Marketing Services</p>
            </div>

            <Footer1 />
            <Footer2 />
        </div>
    );
};

export default Footer;