import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import box from "../assets/box.svg";
import styles from "../CSS/WhyCodeMap.module.css";

export default class WhyCodeMap extends Component {
  render() {
    return (
      <Jumbotron style={{ backgroundColor: "#ffffff" }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            <span style={{ color: "#008dc8" }}>Why </span>CodeMap?
          </h1>
          <Card className={styles.Codemap}>
            <Card.Img
              className={styles.box}
              variant="top"
              src={box}
              alt="box"
            />
            <Card.Body className={styles.content}>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Card.Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
          <hr className={styles.line1} />
        </Container>
      </Jumbotron>
    );
  }
}
