import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import data from "../../data.json";

export default function TicketList() {
  const [str, setStr] = useState();
  const [dispTicket, setDispTicket] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("str..", str);
  };

  const searchTIcket = (sttr) => {
    const displayTickets = data.filter((row) =>
      row.subject.toLocaleLowerCase().includes(sttr.toLowerCase())
    );
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page="Ticket List" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm
            setStr={setStr}
            handleSubmit={handleSubmit}
            str={str}
            searchTIcket={searchTIcket}
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <TicketTable data={dispTicket} />
      </Row>
    </Container>
  );
}
