import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import MessageHistory from "../../components/message-history/MessageHistory";
import data from "../../data.json";

// const ticket = data[0];
export default function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState("");
  const [reply, setReply] = useState("");
  //   console.log("reply is...", reply);

  const handleReply = (e) => {
    e.preventDefault();
    //
    console.log(reply);
    setReply("");
  };

  useState(() => {
    // setTicket(id);
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id);
      if (data[i].id == id) {
        setTicket(data[i]);
        continue;
      }
    }
  }, [id, data]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket"></BreadCrumb>
        </Col>
      </Row>
      <Row>
        <Col className="font-weight-bold">
          <div className="subject">Subject: {ticket.subject} </div>
          <div className="date">IssuedDate: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status} </div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <Col>
          <Form onSubmit={handleReply}>
            <Form.Label>Reply</Form.Label> <br />
            <Form.Text>
              Please reply your message or update the ticket
            </Form.Text>
            <Form.Control
              onChange={(e) => setReply(e.target.value)}
              name="Detail"
              row="5"
              as="textarea"
              value={reply}
            ></Form.Control>
            <div
              className="text-right"
              style={{
                textAlign: "right",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <Button variant="info" type="submit">
                Reply
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
