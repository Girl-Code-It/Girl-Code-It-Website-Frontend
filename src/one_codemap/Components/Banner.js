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
            <button className={styles.button}>
              <a href = "/codemaps" style = {{color: "white"}}> 
                Go Back 
              </a>
            </button>
            <button className={styles.button}> 
              <a href = "#content" style = {{color: "white"}}> 
                View Content
              </a>
            </button>
          </p>
        </Col>
        <Col className={styles.img}>
          <img style={{ maxWidth: "100%", width: "100%" }} src={props.img} alt="" />

          {/* small screens */}
          <p className={`${styles.buttonWrapper} ${styles.vp__lt__1000px}`}>
            <button className={styles.button}>
              <a href = "/codemaps" style = {{color: "white"}}> 
                Go Back 
              </a>
            </button>
            <button className={styles.button}> 
              <a href = "#content" style = {{color: "white"}}> 
                View Content
              </a>
            </button>
          </p>
        </Col>
      </Row>

      <div>
        <p>
          {props.content}
        </p>
      </div>
    </Jumbotron>
  );
}
