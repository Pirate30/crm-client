import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TicketTable({ data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Seq</th>
          <th>Subjects</th>
          <th>Table</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {data.length ? (
          data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>1</td>
            <td colSpan="4" className="text-center">
              No Tickets To Show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
