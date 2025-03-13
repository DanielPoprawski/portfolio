import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import ContextWrapper from "./context/ContextWrapper.jsx";
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
                  <ContextWrapper>
                        <Header />
                        <Routes>
                              <Route element={<Home />} path="/" />
                        </Routes>
                        <Footer />
                  </ContextWrapper>
            </BrowserRouter>
      </StrictMode>
);
