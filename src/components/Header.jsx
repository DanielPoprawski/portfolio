import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";
import BigButton from "./BigButton";

export default function Header() {
        return (
                // <Navbar bg="dark" data-bs-theme="dark">
                //         <Container>
                //                 <Navbar.Brand href="/">
                //                         <img src="./src/assets/DLogoCurvy.svg" width={"48px"} height={"48px"} />
                //                 </Navbar.Brand>
                //                 <Nav className="me-auto">
                //                         <Nav.Link as={Link} to="/">
                //                                 <b>Home</b>
                //                         </Nav.Link>
                //                         <Nav.Link as={Link} to="/about">
                //                                 About
                //                         </Nav.Link>
                //                         <Nav.Link as={Link} to="/contact">
                //                                 Contact Me
                //                         </Nav.Link>
                //                 </Nav>
                //         </Container>
                // </Navbar>

                <div className="header">
                        <Link to="/">
                                <BigButton text="HOME" />
                        </Link>
                        <Link to="/about">
                                <BigButton text="ABOUT" />
                        </Link>
                        <Link to="/contact">
                                <BigButton text="CONTACT" />
                        </Link>
                </div>
        );
}
