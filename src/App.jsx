import { Routes, Route } from "react-router-dom";

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

const Home = () => (
  <>
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatmademeunique" element={<WhatMadeMeUnique />} />
        </Routes>
      </div>

      <Footer />

      <ScrollToTop
        className="hidden lg:flex items-center justify-center"
        color="black"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#00eeff",
          borderRadius: "50%",
          boxShadow: "0 0px 30px #00eeff",
        }}
        smooth
      />
    </>
  );
}

export default App;
