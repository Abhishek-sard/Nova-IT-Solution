import React, { useState } from "react";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    position: "",
    address: "",
    purpose: "",
  });

  const phoneNumber = "9779764453517"; // WhatsApp number without + or spaces

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello, I want to submit my details:%0A
Name: ${formData.name}%0A
Age: ${formData.age}%0A
Position: ${formData.position}%0A
Address: ${formData.address}%0A
Purpose: ${formData.purpose}`;

    // Detect mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}` // mobile app
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`; // desktop web

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Submit Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Enter your Collage/School"
          value={formData.position}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          required
        />

        <textarea
          name="purpose"
          placeholder="Enter your purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg"
          rows="3"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
