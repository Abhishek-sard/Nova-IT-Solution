import React from "react";
import webImg from "../../assets/Web Development.jpg";
import mlImg from "../../assets/machine learning.jpg";
import mobileImg from "../../assets/mobiel app.jpg";
import uiuxImg from "../../assets/UI UX poster.jpg";
import cyberImg from "../../assets/Cyber Secuity.jpg";
import devopsImg from "../../assets/Devops.jpg";
import pythonImg from "../../assets/python.jpg";
import dbImg from "../../assets/Database.jpg";
import digitalImg from "../../assets/Digital Marketing.jpg";

const courses = [
  { id: 1, title: "Web Development", desc: "HTML, CSS, JavaScript & React", price: 12000, discountPrice: 9999, img: webImg },
  { id: 2, title: "Machine Learning", desc: "Neural Networks, TensorFlow", price: 15000, discountPrice: 11999, img: mlImg },
  { id: 3, title: "Mobile App Dev", desc: "Flutter & React Native basics", price: 10000, discountPrice: 7999, img: mobileImg },
  { id: 4, title: "UI/UX Design", desc: "Figma, Prototyping, Wireframes", price: 9000, discountPrice: 6999, img: uiuxImg },
  { id: 5, title: "Cyber Security", desc: "Ethical Hacking, Pentesting", price: 16000, discountPrice: 12999, img: cyberImg },
  { id: 6, title: "DevOps", desc: "Docker, Kubernetes, CI/CD", price: 14000, discountPrice: 10999, img: devopsImg },
  { id: 7, title: "AI with Python", desc: "Deep Learning, NLP, CV", price: 18000, discountPrice: 14999, img: pythonImg },
  { id: 8, title: "Database Management", desc: "SQL, NoSQL & MongoDB", price: 11000, discountPrice: 8499, img: dbImg },
  { id: 9, title: "Digital Marketing", desc: "SEO, SEM, Analytics", price: 9500, discountPrice: 6999, img: digitalImg },
];

function AllCourses() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Courses
      </h1>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            {/* Small Logo */}
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-3">
              NOVA
            </div>

            {/* Course Image */}
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              {course.desc}
            </p>

            {/* Price Section */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gray-500 line-through">Rs. {course.price}</span>
              <span className="text-green-700 font-bold">Rs. {course.discountPrice}</span>
            </div>

            {/* Contact Button */}
            <button className="w-full px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
