import React from "react";
import Person1 from "../../assets/AshishDulal.jpg.png";
import Person2 from "../../assets/jenishvai.jpg";
import Person3 from "../../assets/Aashish Thapa.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ashish Dulal",
      role: "BOD - Grace International Itahari",
      image: Person1,
      feedback:
        "Amazing services! The team was highly professional, attentive, and delivered results beyond my expectations. Truly impressed with their work.",
    },
    {
      name: "Jenish Karki",
      role: "Student, Web Development",
      image: Person2,
      feedback:
        "As a student, I really enjoyed working with the team. They explained everything clearly, guided me whenever I got stuck, and helped me learn a lot while completing the project.",
    },
    {
      name: "Aashish Thapa",
      role: "Principal/Founder, Small Heaven Academy",
      image: Person3,
      feedback:
        "The team demonstrated exceptional dedication and attention to detail. Their work exceeded our expectations, and I would highly recommend their services to anyone seeking quality results.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-10 sm:mb-12">
          Our Testimonials
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
              transition transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer h-full"
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover mb-4"
              />

              {/* Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2c6e32] mb-1">
                {testimonial.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-3">
                {testimonial.role}
              </p>

              {/* Feedback */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
