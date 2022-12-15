import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
import Logo from "../images/demo-logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <section className="nav-bar">
      <Navbar bg="light" expand="lg" className="navbar" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#banner">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
