import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "../index.css";

createRoot(document.getElementById("root")).render(
      <StrictMode>
            <BrowserRouter>
                  <video
                        autoPlay
                        muted
                        loop
                        id="background-video"
                        style={{ zIndex: "-1" }}
                        className=" object-cover w-full h-full top-0 fixed"
                  >
                        <source
                              src="src/assets/Stockvideo.mp4"
                              type="video/mp4"
                              className="object-cover w-full h-full absolute"
                        />
                  </video>
                  {/* <Header /> */}
                  <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<About />} path="/about" />
                  </Routes>
                  <Footer />
            </BrowserRouter>
      </StrictMode>
);
