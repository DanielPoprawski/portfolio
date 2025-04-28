import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import ContextWrapper from "./context/ContextWrapper.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "../index.css";
import StockVideo from "/public/Stockvideo.mp4";
import StockVideo2 from "/public/Stockvideo2.mp4";
import StockVideoWEBM from "/public/Stockvideo.webm";

createRoot(document.getElementById("root")).render(
      <StrictMode>
            <BrowserRouter>
                  <video lazy autoPlay muted loop id="background-video" style={{ zIndex: "-1" }} className=" object-cover w-full h-full top-0 fixed">
                        <source lazy src={StockVideoWEBM} type="video/mp4" className="object-cover w-full h-full absolute" />
                        <source lazy src={StockVideo2} type="video/mp4" className="object-cover w-full h-full absolute" />
                        <source lazy src={StockVideo} type="video/mp4" className="object-cover w-full h-full absolute" />
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
