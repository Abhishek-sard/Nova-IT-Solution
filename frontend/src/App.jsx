import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Hero from "./Components/HomePage/Hero";
import Cart from "./Components/HomePage/Cart";
import ChooseUs from "./Components/HomePage/ChooseUs";
import TrustOrganization from "./Components/HomePage/TrustOrganization";

// Home page
function Home() {
  return(
  <>
  <Hero/>
  <Cart/>
  <ChooseUs/>
  <TrustOrganization/>
  </>
  )
}


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
