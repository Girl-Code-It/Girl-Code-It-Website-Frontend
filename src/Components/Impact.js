import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ImpactCard from "./ImpactCard";
import styles from "../Css/Impact.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Impact extends Component {
  render() {
    return (
      <Jumbotron style={{ backgroundColor: "#ffffff" }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            How are we creating an{" "}
            <span style={{ color: "#008dc8" }}>Impact</span>?
          </h1>

          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
            <ImpactCard
              impact={{
                name: "Opportunity Calendar",
                imgUrl: "image1.svg",
                para1: "Know right Opportunities",
                para2: "at right time!",
              }}
            />
            <ImpactCard
              impact={{
                name: "CodeMaps",
                imgUrl: "image2.svg",
                para1: "Learn everything the",
                para2: "right way!",
              }}
            />
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
