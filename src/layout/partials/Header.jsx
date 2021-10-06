import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../assets/logo.png";

export default function Header() {
  const history = useHistory();
  const logout = () => {
    history.push("/");
  };

  return (
    <Navbar collapseOnSelect varient="dark" bg="info" expand="md">
      <Navbar.Brand>
        <img src={logo} width="50px" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          {/* <Router> */}
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/logout">Logout</Link> */}
          {/* </Router> */}
          <LinkContainer to="/dashboard">
            <Nav.Link>DashBoard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
