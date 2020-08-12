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
            <span style={{ color: "#008dc8" }}>Impact</span>?
          </h1>

          <Row
            className="justify-content-md-center"
            style={{ marginTop: "50px" }}
          >
<<<<<<< Updated upstream:src/homepage/Components/Impact.js
            {ImpactData}
=======
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
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "5px" }}
          >
            <ImpactCard
              impact={{
                name: "Open-Source Journey",
                imgUrl: "image3.svg",
                para1:
                  "Get your journey in open-source started with our open-source projects!",
                para2: "",
              }}
            />
            <ImpactCard
              impact={{
                name: "Daily Leetcoding ",
                imgUrl: "image4.svg",
                para1: "Solve Leetcode challenges ",
                para2: "every day with our coders!",
              }}
            />
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "5px" }}
          >
            <ImpactCard
              impact={{
                name: "Get Career guidance",
                imgUrl: "image5.svg",
                para1:
                  "Confused about your career in tech, Get Personal guidance from experts",
                para2: "",
              }}
            />
            <ImpactCard
              impact={{
                name: "Build Linkedin Profile",
                imgUrl: "image6.svg",
                para1: "Learn how to make",
                para2: "an impressive profile!",
              }}
            />
>>>>>>> Stashed changes:src/Components/Impact.js
            <hr className={styles.line1} />
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
