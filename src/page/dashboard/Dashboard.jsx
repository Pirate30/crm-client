import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <Button
            variant="info"
            style={{ fontsize: "2rem", padding: "10px 30px" }}
          >
            New Ticket
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
