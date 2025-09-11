import React from "react";
import MyPhoto from '../../assets/me.png';

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Aayush Sapkota",
    position: "Founder & CEO",
    img: "/team/abhishek.jpg", // keep in public/team folder
  },
  {
    id: 2,
    name: "Sagun Subhedi",
    position: "Managing Director",
    img: "/team/sita.jpg",
  },
  {
    id: 3,
    name: "Abhishek Sardar",
    position: "Lead Instructor, Project Manager",
    img: MyPhoto, // imported image
  },
  {
    id: 4,
    name: "Prabhat Rai",
    position: "COO - Graphic Designer",
    img: "/team/anita.jpg",
  },
  {
    id: 5,
    name: "Bigyan Rijal",
    position: "Backend Developer",
    img: "", // imported image
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-600 text-center">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
