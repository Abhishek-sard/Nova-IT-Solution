import React from "react";
import Person1 from '../../assets/AshishDulal.jpg.png';
import Person2 from '../../assets/jenishvai.jpg';
import Person3 from '../../assets/Aashish Thapa.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Ashish Dulal",
      role: "BOD-Grace International Itahari",
      image: Person1,
      feedback: "Amazing services! The team was highly professional, attentive, and delivered results beyond my expectations. Truly impressed with their work."
    },
    {
      name: "Jenish Karki",
      role: "Student, Web Development",
      image: Person2,
      feedback: "As a student, I really enjoyed working with the team. They explained everything clearly, guided me whenever I got stuck, and helped me learn a lot while completing the project."
    },
    {
      name: "Aashish Thapa",
      role: "Principle/founder, Small Heaven Academy",
      image: Person3,
      feedback: "The team demonstrated exceptional dedication and attention to detail. Their work exceeded our expectations, and I would highly recommend their services to anyone seeking quality results."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
          OUR TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 cursor-pointer"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2c6e32] mb-1">{testimonial.name}</h3>
              <p className="text-gray-500 mb-4 text-sm sm:text-base">{testimonial.role}</p>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
