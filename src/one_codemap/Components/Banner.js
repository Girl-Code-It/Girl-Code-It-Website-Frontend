import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styles from "../CSS/Banner.module.css";
// import Img from "../assets/cpp.png";

export default function Banner(props) {
  return (
    <Jumbotron style={{ maxWidth: "50rem", margin: "auto" }}>
      <Row className={styles.container}>
        <Col>
          <div>
            <h1 className={styles.heading}>
              <span style={{ color: "#008dc8" }}>{props.title}</span> 
            </h1>

            <hr className={styles.hr} />
          </div>

          {/* large screens */}
          <p className={styles.buttonWrapper}>
            <a href = "/codemaps" className = {styles.button}> 
              Go Back 
            </a>
            <a href = "#content" className = {styles.button}> 
              View Content
            </a>
          </p>
        </Col>
        <Col className={styles.img}>
          <img style={{ maxWidth: "100%", width: "100%" }} src={props.img} alt="" />

          {/* small screens */}
          <p className={`${styles.buttonWrapper} ${styles.vp__lt__1000px}`}>
            <a href = "/codemaps" className = {styles.button}> 
              Go Back 
            </a>
            <a href = "#content" className = {styles.button}> 
              View Content
            </a>
          </p>
        </Col>
      </Row>

      <div>
        <p>
          {props.content}
        </p>
      </div>

      <br className = {props.submit !== "" ? styles.Display : styles.noDisplay}/>
      <br className = {props.submit !== "" ? styles.Display : styles.noDisplay}/>

      <a 
        href = {props.submit} 
        className = {props.submit !== "" ? styles.button : styles.noDisplay}
      > 
        Submit here 
      </a>
    </Jumbotron>
  );
}
