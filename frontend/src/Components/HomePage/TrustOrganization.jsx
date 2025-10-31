import React from "react";
import Royal from '../../assets/royalbrother1.jpg';
import Smallheaven from '../../assets/smallheave.jpg';
import KailashCloud from '../../assets/kailash cloud.jpg';
import Pugyo from "../../assets/pugyo.jpg";
import RamroSoft from "../../assets/ramrosoft.jpg";

const TrustOrganization = () => {
  const logos = [
    { src: Smallheaven, alt: "Small Heaven" },
    { src: Royal, alt: "S.D.G Foundation" },
    { src: KailashCloud, alt: "Kailash Cloud" },
    { src: Pugyo, alt: "Pugyo" },
    { src: RamroSoft, alt: "Ramro Soft" }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-x-auto">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-6xl mx-auto shadow-2xl shadow-gray-400/20">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center md:text-left mb-6 sm:mb-8">
          Our Trusted Organizations:
        </h3>

        {/* Logos in one row */}
        <div className="flex items-center justify-center md:justify-start gap-6 sm:gap-8 flex-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-28 h-28 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOrganization;
