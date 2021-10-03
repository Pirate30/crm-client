import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login({
  setEmail,
  setPassword,
  handleSubmit,
  setFormtype,
}) {
  const handleForgot = () => {
    setFormtype("reset");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Login</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
                required
              />
            </Form.Group>
            <Button className="mt-2" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={handleForgot}>
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
}
