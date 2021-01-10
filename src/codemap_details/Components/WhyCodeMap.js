import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import box from "../assets/box.svg";
import styles from "../CSS/WhyCodeMap.module.css";

class WhyCodeMap extends Component {
  render() {
    return (
      <Jumbotron className={styles.background}>
        <Container fluid="sm">
          <h1 className={styles.Heading}>
            <span className={styles.headingColor}>Why </span>CodeMap?
          </h1>
          <Card className={styles.Codemap}>
            <Card.Img
              className={styles.box}
              variant="top"
              src={box}
              alt="box"
            />
            <Card.Body>
              <Card.Text className={styles.content} style = {{marginTop: "-19.5%"}}>
                In life, everything needs a structure to work properly. That is
                exactly what Codemaps do, bring structure into what can otherwise 
                be a chaotic journey. 
              </Card.Text>
              <Card.Text className={styles.content}>
                We have compiled lessons for learning different 
                coding languages and development skills as roadmaps, and divided the 
                major phases as “milestones”, so you know how far you have come since 
                the beginning!
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <hr className={styles.line1} /> */}
        </Container>
      </Jumbotron>

    );
  }
}

export default WhyCodeMap;
