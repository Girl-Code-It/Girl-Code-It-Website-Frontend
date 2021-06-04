import React from "react";
import styles from "../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
//import { Link } from "react-scroll";

export default function navbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>
        <a href="/" className={styles.Brand} style={{ fontSize: "35px" }}>
          Girl
          <span style={{ color: "#008dc8" }}> Code </span>
          It
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"  className={styles.Links}>
        <Nav className="ml-auto">
          <Nav.Link href="/#home"  >Home</Nav.Link>
          <Nav.Link href="/#about" >About Us</Nav.Link>
          <Nav.Link href="/#impact" >What we Do?</Nav.Link>
          <Nav.Link href="/#reviews" >Reviews</Nav.Link>
          <Nav.Link href="/#faqs" >FAQs</Nav.Link>
          <Nav.Link href="/#contact" >Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
