import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <>
    <Blog/>
    </>
  )
}


//Contact page
function ContactPage(){
  return(
    <>
    <WhatsAppForm/>
    
    </>
  )
}


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
