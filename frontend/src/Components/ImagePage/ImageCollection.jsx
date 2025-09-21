import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageCollection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/gallery")
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map(img => (
          <img
            key={img._id}
            src={`http://localhost:5000${img.image}`}
            alt="Gallery"
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCollection;
