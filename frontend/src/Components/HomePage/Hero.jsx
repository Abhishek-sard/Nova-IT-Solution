import React from "react";
import BackgroundImage from '../../assets/background1.jpg';
import Logo1 from '../../../public/NOVA logo.png';

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {/* Hero content */}


            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/* Left: Text */}
                <div className="space-y-6 md:ml-0 lg:ml-10 text-center md:text-left mt-10 md:mt-0">
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                        Dream. Build. Innovate <br className="hidden md:block" /> with <span className="text-green-700">NOVA</span>
                    </h1>
                    <p className="text-base md:text-lg max-w-md mx-auto md:mx-0 text-gray-700">
                        We help young minds turn ideas into digital realities that shape the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 justify-center md:justify-start">
                        <button className="px-6 py-3 bg-green-700 text-white hover:bg-green-900 rounded-lg font-medium">
                            Get Started
                        </button>
                        <button className="px-6 py-3 border border-green-700 text-green-700 hover:bg-green-700 hover:text-white rounded-lg font-medium">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end mt-12 md:mt-10">
                    <img
                        src={Logo1}
                        alt="Hero illustration"
                        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </section >


    );
};

export default Hero;
