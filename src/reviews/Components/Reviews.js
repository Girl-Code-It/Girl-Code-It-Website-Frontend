import React, {Component} from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import styles from "../CSS/ReviewCard.module.css";
import ReviewsData from "./ReviewsData";

export default class Team extends Component {
  constructor() {
    super();
    this.state = {
      ReviewsData
    };
  }
  render() {
    let ReviewsData = this.state.ReviewsData.map((data) => {
      return <ReviewCard key={data.id} data={data} />;
    });

    return (
      <Jumbotron className = {styles.Jumbotron}>
        <Container>
          <h1 className = {styles.Title}>
            What they <span style = {{color: "#008dc8"}}> say about us </span>
          </h1>

          <Row
            className="justify-content-md-center"
          >
            {ReviewsData}
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
