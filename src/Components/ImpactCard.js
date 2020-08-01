import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "../Css/Impact.module.css";

export default function ImpactCard(props) {
  return (
    <div style={{ width: "510px" }}>
      <Card
        style={{
          backgroundColor: "#f4f5f6",
          borderRadius: "40px",
          border: "1px solid #707070",
        }}
        className={styles.one}
      >
        <Col xs={6} md={6} lg={6}>
          <Card.Img
            className={styles.girls}
            data-assetindex="2"
            src={require("../assets/" + props.impact.imgUrl)}
            alt="image1"
          />
        </Col>
        <Card.Body className={styles.content}>
          <Card.Title style={{ fontSize: "125%", width: "110%" }}>
            {props.impact.name}
          </Card.Title>
          <hr className={styles.line} />

          <Card.Text>
            {props.impact.para1} <br />
            {props.impact.para2}
          </Card.Text>
          <button className={styles.knowMore}>Know More</button>
        </Card.Body>
      </Card>
    </div>
  );
}
