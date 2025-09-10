import React from "react";
import ChooseImage from '../../assets/Choose.jpg';

const ChooseUs = () => {
    const stats = [
        { value: "5K+", label: "Students Graduated" },
        { value: "30+", label: "Industry Mentors" },
        { value: "3L", label: "Salary Range" },
        { value: "1:1", label: "Career Support" },
        { value: "50+", label: "Hiring Partners" },
        { value: "500+", label: "Interview Coding Questions" },
    ];

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose Nova?</h2>
                <p className="text-gray-500 mb-12">
                    "Nova is a innovative IT company dedicated to delivering practical software solutions. We combine expertise with hands-on development, helping clients achieve their goals efficiently while building reliable and scalable technology products."
                </p>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Illustration */}
                    <div className="md:w-1/2">
                        <img src={ChooseImage} alt="Stats illustration" className="w-full" />
                    </div>

                    {/* Stats */}
                    <div className="md:w-1/2 grid grid-cols-2 gap-6 text-left">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-2xl">
                                    {stat.value}
                                </div>
                                <span className="text-gray-800 text-lg">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;
