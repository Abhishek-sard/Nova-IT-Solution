import React from "react";

const Background = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/NOVA Logo.png')" }} // put your image inside public folder with name nova-bg.jpg
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Background of NOVA
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          NOVA was created with a vision to break away from the traditional way
          of learning. Instead of just focusing on books and exams, NOVA blends
          **creativity, technology, and real-world experience** to prepare
          learners for the future.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          While most institutions followed the old style of lectures, NOVA
          started with **interactive workshops, live projects, and
          mentorship-based learning**. This made it stand out from the rest and
          gave learners the confidence to apply their skills in real life.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          NOVA also embraced innovation and inclusive — offering
          opportunities to students from different backgrounds, encouraging
          teamwork, and building a strong community of learners and mentors.
        </p>

        <p className="text-lg leading-relaxed">
          What makes NOVA different is not just the courses we provide, but the
          belief that education should inspire, transform, and empower .Our
          background is the foundation of this mission, and we continue to grow
          with the same spirit of difference.
        </p>
      </div>
    </div>
  );
};

export default Background;
