import React, { useState, useEffect } from "react";
import axios from "axios";

const GalleryDashboard = () => {
  const [gallery, setGallery] = useState([]);
  const [file, setFile] = useState(null);

  const fetchGallery = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/gallery");
      setGallery(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleAdd = async () => {
    if (!file) return alert("Select an image first!");
    const formData = new FormData();
    formData.append("image", file); // must match backend

    try {
      await axios.post("http://localhost:5000/api/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      fetchGallery(); // refresh images
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      fetchGallery();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery Dashboard</h1>

      <div className="flex gap-2 mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((img) => (
          <div key={img._id} className="relative">
            <img
              src={`http://localhost:5000${img.image}`}
              alt="Gallery"
              className="w-full h-28 object-cover rounded shadow"
            />
            <button
              onClick={() => handleDelete(img._id)}
              className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDashboard;
