import React from "react";
import styles from "../Css/Navbar.module.css";
import { Navbar, Nav } from 'react-bootstrap';

export default function navbar() {
  return (
    <Navbar fixed='top' bg='light' expand="lg" className={styles.NavBar}>
      <Navbar.Brand className={styles.Logo}>Girl <span style={{ color: '#008dc8' }}>Code </span>It</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>
          <Nav.Link active href="/">Home</Nav.Link>
          <Nav.Link href="/">About Us</Nav.Link>
          <Nav.Link href="/">What we Do?</Nav.Link>
          <Nav.Link href="/">CodeTracks</Nav.Link>
          <Nav.Link href="/">FAQs</Nav.Link>
          <Nav.Link href="/">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
