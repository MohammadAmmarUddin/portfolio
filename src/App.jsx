import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import WhatMadeMeUnique from "./components/WhatMadeMeUnique.jsx";
import ScrollToTop from "react-scroll-to-top";
import Publications from "./components/Publications.jsx";

const Home = () => {
  return (
    <>
      <Header />

      {/* Sections with controlled width */}
      <div className="max-w-6xl mx-auto px-6">
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Publications />
        <Contact />
      </div>
    </>
  );
};

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-[#060b1a] text-white min-h-screen overflow-x-hidden">
      {/* Navbar only on Home */}
      {isHomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whatmademeunique" element={<WhatMadeMeUnique />} />
      </Routes>

      {/* Footer only on Home */}
      {isHomePage && <Footer />}

      {/* Scroll To Top only on Home */}
      {isHomePage && (
        <ScrollToTop
          className="hidden lg:flex items-center justify-center"
          color="black"
          smooth
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#00eeff",
            borderRadius: "50%",
            boxShadow: "0 0 30px #00eeff",
          }}
        />
      )}
    </div>
  );
}

export default App;
