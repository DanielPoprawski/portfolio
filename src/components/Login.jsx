import { Button, Form } from "react-bootstrap";

export default function Login() {
        return (
                <div className="demo-card">
                        <h2>
                                <b>Basic Login form</b>
                        </h2>
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
                        <Button variant="dark"> Log in </Button>
                        <Button variant="outline-dark"> Create Account</Button>
                        <br />
                        <a> Forgot password</a>
                </div>
        );
}
