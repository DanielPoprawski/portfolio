import { Button, Form } from "react-bootstrap";

export default function Login() {
        return (
                <div className="demo-card">
                        <h2 style={{ fontWeight: "300", color: "black", textShadow: "none" }}>Basic Login form</h2>
                        <p>Upgrade your user experience with a login page</p>
                        <br />
                        <Form.Group className="mb-3">
                                <Form.Label>E-Mail</Form.Label>
                                <Form.Control type="email" placeholder="johndoe@youremail.net" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                        </Form.Group>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button variant="light">Log in</Button>
                                <Button variant="outline-dark"> Create Account</Button>
                        </div>
                        <br />
                        <a> Forgot password</a>
                </div>
        );
}
