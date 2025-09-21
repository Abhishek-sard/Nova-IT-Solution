import React from 'react'
import Image1 from '../../assets/Aashish Thapa.jpg';
import Image2 from '../../assets/databasemanagement.jpg';
import Image3 from '../../assets/Choose.jpg'; 

const ImageCollection = () => {
  return (   
    <div className="flex gap-4 p-4 mt-30">
      <img src={Image1} alt="Aashish Thapa" className="w-70 h-70 object-cover rounded-lg" />
      <img src={Image2} alt="Database Management" className="w-70 h-70 object-cover rounded-lg" />
      <img src={Image3} alt="Third Example" className="w-70 h-70 object-cover rounded-lg" />
    </div>
  );
}

export default ImageCollection;
