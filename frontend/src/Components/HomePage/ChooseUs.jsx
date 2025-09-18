import React from "react";
import CooderPerson from '../../assets/cooderperson2.jpg';

const ChooseUs = () => {
    const stats = [
        { value: "10+", label: "Industry Mentors" },
        { value: "1:1", label: "Career Support" },
        { value: "500+", label: "Interview Coding Questions" },
        { value: "1:1", label: "Feedback & Guidance" }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Why choose Nova?
                </h2>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-12 max-w-3xl mx-auto">
                    Nova is an innovative IT company dedicated to delivering practical software solutions.
                    We combine expertise with hands-on development, helping clients achieve their goals efficiently
                    while building reliable and scalable technology products.
                </p>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Illustration */}
                    <div className="md:w-1/2 w-full">
                        <img
                            src={CooderPerson}
                            alt="Stats illustration"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>

                    {/* Stats */}
                    <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center text-center gap-2"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center text-green-700 font-bold text-lg sm:text-2xl">
                                    {stat.value}
                                </div>
                                <span className="text-gray-800 text-sm sm:text-lg">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
