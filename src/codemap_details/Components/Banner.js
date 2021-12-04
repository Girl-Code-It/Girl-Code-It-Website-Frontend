import React from "react";
import styles from "../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import BannerImage from "../assets/girl.svg"

function Banner() {
  return (
    <Jumbotron id = "home" className = {styles.Jumbotron} fluid>
      <Container className = {styles.Container}>
        <Row>
          <Col md = {6} lg = {6} className = {styles.leftCol}>
            <h1 className = {styles.Heading}>
                Code<span style = {{color: "#008dc8"}}>Map </span>
            </h1>
            <div className = {styles.Rectangle} />
            <h2 className = {styles.TagLine}>
                Learn to code the
                <br></br>
                right way!
            </h2>
            <a href = "#codemaps">
              <button className = {styles.Button}>
                Explore
              </button>
            </a>
          </Col>
          <Col md = {6} lg = {6} className = {styles.rightCol}>
            <Image
                className = {styles.BannerImage}
                src = {BannerImage}
                alt = "BannerImage"
                fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Banner;