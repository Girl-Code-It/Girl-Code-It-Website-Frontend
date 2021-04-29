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
          imgUrl: "https://img.icons8.com/carbon-copy/2x/react.png",
          name: "ReactJS for Beginners",
          onecodemapLink: "react.json",
        },
        {
            imgUrl: "https://img.icons8.com/wired/2x/github.png",
            name: "Github Tutorial",
            onecodemapLink: "github.json",
        },
      ],
      [
        {
            imgUrl: "https://img.icons8.com/wired/512/000000/python.png",
            name: "Python Programming for Beginners",
            onecodemapLink: "python.json",
        },
        {
            imgUrl: "https://img.icons8.com/wired/2x/code.png",
            name: "Frontend Web Development",
            onecodemapLink: "front-end webdev.json",
        },
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
            <Col xs={12} md={6}>
            {this.state.cardRows[0].map((card, i) => (
              <CodeMapCard 
              className={i % 2 === 0 ? styles.row3_c1 : styles.row3_c2}
              key={i}
              codeMap={card}            
              />
              ))}
            </Col>     
            <Col xs={12} md={6}>
            {this.state.cardRows[2].map((card, i) => (
              <CodeMapCard
                className={i % 2 !== 0 ? styles.row3_c1 : styles.row3_c2}
                key={i}
                codeMap={card}
              />
            ))}
          </Col>     
        </Row>

        <Row>
            <Col xs={12} md={6}>
            {this.state.cardRows[1].map((card, i) => (
              <CodeMapCard 
              className={i % 2 === 0 ? styles.row3_c1 : styles.row3_c2}
              key={i}
              codeMap={card}            
              />
              ))}
            </Col>
            <Col md={6} >
            <img className={styles.imgboy}
              style={{
                maxWidth: "100%",
                width: "auto",
                height: "380px",
                display: "block",
                margin: "0rem auto 1rem auto",
    
              }}
              src={Image__boy}
              alt=""
            />
          </Col >        
        </Row>

        <Row>

        </Row>
        <Col >
            <img className={styles.small_imgboy}
              style={{
                maxWidth: "100%",
                width: "auto",
                height: "330px",
                display: "block",
                margin: "2rem auto 1rem auto",
              }}
              src={Image__boy}
              alt=""
            />
          </Col >   
      </Container>
    );
  }
}
