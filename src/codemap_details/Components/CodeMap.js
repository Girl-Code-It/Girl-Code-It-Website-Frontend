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
          imgUrl: "https://img.icons8.com/ios/50/000000/c-plus-plus-logo.png",
          name: "C++ for Beginners",
        },
        {
          imgUrl: "https://img.icons8.com/wired/64/000000/code.png",
          name: "Front-Web Dev",
        },
      ],
      [
        {
          imgUrl: "https://img.icons8.com/ios/50/000000/c-plus-plus-logo.png",
          name: "Advanced C++",
        },
        {
          imgUrl: "https://img.icons8.com/carbon-copy/100/000000/react.png",
          name: "Frontend (ReactJS)",
        },
      ],
      [
        {
          imgUrl:
            "https://img.icons8.com/wired/64/000000/java-coffee-cup-logo.png",
          name: "Java for Beginners",
        },
        {
          imgUrl:
            "https://img.icons8.com/wired/64/000000/java-coffee-cup-logo.png",
          name: "Advanced Java",
        },
      ],
    ];
  }

  render() {
    return (
      <Container>
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
                display: "block",
                margin: "2rem auto 1rem auto",
              }}
              src={Image__boy}
              alt=""
            />
          </Col>
        </Row>

        <hr style={{ width: "50%", textAlign: "center" }} />
      </Container>
    );
  }
}
