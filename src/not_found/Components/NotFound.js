import React, { Component } from "react";
import { Image, Jumbotron, Container, Button } from "react-bootstrap";
import styles from "../CSS/NotFound.module.css";
import NotFoundImg from "../assets/404.svg";

export default class NotFound extends Component {
  render() {
    return (
      <Jumbotron style = {{backgroundColor: "white"}}>
        <Container>
          <Image
            src = {NotFoundImg} 
            className = {styles.Img}
          />
          <p className = {styles.Error}>
            The page you are looking for doesn’t exist!
            <br/>
            You may have mistyped the address or page maybe removed.
          </p>
          <Button className = {styles.Button}>
            <a href = "/" style = {{color: "white"}}>
              Take me to home
            </a>
          </Button>
        </Container>
      </Jumbotron>
    );
  }
}
