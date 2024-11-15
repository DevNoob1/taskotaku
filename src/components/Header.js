import React from 'react';
import Navbar from './Navbar.js'
import Headercontent from './Headercontent.js'
import Company1 from '../assets/amazon.png';
import Company2 from '../assets/netflix.png';
import Company3 from '../assets/hubspot.png';
import Company4 from '../assets/zoom.png';
import Company5 from '../assets/notion.png';
import Company6 from '../assets/dribble.png';


const Header = () => {
    return (
        <div className="Header">
            <Navbar />
            <Headercontent />
            <div className="w-full mt-12 overflow-hidden">
                <div className="flex gap-8 animate-scroll whitespace-nowrap">
                    <img src={Company1} alt="Company 1" className="h-12 w-auto" />
                    <img src={Company2} alt="Company 2" className="h-12 w-auto" />
                    <img src={Company3} alt="Company 3" className="h-12 w-auto" />
                    <img src={Company4} alt="Company 4" className="h-12 w-auto" />
                    <img src={Company5} alt="Company 4" className="h-12 w-auto" />
                    <img src={Company6} alt="Company 4" className="h-12 w-auto" />
                    {/* Repeat the logos for a continuous effect */}
                    <img src={Company1} alt="Company 1" className="h-12 w-auto" />
                    <img src={Company2} alt="Company 2" className="h-12 w-auto" />
                    <img src={Company3} alt="Company 3" className="h-12 w-auto" />
                    <img src={Company4} alt="Company 4" className="h-12 w-auto" />
                    <img src={Company5} alt="Company 4" className="h-12 w-auto" />
                    <img src={Company6} alt="Company 4" className="h-12 w-auto" />
                </div>
            </div>
            <div className='w-[80%] m-auto mt-14 flex flex-col md:flex-row  items-center gap-10'>
                <h1 className='text-4xl text-center sm:text-left font-bold p-2 lg:w-[14%] bg-[#B9FF66]'>Services</h1>
                <p className='text-center sm:text-left '>At our digital marketing agency, we offer a range of services <br /> to help businesses grow and succeed online. These services include:</p>
            </div>
        </div>
    );
};

export default Header;