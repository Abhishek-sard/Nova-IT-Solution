import React from "react";
import Royal from '../../assets/royalbrother1.jpg';
import Smallheaven from '../../assets/smallheave.jpg';
import Gracee from '../../assets/Grace1.png';
import KailashCloud from '../../assets/kailash cloud.jpg';

const TrustOrganization = () => {
  const logos = [
    { src: Gracee, alt: "Grace English School" },
    { src: Smallheaven, alt: "Small Heaven" },
    { src: Royal, alt: "S.D.G Foundation" },
    { src: KailashCloud, alt: "Kailash Cloud" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-6xl mx-auto shadow-2xl shadow-gray-400/20">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center md:text-left mb-6 sm:mb-8">
          Our Trusted Organizations:
        </h3>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-1/2 sm:w-1/4 md:w-auto">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOrganization;
