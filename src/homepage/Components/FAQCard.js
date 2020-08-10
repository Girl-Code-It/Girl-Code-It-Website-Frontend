import React from "react";
import styles from "../CSS/FAQS.module.css";
import { Container, Row, Col } from "react-bootstrap";
import arrow from "../Assets/arrow.png";
import arrowup from "../Assets/arrowup.png";

export default function FAQCard(props) {
  const { open } = props.item;

  return (
    <div key={props.item.id} onClick={() => props.handleChange(props.item.id)}>
      <Container>
        <Row className={`${styles.faqs}`}>
          <Col md={10} sm={10} xs={10}>
            <div className={`${styles.faqQuestion}`}>{props.item.question}</div>
          </Col>
          <Col lg={2} md={2} sm={2} xs={2}>
            <img
              src={open ? arrowup : arrow}
              className={`${styles.image}`}
              alt="arrow"
              height="18px"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <div
              className={`${open ? styles.faqAnsweropen : styles.faqAnswer}`}
            >
              {props.item.answer}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
