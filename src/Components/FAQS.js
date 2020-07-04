import React, { Component } from "react";
import FAQCard from "./FAQCard";
import Data from "./FAQData";
import styles from "../Css/FAQS.module.css";

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
    const cards = oldcards.map(c => {
      const upc = { ...c };
      if (c.id === id) {
        upc.open = !upc.open;
      }
      return upc;
    });
    this.setState({ cards });
  }

  render() {
    const FAQCards = this.state.cards.map(item => (
      <FAQCard key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div>
        <div className={`container-fixed`}>
          <h1 className={`${styles.head}`}>
            Frequently Asked{" "}
            <span className={`${styles.blue}`}> Questions</span>
          </h1>
        </div>
        <div className={`${styles.faqs}`}>{FAQCards}</div>
        <div className={`${styles.divider}`} />
      </div>
    );
  }
}
