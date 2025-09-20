import React from "react";

import Courses from "./Courses";
import Blog from "./Blog";
import Gallery from "./Gallery";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Admin Dashboard
      </h1>

      {/* Courses */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Courses</h2>
        <Courses />
      </section>

      {/* Blog */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <Blog />
      </section>

      {/* Gallery */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <Gallery />
      </section>
    </div>
  );
};

export default Dashboard;
