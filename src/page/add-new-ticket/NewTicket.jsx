import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

export default function NewTicket() {
  const [subject, setSubject] = useState("");
  const [issueDate, setIssueDate] = useState(null);
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // something
    console.log(subject, issueDate, details);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleSubmit={handleSubmit}
            setSubject={setSubject}
            setDetails={setDetails}
            setIssueDate={setIssueDate}
          />
        </Col>
      </Row>
    </Container>
  );
}
