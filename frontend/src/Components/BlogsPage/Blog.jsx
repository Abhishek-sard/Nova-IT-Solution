import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
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
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            <img
              src={post.image ? `http://localhost:5000${post.image}` : "/placeholder.png"}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {post.date ? new Date(post.date).toDateString() : ""} | {post.author}
              </p>
              <p className="text-gray-700 mb-4">
                {post.description?.slice(0, 100)}...
              </p>
              <Link
                to={`/blogs/${post._id}`}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition w-full text-center"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
