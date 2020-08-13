import React from "react";
import styles from "../CSS/OneCodeMap.module.css";
import { Jumbotron, Container, Image, Row, Col } from "react-bootstrap";
import codeMap from "../assets/Group2.svg";
import lang from "../assets/icons8-c++-1.svg";

export default function OneCodeMap() {
  return (
    <React.Fragment>
      <Jumbotron fluid className={styles.main}>
        <Row className={styles.firstRow}>
          <Col xs="12" md="12" lg="6">
            <h1 className={styles.heading}>
              <span style={{ color: "#008DC8" }}>C++</span> for Beginners
            </h1>
            {/* <h1 className={styles.heading}>Beginners</h1> */}
            <div className={styles.divider} />
            <Row>
              <Col xs="12" md="12" className={styles.btnContainer}>
                <button className={styles.knowMore}>Explore</button>
                <button className={styles.knowMore}>Enroll Now</button>
              </Col>
            </Row>
          </Col>
          <Image fluid src={codeMap} alt="code" className={styles.code} />
          <Image fluid src={lang} alt="lang" className={styles.lang} />
        </Row>
        <Row>
          <Col xs="12">
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui.
            </p>
            <br />
            <p className={styles.description}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <br />
            <h3>Pre-requisites</h3>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </React.Fragment>
  );
}
