import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ImpactCard from "./ImpactCard";
import styles from "../CSS/Impact.module.css";
import ImpactData from "./ImpactData";

export default class Impact extends Component {
  constructor() {
    super();
    this.state = {
      ImpactData
    };
  }
  render() {
    let ImpactData = this.state.ImpactData.map((impact) => {
      return <ImpactCard key={impact.id} impact={impact} />;
    });

    return (
      <Jumbotron style={{ backgroundColor: "#ffffff" }}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            How are we creating an{" "}
            <span style={{ color: "#008dc8", fontWeight: 900 }}>Impact</span>?
          </h1>

          <Row
            // className="justify-content-md-center"
            style={{ marginTop: "50px", textAlign: "justify" }}
          >
            {ImpactData}
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
