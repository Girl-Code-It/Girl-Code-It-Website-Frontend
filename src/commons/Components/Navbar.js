import React from "react";
import styles from "../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

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
          <Link to="home" offset={-90} duration={1000} >Home</Link>
          <Link to="impact" offset={-200} duration={1000} >What we Do?</Link>
          <Link to="about" offset={-90} duration={1000} >About Us</Link>
          <Link to="reviews" offset={-90} duration={1000} >Reviews</Link>
          <Link to="faqs" offset={-90} duration={1000} >FAQs</Link>
          <Link to="contact" offset={-90} duration={1000} >Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
