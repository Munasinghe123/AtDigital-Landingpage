import { BrowserRouter, Routes, Route } from "react-router-dom";



import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Services from './Pages/Services'
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
