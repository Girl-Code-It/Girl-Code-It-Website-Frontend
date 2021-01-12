import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
import styles from "../CSS/Banner.module.css";
import Img from "../assets/image.png";

export default function Banner(props) {
  return (
    <Jumbotron style={{ maxWidth: "50rem", margin: "auto" }}>
      <Row className={styles.container}>
        <Col>
          <div>
            <h1 className={styles.heading}>
              <span style={{ color: "#008dc8" }}>{props.title || "C++"}</span>{" "}
              for Beginners
            </h1>

            <hr className={styles.hr} />
          </div>

          {/* large screens */}
          <p className={styles.buttonWrapper}>
            <button className={styles.button}>View Content</button>
            <button className={styles.button}>View Milstones</button>
          </p>
        </Col>
        <Col className={styles.img}>
          <img style={{ maxWidth: "100%", width: "100%" }} src={Img} alt="" />

          {/* small screens */}
          <p className={`${styles.buttonWrapper} ${styles.vp__lt__1000px}`}>
            <button className={styles.button}>View Content</button>
            <button className={styles.button}>View Milstones</button>
          </p>
        </Col>
      </Row>

      <div>
        <p>
          Sit maiores neque ad deserunt fugit placeat. Dolorum cumque omnis
          nulla iste rem Quae laudantium eligendi minus dicta ut Quibusdam odit
          dicta voluptas veniam illo Nostrum commodi explicabo quos eaque
        </p>
        <p>
          Consectetur itaque autem accusamus ipsa illo inventore At eligendi a
          repellendus sapiente dicta reprehenderit quaerat. Ut cum aut non
          molestias ipsa doloremque Quod dolor laudantium id laborum ipsa? Vel
          sequi
        </p>
        <h3>Pre-Requisites</h3>
        <p>
          Elit in voluptate veniam porro modi aut. Numquam in obcaecati delectus
          esse officiis, excepturi! Fugit vero aliquam corrupti quis ducimus!
          Aliquid necessitatibus quo molestiae voluptas dolorum voluptatibus?
          Sapiente nesciunt laborum
        </p>
      </div>
    </Jumbotron>
  );
}
