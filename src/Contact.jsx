import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Contact() {
      const [data, setData] = useState({
            name: "",
            email: "",
            message: "",
      });

      const handleChange = (e) => {
            setData({
                  ...data,
                  [e.target.name]: e.target.value,
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(data);
            setData({
                  name: "",
                  email: "",
                  message: "",
            });
      };

      return (
            <>
                  <Header />
                  <div className="hero" style={{ flexDirection: "column", color: "black" }}>
                        <h2 style={{ color: "black", textShadow: "none" }}>Contact:</h2>
                        <br />
                        <p>
                              If you would like to contact me, please leave a message here with your name, email (or
                              phone number) and what services I may provide for you and I will contact you as soon as
                              possible
                        </p>
                        <br />
                        <br />
                        {/* <Form onSubmit={handleSubmit} className="contact-form">
                              <InputGroup controlId="formName">
                                    <InputGroup.Text>Name</InputGroup.Text>
                                    <Form.Control
                                          type="text"
                                          name="name"
                                          value={data.name}
                                          onChange={handleChange}
                                          placeholder="John Doe"
                                    />
                              </InputGroup>
                              <br />

                              <InputGroup controlId="formEmail">
                                    <InputGroup.Text>Email</InputGroup.Text>
                                    <Form.Control
                                          type="email"
                                          name="email"
                                          value={data.email}
                                          onChange={handleChange}
                                          placeholder="johndoe@youremail.net"
                                    />
                              </InputGroup>
                              <br />

                              <InputGroup controlId="formMessage">
                                    <Form.Control
                                          as="textarea"
                                          rows={3}
                                          name="message"
                                          value={data.message}
                                          onChange={handleChange}
                                          placeholder="Enter your message"
                                    />
                              </InputGroup>
                              <br />

                              <Button variant="primary" type="submit">
                                    Submit
                              </Button>
                        </Form> */}
                  </div>
                  <Footer />
            </>
      );
}
