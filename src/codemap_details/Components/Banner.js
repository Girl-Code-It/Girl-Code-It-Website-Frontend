import React from "react";
import styles from "../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import girl from "../assets/girl.svg";

export default function Banner() {
  return (
    <Jumbotron className={styles.Jumbotron} fluid>
      <Container className={styles.container}>
        <Row>
          <Col sm={5} lg={5}>
            <h1 className={styles.heading}>
              <span className={styles.Code}>Code</span>
              <span className={styles.Map}>Map</span>
            </h1>
            <h2 className={styles.description}>
              Learn everything the <br className={styles.align} /> right way !
            </h2>
            <button className={styles.Button}>Explore</button>
          </Col>
          <Col sm={7} lg={7}>
            <Image className={styles.img} src={girl} alt="girl" fluid />
          </Col>
        </Row>
      </Container>
      <Container className={styles.containersmall} fluid>
        <h1 className={styles.heading}>
          <span className={styles.Code}>Code</span>
          <span className={styles.Map}>Map</span>
        </h1>
        <Image className={styles.img} src={girl} alt="girl" fluid />
        <h2 className={styles.h2}>Learn everything the right way !</h2>
        <button className={styles.Button}>Explore</button>
      </Container>
    </Jumbotron>
  );
}
