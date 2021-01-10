import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeMapCard from "./CodeMapCard";
import Image__boy from "../assets/boy.png";

export default class CodeMap extends Component {
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
        <h1 style={{ margin: "4rem auto", textAlign: "center" }}>
          Our <span style={{ color: "rgb(0, 141, 200)" }}>CodeMaps</span>
        </h1>
        {this.getCards().map((cardRow, i) => (
          <Row key={i}>
            {cardRow.map((card, i) => (
              <Col xs={12} md={6} key={i}>
                <CodeMapCard codeMap={card} />
              </Col>
            ))}
          </Row>
        ))}

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

        <hr style={{ width: "50%", textAlign: "center" }} />
      </Container>
    );
  }
}
