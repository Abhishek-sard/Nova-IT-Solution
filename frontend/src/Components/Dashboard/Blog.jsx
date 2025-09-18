import React from "react";
import AdminActions from "./AdminActions";

const Blog = () => {
  const blogs = [
    { id: 1, img: "/blogs/blog1.jpg", title: "Future of AI", date: "2025-09-18", author: "Abhishek", desc: "Exploring AI trends..." },
    { id: 2, img: "/blogs/blog2.jpg", title: "Web Dev 2025", date: "2025-09-12", author: "John", desc: "Latest in web dev..." },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow p-4 rounded">
            <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-sm text-gray-500">By {blog.author} | {blog.date}</p>
            <p className="text-gray-600 mt-1">{blog.desc}</p>
          </div>
        ))}
      </div>
      <AdminActions />
    </div>
  );
};

export default Blog;
