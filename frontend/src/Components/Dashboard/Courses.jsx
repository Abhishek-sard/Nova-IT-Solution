import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardCourses = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", price: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all courses
  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add or Update
  const handleSubmit = () => {
    if (editingId) {
      axios.put(`http://localhost:5000/api/courses/${editingId}`, form).then(res => {
        setCourses(courses.map(c => (c._id === editingId ? res.data : c)));
        setEditingId(null);
        setForm({ title: "", description: "", price: "", image: "" });
      });
    } else {
      axios.post("http://localhost:5000/api/courses", form).then(res => {
        setCourses([...courses, res.data]);
        setForm({ title: "", description: "", price: "", image: "" });
      });
    }
  };

  // Delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/courses/${id}`).then(() => {
      setCourses(courses.filter(c => c._id !== id));
    });
  };

  // Edit (load data into form)
  const handleEdit = (course) => {
    setForm(course);
    setEditingId(course._id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>

      {/* Form */}
      <div className="bg-gray-100 p-4 rounded mb-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 m-1"
        />
        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 m-1"
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 m-1"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 m-1"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="bg-white p-4 rounded shadow">
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded" />
            <h3 className="font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p className="text-indigo-600 font-semibold">Rs. {course.price}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(course)} className="bg-blue-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(course._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCourses;
