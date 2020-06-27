import React from "react";
import { Jumbotron, Container, Image, Row, Col } from "react-bootstrap";
import styles from "../Css/AboutUs.module.css";
import AboutUsImg from "../Assets/AboutUsImg.png";

export default function AboutUs() {
  return (
    <Jumbotron style={{ backgroundColor: "#ffffff" }} fluid>
      <Container className={styles.align}>
        <h1>
          <span className={styles.About}>About</span>
          <span className={styles.Us}>Us</span>
        </h1>
        <Row>
          <Col md={"auto"} lg={7}>
            <Image src={AboutUsImg} fluid />
          </Col>
          <Col md={"auto"} lg={5}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <br />
            <br />
            <div className={styles.rectangle} />
            <button style={{ borderRadius: "50px" }}>Know More</button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
