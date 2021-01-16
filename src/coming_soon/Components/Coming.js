import React, { Component } from "react";
import { Image, Jumbotron, Container } from "react-bootstrap";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "../CSS/Coming.module.css";
import ComingImg from "../assets/coming.svg";

export default class Coming extends Component {
  render() {
    return (
      <Jumbotron style = {{backgroundColor: "white"}}>
        <Container>
            <h1 className = {styles.Title}>
                Coming Soon
            </h1>
            <Image
                src = {ComingImg} 
                className = {styles.Img}
            />
            <p className = {styles.Message}>
                We are under construction!
                <br/>
                <br/>
                Opportunity Calendar is running on our social media handles. 
                Find all the latest opportunities that fit you.
            </p>
            <div className = {styles.SocialLinks}>
                <a href = "https://www.linkedin.com/company/14568052/admin/" className = {styles.Shift}> <FaLinkedinIn /> </a>
                <a href = "https://www.instagram.com/girlcodeit/" className = {styles.Shift}> <FaInstagram /> </a>
                <a href = "https://twitter.com/GirlCodeIt1" className = {styles.Shift}> <FaTwitter /> </a>
            </div>
        </Container>
      </Jumbotron>
    );
  }
}
