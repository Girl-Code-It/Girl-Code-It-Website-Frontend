import React from "react";
import { Card } from "react-bootstrap";
import styles from "../CSS/ReviewCard.module.css";

function ReviewCard(props) {
  return (
    <Card className={styles.card}>
      <div className={styles.imgWrapper}>
        <Card.Img src={props.data.img} className={styles.img} style = {{backgroundColor: `${props.data.backgroundColor}`}} />
      </div>
      <div style={{ flexGrow: 1 }}></div>
      <Card.Body className={styles.cardBody}>
        <div className={styles.flex}>
          <Card.Text className={styles.cardText}>
            {props.data.summary}
          </Card.Text>
        </div>
      </Card.Body>
      <div style={{ flexGrow: 1 }}></div>
      <Card.Title className={styles.cardTitle}>{props.data.name}</Card.Title>
    </Card>
  );
}

export default ReviewCard;
