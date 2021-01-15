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
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#impact">What we Do?</a>
          <a href="/#faqs">FAQs</a>
          <a href="/#contact">Contact Us</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
