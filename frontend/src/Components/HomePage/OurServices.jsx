import React from "react";
import { useNavigate } from "react-router-dom";
import Service1 from "../../assets/webdevelopment.jpg";
import Service2 from "../../assets/mobileapp.jpg";
import Service3 from "../../assets/seo.jpg";
import Service4 from "../../assets/uiuximage.jpg";
import Service5 from "../../assets/digitalmarketing.jpg";
import Service6 from "../../assets/software.jpg";

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    { image: Service1, title: "Web Development", description: "Build modern and responsive websites." },
    { image: Service2, title: "Mobile Apps", description: "Create mobile apps for Android and iOS." },
    { image: Service3, title: "SEO Optimization", description: "Improve your website ranking on search engines." },
    { image: Service4, title: "UI/UX Design", description: "Design user-friendly and attractive interfaces." },
    { image: Service5, title: "Digital Marketing", description: "Promote your business online effectively." },
    { image: Service6, title: "Software Development", description: "Create custom software solutions for your business." },
  ];

  const handleLearnMore = () => {
    navigate("/contact");
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2c6e32] mb-10 sm:mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col items-center text-center 
              transition transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mb-4"
              />

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#2c6e32] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base md:text-[15px] lg:text-base mb-4">
                {service.description}
              </p>

              {/* Button */}
              <button
                onClick={handleLearnMore}
                className="bg-[#2c6e32] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg 
                hover:bg-green-600 transition duration-300 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
