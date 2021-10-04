import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <Navbar collapseOnSelect varient="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} width="50px" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="dashboard">Dashboard</Nav.Link>
          <Nav.Link href="dashboard">Tickets</Nav.Link>
          <Nav.Link href="dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
