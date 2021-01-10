import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import styles from "../CSS/CodeMapCard.module.css";

export default function CodeMapCard(props) {
  return (
    <Card
      className={`${styles.card} ${props.className}`}
    >
      {console.log("PROPS", props.className || "")}
      <div className={styles.topbar}></div>
      <Row className="align-items-center">
        <Col xs="auto" style={{ textAlign: "center" }}>
          <Card.Body style={{ paddingRight: 0 }}>
            <Card.Img
              variant="bottom"
              className={styles.img}
              src={props.codeMap.imgUrl}
            />
          </Card.Body>
        </Col>
        <Col xs="auto">
          <Card.Body style={{ paddingLeft: 0 }}>
            <Card.Title>{props.codeMap.name}</Card.Title>
            <Button
              style={{ backgroundColor: "#008DC8", borderRadius: "1.2rem" }}
            >
              Know More
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
