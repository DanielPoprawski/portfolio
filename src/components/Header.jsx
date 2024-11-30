import { Navbar, Container, Nav } from "react-bootstrap";


export default function Header() {
        return (
        <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                        <Navbar.Brand href="#home">
                                <img src="./src/assets/DLogoCurvy.svg" width={"48px"} height={"48px"} />
                        </Navbar.Brand>
                        <Nav className="me-auto">
                                <Nav.Link href="#home">
                                        <b>Home</b>
                                </Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact Me</Nav.Link>
                        </Nav>
                </Container>
        </Navbar>
        )
}