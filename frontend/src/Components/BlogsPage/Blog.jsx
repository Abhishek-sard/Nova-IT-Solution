import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="min-h-screen mt-12 bg-gray-100 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
        Our Blog
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(post.date).toDateString()} | {post.author}
                </p>
                <p className="text-gray-700 mb-4">{post.description}</p>
              </div>
              <button
                onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(post.title)}`, "_blank")}
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

export default Blogs;
