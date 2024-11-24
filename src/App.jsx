import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";

function App() {
        return (
                <>
                        <Navbar bg="dark" data-bs-theme="dark">
                                <Container>
                                        <Navbar.Brand href="#home">
                                                <img src="./src/assets/DLogoCurvy.svg" width={"48px"} height={"48px"} />
                                        </Navbar.Brand>
                                        <Nav className="me-auto">
                                                <Nav.Link href="#home">
                                                        <b>Home</b>
                                                </Nav.Link>
                                                <Nav.Link href="#features">About</Nav.Link>
                                                <Nav.Link href="#pricing">Contact Me</Nav.Link>
                                        </Nav>
                                </Container>
                        </Navbar>

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
