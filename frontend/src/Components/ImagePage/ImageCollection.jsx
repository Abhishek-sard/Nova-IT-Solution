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
    <div className="flex flex-wrap gap-4 p-4">
      {images.map(img => (
        <img
          key={img._id}
          src={`http://localhost:5000${img.image}`}
          alt="Gallery"
          className="w-72 h-72 object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default ImageCollection;
