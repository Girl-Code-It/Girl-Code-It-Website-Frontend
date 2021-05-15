import React from "react";
import styles from "../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import code from "../assets/code.svg";
import girl from "../assets/girl.svg";
import smallscreen from "../assets/smallscreen.png";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <Container className={styles.container}>
        <Row>
          <Col md={6} lg={7}>
            <h1 className={styles.heading}>
              Give wings to <br className={styles.align} /> your
              <span style={{ color: "#008dc8" }}> dreams </span>
            </h1>
            <div className={styles.rectangle} />
            <Link to="impact" offset={-200} duration={1000} ><a href = "#impact" className = {styles.Button}> 
              Our courses
            </a></Link>
            <br className={styles.set} />
            <br className={styles.align} />
            <br className={styles.align} />
            <a href = "https://docs.google.com/forms/d/e/1FAIpQLSccNJQ-1Jf8T6JVLmCr_evXRVGqKO6SBJNyZ5rdRyMqPzMHHg/viewform" className={styles.Button} style = {{marginLeft: "80px"}}>
              Volunteer
            </a>
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
        <a href = "#about" className = {styles.Button}> 
          About Us
        </a>
        <a href = "https://docs.google.com/forms/d/e/1FAIpQLSccNJQ-1Jf8T6JVLmCr_evXRVGqKO6SBJNyZ5rdRyMqPzMHHg/viewform/" className={styles.Button}>
          Volunteer
        </a>
      </Container>
    </Jumbotron>
  );
}
