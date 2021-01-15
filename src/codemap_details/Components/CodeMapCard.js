import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "../CSS/CodeMapCard.module.css";

function finalUri(id) {
  // when changing the `/onecodemap` page, change it here as well.
  return `/onecodemap?id=${encodeURIComponent(id)}`;
}

export default function CodeMapCard(props) {
  return (
    <Card className={`${styles.card} ${props.className}`}>
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
            <Card.Title className = {styles.Title}>{props.codeMap.name}</Card.Title>
            <a
              href={finalUri(props.codeMap.onecodemapLink) || "#"}
              className={styles.button}
            >
              Know More
            </a>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
