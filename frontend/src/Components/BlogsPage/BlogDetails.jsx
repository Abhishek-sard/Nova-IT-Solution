import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-700">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-red-600">
        Blog not found 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <img
          src={
            blog.image
              ? `http://localhost:5000${blog.image}`
              : "/placeholder.png"
          }
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          {blog.title}
        </h1>
        <p className="text-gray-500 mb-2">
          {blog.date ? new Date(blog.date).toDateString() : ""} | {blog.author}
        </p>
        <p className="text-gray-700 leading-relaxed">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
