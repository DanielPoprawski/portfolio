import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Quiz() {
        return (
                <div className="demo-card">
                        <h3>
                                <b>A basic quiz box</b>
                        </h3>
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
                        <Button variant="dark">Submit</Button>
                </div>
        );
}
