import React from "react";
import Royal from '../../assets/royalbrother1.jpg';
import Smallheaven from '../../assets/smallheave.jpg';
import Gracee from '../../assets/Grace1.png';
import Club from '../../assets/logo3.jpg';
import KailashCloud from '../../assets/kailash cloud.jpg'

const TrustOrganization = () => {
  const logos = [
    { src: Gracee, alt: "Grace English School" },
    { src: Smallheaven, alt: "Small Heaven" },
    { src: Royal, alt: "S.D.G Foundation" },
    { src: Club, alt: "S.D.G Club" },
    { src: KailashCloud, alt: "Kailash Cloud" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-6xl mx-auto shadow-2xl shadow-gray-400/20">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-black text-center md:text-left mb-8">
          Our Trusted Organizations:
        </h3>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOrganization;
