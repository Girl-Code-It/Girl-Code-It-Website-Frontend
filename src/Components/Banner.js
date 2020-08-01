import React from "react";
import styles from "../Css/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import code from "../assets/code.svg";
import girl from "../assets/girl.svg";
import smallscreen from "../assets/smallscreen.png";

export default function Banner() {
  return (
    <Jumbotron className={styles.Jumbotron} fluid>
      <br />
      <br />
      <br />
      <Container className={styles.container}>
        <Row>
          <Col md={6} lg={7}>
            <h1 className={styles.heading}>
              Give wings to <br className={styles.align} /> your
              <span style={{ color: "#008dc8" }}> dreams </span>
            </h1>
            <div className={styles.rectangle} />
            <button className={styles.Button}>About Us</button>
            <br className={styles.set} />
            <br className={styles.align} />
            <br className={styles.align} />
            <button style={{ marginLeft: "80px" }} className={styles.Button}>
              Join our community
            </button>
          </Col>
          <Col md={6} lg={5}>
            <Image className={styles.code} src={code} alt="code" fluid />
            <Image className={styles.girl} src={girl} alt="girl" fluid />
          </Col>
        </Row>
      </Container>
      <Container className={styles.containersmall} fluid>
        <h1 style={{ textAlign: "center" }} className={styles.heading}>
          Give wings to <br className={styles.align} /> your
          <span style={{ color: "#008dc8" }}> dreams </span>
          <div className={styles.Rectsmall} />
        </h1>
        <Image
          className="justify-content-md-center"
          style={{ maxWidth: "90%" }}
          src={smallscreen}
          alt="girl code"
          fluid
        />
        <br />
        <br />
        <button className={styles.Button}>About Us</button>
        <button className={styles.Button}>Join GCI</button>
      </Container>
    </Jumbotron>
  );
}
