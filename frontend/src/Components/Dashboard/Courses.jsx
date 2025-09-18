import React from "react";
import AdminActions from "./AdminActions";

const Courses = () => {
  const courses = [
    { id: 1, img: "/courses/course1.jpg", title: "React Basics", desc: "Learn React from scratch", price: "$50" },
    { id: 2, img: "/courses/course2.jpg", title: "Node.js Mastery", desc: "Backend with Node.js", price: "$75" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow p-4 rounded">
            <img src={course.img} alt={course.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{course.title}</h3>
            <p className="text-gray-600">{course.desc}</p>
            <p className="text-indigo-600 font-bold">{course.price}</p>
          </div>
        ))}
      </div>
      <AdminActions />
    </div>
  );
};

export default Courses;
