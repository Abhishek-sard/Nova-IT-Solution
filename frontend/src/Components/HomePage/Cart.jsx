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
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6 mt-16 p-4 md:p-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-5 flex items-start gap-4 w-full md:w-1/3 transition transform hover:bg-green-500 hover:text-white duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="flex-shrink-0">{card.icon}</div>
          <div>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{card.title}</h2>
            <p className="text-sm sm:text-base md:text-base">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
