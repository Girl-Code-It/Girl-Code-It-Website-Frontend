import React from "react";
import { Jumbotron, Container, Image, Row, Col } from "react-bootstrap";
import styles from "../CSS/AboutUs.module.css";
import AboutUsImg from "../assets/AboutUsImg.png";

export default function AboutUs({ id }) {
  return (
    <Jumbotron id="about" className={styles.Jumbotron} fluid>
      <Container>
        <h1 className={styles.heading}>
          <span className={styles.About}>About</span>
          <span className={styles.Us}>Us</span>
        </h1>
        <Row>
          <Col md={"auto"} lg={7}>
            <Image className = {styles.AboutImage} src={AboutUsImg} fluid />
          </Col>
          <Col md={"auto"} lg={5}>
            <p className={styles.description}>
              <i> "Knowledge is the only thing that grows when shared." </i>

              <br />
              <br />
              
              Girl Code It aka GCI, is a group of people who firmly 
              believe in this statement and are eager to build a 
              healthy coding culture among young coders. In a world 
              teeming with possibilities due to the rapid growth of 
              technology everywhere, let's not get left behind in the 
              rush! GCI is here to help you navigate your way through 
              the amazing world of computers and coding. 

              <br />
              <br />

              The best thing about the internet is that there is no 
              shortage of information; but sometimes, there is just 
              too much information, which can be overwhelming. To 
              streamline the amount of information in the right way 
              can be a taxing process, but here is where we can be 
              of assistance! Our codemaps are specially structured 
              according to common needs and are easy to follow! All 
              you need to bring with you is the will to learn! 
              
              <br />
              <br />
              
              So what are you waiting for? Come join us!

            </p>
            <br />
            <br />
            <div className={styles.rectangle} />
            <a href = "/meettheteam">
              <button className={styles.knowMore} styles = {{color: "white"}}> 
                Meet our Team 
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
