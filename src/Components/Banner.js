import React from "react";
import styles from "../Css/Banner.module.css";
import { Container, Row, Col } from "react-bootstrap";
import code from "../assets/code.svg";
import girl from "../assets/girl.svg";

export default function Banner() {
  return (
    <Container>
      <div className={styles.main}>
        <Row>
          <Col xs={12}>
            <div className={styles.head}>
              Give wings to
              <br />
              your <span className={styles.dreams}>dreams</span>
              <hr className={styles.hr} />
            </div>
          </Col>
          <Col xs={12}>
            <div>
              <img className={styles.code} src={code} alt="code" />
              <img className={styles.girl} src={girl} alt="girl" />
              <div className={styles.head}>
                <button href="#" className={`border-0 ${styles.btn1}`}>
                  About Us
                </button>
                <button href="#" className={`border-0 ${styles.btn2}`}>
                  Join GCI
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
