import React from "react";
import { Card } from "react-bootstrap";
import styles from "../CSS/TestimonialCard.module.css";

function TestimonialCard(props) {
  return (
    <Card className={styles.card}>
      <div className={styles.imgWrapper}>
        <Card.Img src={props.user.imgUrl} className={styles.img} />
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <Card.Body className={styles.cardBody}>
        <div className={styles.flex}>
          <Card.Text className={styles.cardText}>
            {props.user.summary}
          </Card.Text>
        </div>
      </Card.Body>
      <div style={{ flexGrow: 1 }}></div>
      <Card.Title className={styles.cardTitle}>{props.user.name}</Card.Title>
    </Card>
  );
}

export default TestimonialCard;
