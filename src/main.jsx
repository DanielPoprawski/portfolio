import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
        <StrictMode>
                <BrowserRouter>
                        <Routes>
                                <Route element={<Home />} path="/" />
                                <Route element={<Contact />} path="/contact" />
                        </Routes>
                </BrowserRouter>
        </StrictMode>
);
