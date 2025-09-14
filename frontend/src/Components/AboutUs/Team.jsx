import React from "react";
import TeamMember1 from "../../assets/Team1.jpg";
import TeamMember2 from "../../assets/Team2.jpg";
import TeamMember3 from "../../assets/Team3.jpg";
import TeamMember4 from "../../assets/Team4.jpg";
import TeamMember5 from '../../assets/me.jpg';

// Team data
const teamMembers = [
  {
    id: 1,
    name: "Aayush Sapkota",
    position: "Founder & CEO",
    img: TeamMember2, 
  },
  {
    id: 2,
    name: "Sagun Subedi",
    position: "Managing Director",
    img: TeamMember4,
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
    img:TeamMember1,
  },
  {
    id: 5,
    name: "Bigyan Rijal",
    position: "Backend Developer",
    img: TeamMember3, 
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
