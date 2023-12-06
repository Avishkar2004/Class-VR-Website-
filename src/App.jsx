// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Aos, { init } from "aos";
import aos from "aos/dist/aos.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import About from "./components/About";
import Companies from "./components/Companies";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [showComponents, setShowComponents] = useState(true);

  useEffect(() => {
    init({
      duration: 2500,
      delay: 400,
    });
  });

  const handleContactPage = () => {
    setShowComponents(false);
  };

  return (
    <Router>
      <div className="bg-[#7493b1] relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex">
        <Header setNavMobile={setNavMobile} />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                showComponents ? (
                  <div>
                    <Banner />
                    <div
                      className={`${
                        navMobile ? "right-0" : "-right-full"
                      } fixed top-0 bottom-0 w-48 transition-all`}
                    >
                      <NavMobile setNavMobile={setNavMobile} />
                    </div>
                    <div>
                      <Experience />
                      <Video />
                      <Headsets />
                      <Testimonial />
                      <Explore />
                      <Footer />
                    </div>
                  </div>
                ) : null
              }
            />
            <Route
              path="/contact"
              element={<Contact />}
              onStart={handleContactPage}
            />
            <Route path="/register" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
