import React from "react";

const courses = [
  { id: 1, title: "Web Development", desc: "HTML, CSS, JavaScript & React", img: "/course2.jpg" },
  { id: 2, title: "Machine Learning", desc: "Neural Networks, TensorFlow, Keras", img: "/course3.jpg" },
  { id: 3, title: "Mobile App Dev", desc: "Flutter & React Native basics", img: "/course4.jpg" },
  { id: 4, title: "UI/UX Design", desc: "Figma, Prototyping, Wireframes", img: "/course5.jpg" },
  { id: 5, title: "Cyber Security", desc: "Ethical Hacking, Pentesting", img: "/course6.jpg" },
  { id: 6, title: "DevOps", desc: "Docker, Kubernetes, CI/CD", img: "/course8.jpg" },
  { id: 7, title: "AI with Python", desc: "Deep Learning, NLP, CV", img: "/course10.jpg" },
  { id: 8, title: "Database Management", desc: "SQL, NoSQL & MongoDB", img: "/course11.jpg" },
  { id: 9, title: "Digital Marketing", desc: "SEO, SEM, Analytics", img: "/course12.jpg" },
];

function AllCourses() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Courses
      </h1>

      {/* Grid of 12 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center card-hover"
          >
            {/* Small Logo */}
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-3">
              SI
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

            {/* Contact Button */}
            <button className="btn-primary w-full">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCourses;
