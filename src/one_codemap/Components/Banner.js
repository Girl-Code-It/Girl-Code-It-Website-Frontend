import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styles from "../CSS/Banner.module.css";
// import Img from "../assets/cpp.png";

export default function Banner(props) {
  return (
    <Jumbotron style={{ maxWidth: "50rem", margin: "auto" }}>
      <Row className={styles.container}>
        <Col>
          <div>
            <h1 className={styles.heading}>
              <span style={{ color: "#008dc8" }}>{props.title}</span>
            </h1>

            <hr className={styles.hr} />
          </div>

          {/* large screens */}
          <p className={styles.buttonWrapper}>
            <a href="/codemaps" className={styles.button}>
              Go Back
            </a>
            <a href="#content" className={styles.button}>
              View Content
            </a>
          </p>
        </Col>
        <Col className={styles.img}>
          <img
            style={{ maxWidth: "100%", width: "100%" }}
            src={props.img}
            alt=""
          />

          {/* small screens */}
          <p className={`${styles.buttonWrapper} ${styles.vp__lt__1000px}`}>
            <a href="/codemaps" className={styles.button}>
              Go Back
            </a>
            <a href="#content" className={styles.button}>
              View Content
            </a>
          </p>
        </Col>
      </Row>

      <p>
        With every milestone, You learn something new, you get better at
        something. Our reason for following a milestone-based approach is
        two-fold - to make distinctions between different topics and to help you
        see how far you have come. Every milestone has been carefully curated
        and designed with the best practices and standards in mind. Each of them
        consists of the best resources and the most important questions that
        need to be practiced for complete understanding of a topic.
      </p>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />

      <br className={props.submit !== "" ? styles.Display : styles.noDisplay} />
      <br className={props.submit !== "" ? styles.Display : styles.noDisplay} />

      <a
        href={props.submit}
        className={props.submit !== "" ? styles.button : styles.noDisplay}
      >
        Submit Solutions here
      </a>

      <a
        href={props.doubt}
        target="_blank"
        className={props.submit !== "" ? styles.button : styles.noDisplay}
      >
        Discuss Doubts here
      </a>
    </Jumbotron>
  );
}
