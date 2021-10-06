import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import TicketTable from "../../components/ticket-table/TicketTable";
import data from "../../data.json";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5    ">
          <Link to="/add-ticket">
            <Button
              variant="info"
              style={{ fontsize: "2rem", padding: "10px 30px" }}
            >
              New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5">
          <div>Total Tickets:100</div>
          <div>Pending Tickets:10</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Tickets</Col>
      </Row>
      <Row class="recent-ticket">
        <TicketTable data={data} />
      </Row>
    </Container>
  );
}
