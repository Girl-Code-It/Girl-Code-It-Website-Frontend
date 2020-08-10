import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import ImpactCard from "./ImpactCard";
import styles from "../Css/Impact.module.css";

export default class Impact extends Component {
  constructor() {
    super();
    this.state = {
      impactCards: [
        {
          id: 1,
          name: "Opportunity Calendar",
          imgUrl: "image1.svg",
          para1: "Know right Opportunities",
          para2: "at right time!",
        },
        {
          id: 2,
          name: "CodeMaps",
          imgUrl: "image2.svg",
          para1: "Learn everything the",
          para2: "right way!",
        },
        {
          id: 3,
          name: "Open-Source Journey",
          imgUrl: "image3.svg",
          para1:
            "Get your journey in open-source started with our open-source projects!",
          para2: "",
        },
        {
          id: 4,
          name: "Daily Leetcoding ",
          imgUrl: "image4.svg",
          para1: "Solve Leetcode challenges ",
          para2: "every day with our coders!",
        },
        {
          id: 5,
          name: "Get Career guidance",
          imgUrl: "image5.svg",
          para1:
            "Confused about your career in tech, Get Personal guidance from experts",
          para2: "",
        },
        {
          id: 6,
          name: "Build Linkedin Profile",
          imgUrl: "image6.svg",
          para1: "Learn how to make",
          para2: "an impressive profile!",
        },
      ],
    };
  }
  render() {
    let impactCards = this.state.impactCards.map((impact) => {
      return <ImpactCard key={impact.id} impact={impact} />;
    });
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
            {impactCards}
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
