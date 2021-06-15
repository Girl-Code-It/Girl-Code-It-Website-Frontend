import React from "react";
import styles from "../CSS/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

export default function Navbarr() {
  const history = useHistory();

  function handleClick(elementId) {
    history.push(`/`);

    let element = window.document.getElementById(elementId);
    setTimeout(() => {
      let date = new Date();
      let currentTime = date.getTime();
      while (!element) {
        element = window.document.getElementById(elementId);
        if (date.getTime() - currentTime > 200) {
          break;
        }
      }

      element && element.scrollIntoView();

    })
  }
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
      <Navbar.Collapse id="responsive-navbar-nav" className={styles.Links}>
        <Nav className="ml-auto">
          <Link onClick={() => handleClick("home")} offset={-90} duration={1000} >Home</Link>
          <Link onClick={() => handleClick("impact")} offset={-90} duration={1000} >What we Do?</Link>
          <Link onClick={() => handleClick("about")} offset={-90} duration={1000} >About Us</Link>
          <Link onClick={() => handleClick("reviews")} offset={-90} duration={1000} >Reviews</Link>
          <Link onClick={() => handleClick("faqs")} offset={-90} duration={1000} >FAQs</Link>
          <Link onClick={() => handleClick("contact")} offset={-90} duration={90000} >Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
