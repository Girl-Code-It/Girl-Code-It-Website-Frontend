import React, { Component } from "react";
import FAQCard from "./FAQCard";
import Data from "./FAQData";
import styles from "../CSS/FAQS.module.css";
import { Container, Row } from "react-bootstrap";

export default class FAQS extends Component {
  constructor() {
    super();
    this.state = {
      cards: Data
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    const oldcards = [...this.state.cards];
    const cards = oldcards.map((c) => {
      const upc = { ...c };
      if (c.id === id) {
        upc.open = !upc.open;
      }
      return upc;
    });
    this.setState({ cards });
  }

  render() {
    const FAQCards = this.state.cards.map((item) => (
      <FAQCard key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div id="faqs" style={{ marginBottom: "100px" }}>
        <Container sm="fluid">
          <h1 className={`${styles.head}`}>
            Frequently Asked{" "}
            <span style={{ color: "#008dc8" }}> Questions</span>
          </h1>
          <Row style={{ marginTop: "50px" }}>
            <div>{FAQCards}</div>
          </Row>
        </Container>
      </div>
    );
  }
}
