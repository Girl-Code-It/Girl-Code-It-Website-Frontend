import React from "react";
import styles from "../CSS/WhatToPay.module.css";
import Pay from "../assets/Pay.png";
import { Jumbotron, Col, Row,Image, Container } from "react-bootstrap";
export default function WhatToPay() {
   return (
    <div>
      <Jumbotron className={styles.jumbo} fluid>
        <Container className={styles.container}>
          <h1 className={styles.head}>
            What do you need to <span className={styles.blue}>Pay</span>?
          </h1>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12}>
            <Image src={Pay} className={styles.img} fluid />
              </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <p className={styles.para}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                <br />
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
              </p>
              <hr className={styles.line} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

