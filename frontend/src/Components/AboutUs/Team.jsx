import React from "react";
import TeamMember1 from "../../assets/Team1.jpg";
import TeamMember2 from "../../assets/Team2.jpg";
import TeamMember3 from "../../assets/Team3.jpg";
import TeamMember5 from '../../assets/me1.jpg';
import TeamMember6 from '../../assets/uncle.jpg';
import TeamMember7 from '../../assets/sapath.jpg';

// Team data
const teamMembers = [
  {
    id: 6,
    name: "Ram Chandra Sapkota",
    position: "Founder",
    img:TeamMember6,

  },
  {
    id: 1,
    name: "Aayush Sapkota",
    position: "CEO",
    img: TeamMember2, 
  },
  {
    id: 3,
    name: "Abhishek Sardar",
    position: "Lead Instructor, Project Manager",
    img: TeamMember5, 
  },
  {
    id: 4,
    name: "Prabhat Rai",
    position: "COO - Graphic Designer",
    img: TeamMember1,
  },
  {
    id: 5,
    name: "Bigyan Rijal",
    position: "Backend Developer",
    img: TeamMember3, 
  },
  {
    id: 7,
    name: "Sapath Dahal",
    position: "Graphic Designer",
    img: TeamMember7,
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-12 tracking-wide">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-500"
          >
            {/* Image with zoom effect */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 via-green-700/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-green-500 px-4">
              <h3 className="text-xl font-bold drop-shadow-md">
                {member.name}
              </h3>
              <p className="text-gray-200 mt-1 drop-shadow-sm">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
