import React from "react";
import Hanuman from '../../assets/hanumna.jpg';
import Royal from '../../assets/royalbrohter.jpg';
import Club from '../../assets/logo3.jpg';

const TrustOrganization = () => {
  const logos = [
    { src: Hanuman, alt: "S.D.G Foundation" },
    { src: Royal, alt: "S.D.G Foundation" },
    { src: Club, alt: "S.D.G Club" }
  ];

  return (
    <section className="flex justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-6xl shadow-2xl shadow-gray-400/50 transition duration-300 cursor-pointer">
        {/* Left-aligned Text */}
        <h3 className="text-2xl font-bold text-[#2c6e32] text-left mb-6">
          Our Trusted Organizations:
        </h3>

        {/* Centered Images */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-20 sm:h-24 md:h-28 object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOrganization;
