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
  return (
    <>
      <AllCourses />
    </>
  );
}

//About Us
function AboutUs(){
  return(
    <>
    <Story/>
    <Background/>
    <Team/>
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
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
