import { BrowserRouter, Routes, Route } from "react-router-dom";



import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Services from './Pages/Header/Services'
import AboutUs from "./Pages/Header/AboutUs";
import Contactus from "./Pages/Header/Contactus";
import Careers from "./Pages/Header/Careers";
import Landing from "./Pages/LandingPage/Landing";
import SocialMedia from "./Pages/services/SocialMedia";
import WebMobile from "./Pages/services/WebMobile";
import DataAnalytics from "./Pages/services/DataAnalytics";
import Privacy from "./Pages/footer/Privacy";
import TermsConditions from "./Pages/footer/TermsConditions";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services/social" element={<SocialMedia />} />
            <Route path="/services/web-mobile" element={<WebMobile />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
