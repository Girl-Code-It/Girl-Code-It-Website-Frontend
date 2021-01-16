import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeMapCard from "./CodeMapCard";
import Image__boy from "../assets/boy.png";
import styles from "../CSS/CodeMap.module.css";

export default class CodeMap extends Component {
  constructor() {
    super();

    this.state = {
      cardRows: this.getCards(),
    };
  }

  getCards() {
    return [
      [
        {
          imgUrl: "https://img.icons8.com/ios/452/c-plus-plus-logo.png",
          name: "Data Structures & Algorithms (C++)",
          onecodemapLink: "cpp.json",
        },
        {
          imgUrl: "https://img.icons8.com/wired/2x/java-coffee-cup-logo.png",
          name: "Data Structures & Algorithms (Java)",
          onecodemapLink: "java.json",
        },
      ],
      [
        {
          imgUrl: "https://img.icons8.com/wired/2x/code.png",
          name: "Frontend Web Development",
          onecodemapLink: "front-end webdev.json",
        },
        {
          imgUrl: "https://img.icons8.com/carbon-copy/2x/react.png",
          name: "ReactJS for Beginners",
          onecodemapLink: "front-end.json",
        },
      ],
      [
        {
          imgUrl: "https://img.icons8.com/wired/2x/github.png",
          name: "Github Tutorial",
          onecodemapLink: "github.json",
        }
      ],
    ];
  }

  render() {
    return (
      <Container id = "codemaps">
        <hr style={{ width: "50%", textAlign: "center" }} />
        <h1
          style={{
            margin: "4rem auto",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Our <span style={{ color: "rgb(0, 141, 200)" }}>CodeMaps</span>
        </h1>

        <Row>
          {this.state.cardRows[0].map((card, i) => (
            <Col
              xs={12}
              md={6}
              key={i}
              className={i % 2 === 0 ? styles.row_c1 : styles.row_c2}
            >
              <CodeMapCard codeMap={card} />
            </Col>
          ))}
        </Row>

        <Row>
          {this.state.cardRows[1].map((card, i) => (
            <Col
              xs={12}
              md={6}
              key={i}
              className={i % 2 === 0 ? styles.row_c2 : styles.row_c1}
            >
              <CodeMapCard codeMap={card} />
            </Col>
          ))}
        </Row>

        <Row>
          <Col xs={12} md={6}>
            {this.state.cardRows[2].map((card, i) => (
              <CodeMapCard
                className={i % 2 !== 0 ? styles.row3_c1 : styles.row3_c2}
                key={i}
                codeMap={card}
              />
            ))}
          </Col>
          <Col>
            <img
              style={{
                maxWidth: "100%",
                width: "auto",
                height: "400px",
                display: "block",
                margin: "2rem auto 1rem auto",
              }}
              src={Image__boy}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
