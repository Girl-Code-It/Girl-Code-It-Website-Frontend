import React from "react";
import { Card } from "react-bootstrap";
import styles from "../CSS/MilestoneCard.module.css";

export default function MilestoneCard(props) {
  return (
    <Card>
      <Card.Body style={{ borderBottom: "1px solid lightgray" }}>
        <Card.Title style={{ marginBottom: 0 }}>
          Milestone {props.id}
        </Card.Title>
      </Card.Body>
      <Card.Body className={styles.flex}>
        <div>
          <Card.Img src={props.imgSrc} alt="" className={styles.img} />
        </div>
        <div>
          <Card.Text className={styles.cardText}>
            <div>Topic: {props.topic}</div>
            <div>Duration: {props.duration}</div>
            <div>Resources: {props.resources}</div>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}
