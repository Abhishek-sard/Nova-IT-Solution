import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/HomePage/Hero";
import Cart from "./Components/HomePage/Cart";
import ChooseUs from "./Components/HomePage/ChooseUs";
import TrustOrganization from "./Components/HomePage/TrustOrganization";
import OurServices from "./Components/HomePage/OurServices";
import TestMonial from "./Components/HomePage/TestMonial";
import AllCourses from "./Components/AllCourses/AllCourses";
import Story from "./Components/AboutUs/Story";
import Background from "./Components/AboutUs/Background";
import Team from "./Components/AboutUs/Team";
import Blog from "./Components/BlogsPage/Blog";
import WhatsAppForm from "./Components/ContactPage/WhatAppForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import ImageCollection from "./Components/ImagePage/ImageCollection";
import Login from "./LoginPage/Login"
// Home page
function Home() {
  return (
    <>
      <Hero />
      <Cart />
      <ChooseUs />
      <TrustOrganization />
      <OurServices />
      <TestMonial />
    </>
  );
}

// All Courses page
function Courses() {
  return <AllCourses />;
}

// About Us page
function AboutUs() {
  return (
    <>
      <Story />
      <Background />
      <Team />
    </>
  );
}

// Blog page
function BlogsPage() {
  return <Blog />;
}

// Contact page
function ContactPage() {
  return <WhatsAppForm />;
}

// Gallery page
function ImagePage() {
  return <ImageCollection />;
}

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<ImagePage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
