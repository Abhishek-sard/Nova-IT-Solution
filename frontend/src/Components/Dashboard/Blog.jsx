import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", description: "", image: null });
  const [editingId, setEditingId] = useState(null);

  // Fetch Blogs
  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  // Add or Update Blog
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("description", form.description);
    if (form.image) formData.append("image", form.image);

    if (editingId) {
      axios
        .put(`http://localhost:5000/api/blogs/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setBlogs(blogs.map((b) => (b._id === editingId ? res.data : b)));
          setEditingId(null);
          setForm({ title: "", author: "", description: "", image: null });
        });
    } else {
      axios
        .post("http://localhost:5000/api/blogs", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setBlogs([...blogs, res.data]);
          setForm({ title: "", author: "", description: "", image: null });
        });
    }
  };

  // Edit Blog
  const handleEdit = (blog) => {
    setForm({ title: blog.title, author: blog.author, description: blog.description, image: null });
    setEditingId(blog._id);
  };

  // Delete Blog
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`).then(() => {
      setBlogs(blogs.filter((b) => b._id !== id));
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>

      {/* Form */}
      <div className="bg-gray-100 p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
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
        <input
          type="file"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          className="border p-2 m-1"
        />
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded mt-2">
          {editingId ? "Update" : "Add"} Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white p-4 rounded shadow">
            <img src={`http://localhost:5000${blog.image}`} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h3 className="font-bold mt-2">{blog.title}</h3>
            <p className="text-sm text-gray-500">By {blog.author} | {new Date(blog.date).toDateString()}</p>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(blog)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
