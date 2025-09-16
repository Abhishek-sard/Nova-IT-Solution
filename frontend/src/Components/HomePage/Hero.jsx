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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Text */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
                        Dream. Build. Innovate <br className="hidden md:block" /> 
                        with <span className="text-green-700">NOVA</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 text-gray-700">
                        We help young minds turn ideas into digital realities that shape the future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                        {/* Welcome Button */}
                        <button
                            className="relative px-10 py-3 font-bold text-lg sm:text-xl tracking-wide text-white 
             rounded-full cursor-default pointer-events-none
             bg-gradient-to-r from-green-500 via-green-600 to-green-700
             shadow-lg shadow-green-400/40
             overflow-hidden transition duration-500"
                        >
                            <span className="relative z-10">Welcome</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                   translate-x-[-100%] animate-shine"></span>
                        </button>

                        {/* Learn More PDF Button */}
                        <a
                            href="/Aboutour.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-green-700 border border-green-700 
             hover:bg-green-700 hover:text-white rounded-full font-medium text-base sm:text-lg text-center"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end mt-10 md:mt-0">
                    <img
                        src={Logo1}
                        alt="Hero illustration"
                        className="w-3/4 sm:w-2/3 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
