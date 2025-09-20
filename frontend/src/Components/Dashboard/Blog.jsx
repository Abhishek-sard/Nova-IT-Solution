import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", image: "", author: "", description: "" });

  // Fetch Blogs
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  // Add Blog
  const addBlog = () => {
    axios.post("http://localhost:5000/api/blogs", form).then((res) => {
      setBlogs([...blogs, res.data]);
      setForm({ title: "", image: "", author: "", description: "" });
    });
  };

  // Update Blog
  const updateBlog = (id) => {
    axios.put(`http://localhost:5000/api/blogs/${id}`, form).then((res) => {
      setBlogs(blogs.map((b) => (b._id === id ? res.data : b)));
    });
  };

  // Delete Blog
  const deleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((b) => b._id !== id));
    });
  };

  return (
    <div className="p-6">
      {/* Blog Form */}
      <div className="p-4 bg-gray-100 rounded mb-6">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 m-1"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 m-1"
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="border p-2 m-1"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 m-1 w-full"
        />
        <button onClick={addBlog} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          Add Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow p-4 rounded">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-sm text-gray-500">By {blog.author} | {new Date(blog.date).toDateString()}</p>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={() => updateBlog(blog._id)} className="px-3 py-1 bg-blue-500 text-white rounded">Update</button>
              <button onClick={() => deleteBlog(blog._id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
