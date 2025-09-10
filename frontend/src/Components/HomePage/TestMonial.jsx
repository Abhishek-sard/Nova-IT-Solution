import React from "react";
import Person1 from '../../assets/logo3.jpg';
import Person2 from '../../assets/Choose.jpg';
import Person3 from '../../assets/cooder.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      image: Person1,
      feedback: "Amazing services! Highly professional team that delivered more than I expected."
    },
    {
      name: "Jane Smith",
      role: "Marketing Head, Company B",
      image: Person2,
      feedback: "The team understood our requirements perfectly and the results were outstanding."
    },
    {
      name: "Michael Johnson",
      role: "Founder, Startup C",
      image: Person3,
      feedback: "Excellent work with great attention to detail. Would recommend to anyone."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12">
          What Our Clients Say
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
