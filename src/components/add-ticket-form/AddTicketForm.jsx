import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Jumbotron } from "reactstrap";

export default function AddTicketForm({
  handleSubmit,
  setSubject,
  setDetails,
  setIssueDate,
}) {
  return (
    <Jumbotron>
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="enter the subject"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Date:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issuedDate"
              onChange={(e) => setIssueDate(e.target.value)}
              placeholder="enter date"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Details:</Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              name="details"
              rows="5"
              onChange={(e) => setDetails(e.target.value)}
              placeholder="enter details"
              required
            />
          </Col>
        </Form.Group>
        <Col sm={9}>
          <Button variant="info" className="d-block mt-2" block type="submit">
            Add
          </Button>
        </Col>
      </Form>
    </Jumbotron>
  );
}
