import React from "react";
import { FaUserTie, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Cart = () => {
  const cardData = [
    {
      icon: <FaUserTie className="text-black text-3xl sm:text-4xl" />,
      title: "Be Your Own Boss",
      description: "Embrace Independence: Be Your Own Boss and Shape Your Future!",
    },
    {
      icon: <FaGraduationCap className="text-black text-3xl sm:text-4xl" />,
      title: "Reach Your Career Goals",
      description: "Strive for Success: Reach Your Career Goals and Unlock Your Potential",
    },
    {
      icon: <FaBriefcase className="text-black text-3xl sm:text-4xl" />,
      title: "Get Hired",
      description: "Validate Your Skills, Open Doors: Earn Industry-Recognized Certificates!",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2c6e32] mb-10">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-[48%] md:w-[32%] transition transform hover:bg-green-500 hover:text-white duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex-shrink-0">{card.icon}</div>
              <div className="mt-2 sm:mt-0">
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{card.title}</h2>
                <p className="text-sm sm:text-base md:text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
