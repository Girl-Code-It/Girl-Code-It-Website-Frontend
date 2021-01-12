import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styles from "../CSS/Banner.module.css";
import Img from "../assets/image.png";

export default function Banner(props) {
  return (
    <Jumbotron style={{ backgroundColor: "#fff" }}>
      <Row className={styles.container}>
        <Col>
          <div>
            <h1 className={styles.heading}>
              <span style={{ color: "#008dc8" }}>{props.title || "C++"}</span>{" "}
              for Beginners
            </h1>
          </div>
          <button className={styles.button}>View Content</button>
          <button className={styles.button}>View Milstones</button>
        </Col>
        <Col>
          <img style={{ maxWidth: "100%", width: "100%" }} src={Img} alt="" />
        </Col>
      </Row>
    </Jumbotron>
  );
}
