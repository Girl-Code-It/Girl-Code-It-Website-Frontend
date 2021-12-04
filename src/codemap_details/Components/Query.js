import React from "react";
import styles from "../CSS/Query.module.css";
import query from "../assets/query.png";
import { Jumbotron, Col, Row, Image, Container } from "react-bootstrap";

export default function Query() {
  return (
    <div>
      <Jumbotron className={styles.jumbo} fluid>
        <Container className={styles.container}>
          <h1 className={styles.head}>
            What if you have a <span className={styles.query}>Doubt</span>?
          </h1>
          <Row>
            <Col lg={6}>
              <p className={styles.para}>
                Our discord server is a community-driven place to discuss any
                doubts while you learn to code. Any other input you want to give
                will always be taken into consideration. So never hesitate to
                speak up if you have something interesting to say!
                <br />
                <br />
                <hr className={styles.line} />
              </p>
              <a
                href="https://discordgci.netlify.app/"
                className={styles.Button}
              >
                Ask here
              </a>
            </Col>
            <Col lg={6}>
              <Image src={query} className={styles.img} fluid />
            </Col>
          </Row>
        </Container>
        <Container className={styles.small}>
          <h1 className={styles.head}>
            What if you have a <span className={styles.query}>Doubt</span>?
          </h1>
          <Image src={query} className={styles.img} fluid />
          <p className={styles.para}>
            Our discord server is a community-driven place to discuss any doubts
            while you learn to code. Any other input you want to give will
            always be taken into consideration. So never hesitate to speak up if
            you have something interesting to say!
            <br />
            <br />
            <hr className={styles.line} />
          </p>
          <a href="https://discordgci.netlify.app/" className={styles.Button}>
            Ask here
          </a>
        </Container>
      </Jumbotron>
    </div>
  );
}
