import React from "react";
import styles from "../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import code from "../assets/code.svg";
import girl from "../assets/girl.svg";
import smallscreen from "../assets/smallscreen.png";
import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaRegLightbulb,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export default function Banner() {
  return (
    <Jumbotron id="home" className={styles.Jumbotron} fluid>
      <div className={styles.SocialLinks1}>
        <div className={styles.divshift1}>
          <a
            href="https://www.linkedin.com/company/14568052/admin/"
            target="_blank"
            className={styles.Shift1}
          >
            {" "}
            <FaLinkedinIn />{" "}
          </a>
        </div>
        <div className={styles.divshift1}>
          <a
            href="https://www.instagram.com/girlcodeit/"
            target="_blank"
            className={styles.Shift1}
          >
            {" "}
            <FaInstagram />{" "}
          </a>
        </div>
        <div className={styles.divshift1}>
          <a
            href="https://discordgci.netlify.app"
            target="_blank"
            className={styles.Shift1}
          >
            {" "}
            <FaDiscord />{" "}
          </a>
        </div>
        <div className={styles.divshift1}>
          <a
            href="https://twitter.com/GirlCodeIt1"
            target="_blank"
            className={styles.Shift1}
          >
            {" "}
            <FaTwitter />{" "}
          </a>
        </div>
        <div className={styles.divshift1}>
          <a
             href="https://github.com/Girl-Code-It"
            target="_blank"
            className={styles.Shift1}
          >
            {" "}
            <FaGithub />{" "}
          </a>
        </div>
      </div>
      <Container className={styles.container}>
        <Row>
          <Col md={6} lg={7}>
            <h1 className={styles.heading}>
              Give wings <br className={styles.align} /> to your
              <span style={{ color: "#008dc8" }}> dreams </span>
            </h1>
            <div className={styles.rectangle} />
            <a className={styles.Button}>
              <Link
                to="impact"
                offset={-200}
                duration={1000}
                style={{ color: "white" }}
              >
                Our courses
              </Link>
            </a>
            <br className={styles.set} />
            <br className={styles.align} />
            <br className={styles.align} />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSccNJQ-1Jf8T6JVLmCr_evXRVGqKO6SBJNyZ5rdRyMqPzMHHg/viewform"
              className={styles.Button}
              style={{ marginLeft: "80px" }}
            >
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
          Give wings <br className={styles.align} /> to your
          <span style={{ color: "#008dc8" }}> dreams </span>
          <div className={styles.Rectsmall} />
        </h1>
        <Image
          className="justify-content-md-center img"
          style={{ maxWidth: "90%" }}
          src={smallscreen}
          alt="girl code"
          fluid
        />
        <br />
        <br />
        <a href="#about" className={styles.Button}>
          About Us
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSccNJQ-1Jf8T6JVLmCr_evXRVGqKO6SBJNyZ5rdRyMqPzMHHg/viewform/"
          className={styles.Button}
        >
          Volunteer
        </a>
      </Container>
    </Jumbotron>
  );
}
