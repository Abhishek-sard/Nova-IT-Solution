import React from "react";
import BackgroundImage from '../../assets/background1.jpg'
import Logo1 from '../../../public/NOVA logo.png'

const Hero = () => {
    return (
        <section
            className="h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: "url(" + BackgroundImage + ")" }} // put your image in public folder
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                {/* Left: Text */}
                <div className="text-red space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Welcome to <span className="text-yellow-400">NOVA</span>
                    </h1>
                    <p className="text-lg md:text-xl max-w-md">
                        Building modern and responsive websites using React + Vite + TailwindCSS.
                        Let’s create something amazing together.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-[#2c6e32] hover:bg-green-900 rounded-lg font-medium">
                            Get Started
                        </button>
                        <button className="px-6 py-3 border border-red hover:bg-white hover:text-[#2c6e32] rounded-lg font-medium">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end mt-17">
                    <img
                        src={Logo1}
                        alt="Hero illustration"
                        className="max-w-md md:max-w-lg w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>



            </div>
        </section>
    );
};

export default Hero;
