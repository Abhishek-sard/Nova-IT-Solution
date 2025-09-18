import React from "react";
import AdminActions from "./AdminActions";

const Gallery = () => {
  const gallery = [
    { id: 1, img: "/gallery/img1.jpg" },
    { id: 2, img: "/gallery/img2.jpg" },
    { id: 3, img: "/gallery/img3.jpg" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((g) => (
          <img
            key={g.id}
            src={g.img}
            alt="Gallery"
            className="w-full h-28 object-cover rounded shadow"
          />
        ))}
      </div>
      <AdminActions />
    </div>
  );
};

export default Gallery;
