import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function PassReset({
  setEmail,
  email,
  handleSubmit,
  setFormtype,
}) {
  const handleBackToLogin = () => {
    setFormtype("login");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                value={email}
                required
              />
            </Form.Group>
            <Button className="mt-2" type="submit">
              Reset
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" onClick={handleBackToLogin}>
            Back To Login
          </a>
        </Col>
      </Row>
    </Container>
  );
}
