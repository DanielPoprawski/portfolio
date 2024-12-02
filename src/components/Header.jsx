import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router";


export default function Header() {
        return (
        <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                        <Navbar.Brand href="/">
                                <img src="./src/assets/DLogoCurvy.svg" width={"48px"} height={"48px"} />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                                <Nav.Link>
                                        <Link to="/"><b>Home</b></Link>
                                </Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/contact">Contact Me</Link></Nav.Link>
                        </Nav>
                </Container>
        </Navbar>
        )
}