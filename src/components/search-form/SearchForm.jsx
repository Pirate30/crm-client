import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function SearchForm({
  handleSubmit,
  setStr,
  str,
  searchTIcket,
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Col sm={9}>
            <Form.Control
              name="SearchStr"
              placeholder="Search Subjects..."
              onChange={(e) => {
                setStr(e.target.value);
                searchTIcket(e.target.value);
              }}
              value={str}
            ></Form.Control>
          </Col>
          <Col>
            <Button className="info" type="submit">
              Search
            </Button>
          </Col>
        </Form.Group>
      </Form>
      {/* {console.log(str)} */}
    </div>
  );
}
