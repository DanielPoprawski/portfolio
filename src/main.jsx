import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
                        className="absolute object-cover w-full h-full"
                  >
                        <source
                              src="src/assets/Stockvideo.mp4"
                              type="video/mp4"
                              className="object-cover w-full h-full absolute"
                        />
                  </video>
                  <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Contact />} path="/contact" />
                        <Route element={<About />} path="/about" />
                  </Routes>
            </BrowserRouter>
      </StrictMode>
);
