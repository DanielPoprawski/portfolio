import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Header from "./components/Header";


function App() {
        return (
                <>
                        <Header/>

                        <div className="hero">
                                <h2>Hi, I am a web developer from Sarasota, Florida</h2>
                                <h3>
                                        I have been programming since I was a kid and I am very glad to finally be able
                                        to take my hobby and turn it into something I enjoy doing for a living, and
                                        benefitting other people and their businesses. Please take a moment to look at
                                        the some of the components below that I could make a part of your organization's
                                        website.
                                </h3>
                        </div>
                        <div className="hero" style={{ display: "flex" }}>
                                <Quiz />
                                <Login />
                        </div>
                </>
        );
}

export default App;
