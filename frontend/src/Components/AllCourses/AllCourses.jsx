import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom"; 

function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 p-6 md:p-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-4">
              
            </h1>
            <div className="h-1 w-3/4 mx-auto bg-gradient-to-r from-green-400 to-blue-400 rounded-full transform scale-x-110"></div>
          </div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Unlock your potential with our expertly crafted curriculum
          </p>
        </div>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={course._id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(course._id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 flex flex-col overflow-hidden border border-white/60 relative h-full">
                
                {/* Animated Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${hoveredCard === course._id ? 'animate-pulse-slow' : ''}`}></div>
                
                {/* Image Container with Overlay */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={course.image ? `http://localhost:5000${course.image}` : "/placeholder.png"}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Price Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-green-700 font-bold text-sm">
                      Rs. {Number(course.price).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br from-green-200 to-blue-200"></div>
                  
                  <div className="relative z-10">
                    {/* Course Title with Gradient Text */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 group-hover:from-green-700 group-hover:to-blue-700 transition-all duration-300">
                      {course.title}
                    </h3>
                    
                    {/* Description with Smooth Expand */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow transition-all duration-300 group-hover:text-gray-700">
                      {course.description.length > 100
                        ? course.description.substring(0, 100) + "..."
                        : course.description}
                    </p>

                    {/* Enhanced Button */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500">Available</span>
                      </div>
                      
                      <Link
                        to="/contact"
                        className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                      >
                        <span className="relative z-10 flex items-center">
                          Enroll Now
                          <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-300 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-300 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Animation for Cards */}
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100 to-blue-100 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  transform: `translateY(${index % 2 === 0 ? '8px' : '-8px'}) rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/40 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us for custom learning solutions tailored to your needs
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              Get Custom Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCourses;