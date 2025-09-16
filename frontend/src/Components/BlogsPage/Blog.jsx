// src/Components/Blogs/Blogs.jsx
import React from "react";
import webImg from "../../assets/Web Development.jpg";
import graphicImg from "../../assets/UI UX poster.jpg";
import pythonImg from "../../assets/python.jpg";
import codingImg from "../../assets/mobiel app.jpg"; // replace with appropriate image

const blogPosts = [
  {
    id: 1,
    title: "Web Development: Building the Future",
    date: "September 11, 2025",
    author: "Abhishek Sardar",
    summary:
      "Web Development is the backbone of the modern internet. Learn HTML, CSS, JavaScript, and React to create responsive, interactive websites and applications.",
    img: webImg,
  },
  {
    id: 2,
    title: "Graphic Designing: Creativity in Action",
    date: "September 12, 2025",
    author: "Sagun Subhedi",
    summary:
      "Graphic Designing allows you to bring ideas to life visually. Master tools like Figma, Adobe Photoshop, and Illustrator to create stunning designs.",
    img: graphicImg,
  },
  {
    id: 3,
    title: "Python: Powering the Future of Tech",
    date: "September 13, 2025",
    author: "Aayush Sapkota",
    summary:
      "Python is versatile and beginner-friendly. From AI and machine learning to web apps and automation, Python is a must-learn language for modern developers.",
    img: pythonImg,
  },
  {
    id: 4,
    title: "How to Start Coding: Your First Steps",
    date: "September 14, 2025",
    author: "Abhishek Sardar",
    summary:
      "Starting to code can be overwhelming. Begin with HTML, CSS, and JavaScript for web basics, practice small projects, and gradually move to frameworks like React.",
    img: codingImg,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen mt-12 bg-gray-100 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
        Our Blog
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Blog Image */}
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />

            {/* Blog Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{post.date} | {post.author}</p>
                <p className="text-gray-700 mb-4">{post.summary}</p>
              </div>

              {/* Read More Button */}
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/search?q=${encodeURIComponent(post.title)}`,
                    "_blank"
                  )
                }
                className="mt-auto px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition w-full"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
