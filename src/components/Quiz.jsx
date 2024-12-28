import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// TODO: ADD HTML form validation - https://react-bootstrap.netlify.app/docs/forms/validation

export default function Quiz() {
        return (
                <div className="demo-card">
                        <h2 style={{ fontWeight: "300", color: "black", textShadow: "none" }}>Basic Quiz</h2>
                        <p>
                                <i>
                                        Get more customer interaction by adding a quiz components to your company's
                                        page. Engaging them will make them pique their interest and get them to stick
                                        around longer.
                                </i>
                        </p>
                        <ul>
                                <div key={"default-radio"}>
                                        <Form.Check
                                                type={"radio"}
                                                name={"group1"}
                                                id={"list-item-1"}
                                                label={"List item 1"}
                                        />
                                        <Form.Check
                                                type={"radio"}
                                                name={"group1"}
                                                id={"list-item-2"}
                                                label={"List item 2"}
                                        />
                                        <Form.Check
                                                type={"radio"}
                                                name={"group1"}
                                                id={"list-item-3"}
                                                label={"List item 3"}
                                        />
                                        <Form.Check
                                                type={"radio"}
                                                name={"group1"}
                                                id={"list-item-4"}
                                                label={"List item 4"}
                                        />
                                </div>
                        </ul>
                        <Button variant="light">Submit</Button>
                </div>
        );
}
