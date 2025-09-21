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

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Submit Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="text"
          name="position"
          placeholder="Enter your College/School"
          value={formData.position}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />

        <textarea
          name="purpose"
          placeholder="Enter your purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="4"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition text-lg"
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
};

export default WhatsAppForm;
