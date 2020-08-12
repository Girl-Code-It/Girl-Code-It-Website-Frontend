import React from "react";
import styles from "../CSS/Query.module.css";
import query from "../assets/query.png";
import { Jumbotron, Col, Row, Image, Container } from "react-bootstrap";

export default function Query() {
  return (
    <div>
      <Jumbotron className={styles.jumbo} fluid>
        <Container className={styles.container}>
          <h1 className={styles.head}>
            What if you have a <span className={styles.query}>Query</span>?
          </h1>
          <Row>
            <Col lg={6}>
              <p className={styles.para}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                <br />
                <br />
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                <hr className={styles.line} />
              </p>
            </Col>
            <Col lg={6}>
              <Image src={query} className={styles.img} fluid />
            </Col>
          </Row>
        </Container>
        <Container className={styles.small}>
          <h1 className={styles.head}>
            What if you have a <span className={styles.query}>Query</span>?
          </h1>
          <Image src={query} className={styles.img} fluid />
          <p className={styles.para}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <br />
            <br />
            <hr className={styles.line} />
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
