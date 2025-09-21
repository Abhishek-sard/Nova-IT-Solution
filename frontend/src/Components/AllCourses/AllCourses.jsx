import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Courses
      </h1>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            {/* Image with fixed size */}
            <div className="w-full h-48 mb-4">
              <img
                src={course.image ? `http://localhost:5000${course.image}` : "/placeholder.png"}
                alt={course.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              {course.description}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-700 font-bold">Rs. {course.price}</span>
            </div>

            {/* Button at bottom */}
            <button className="w-full px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition mt-auto">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
