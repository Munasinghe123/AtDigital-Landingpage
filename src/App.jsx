import { BrowserRouter, Routes, Route } from "react-router-dom";



import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Services from './Pages/Services'
import AboutUs from "./Pages/AboutUs";
import Contactus from "./Pages/Contactus";
import Careers from "./Pages/Careers";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/careers" element={<Careers />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
